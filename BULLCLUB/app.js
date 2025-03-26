import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
    WagmiCore,
    WagmiCoreChains,
    WagmiCoreConnectors,
  } from "https://unpkg.com/@web3modal/ethereum@2.7.1";
  
  import { Web3Modal } from "https://unpkg.com/@web3modal/html@2.7.1";
  
  // 0. Import wagmi dependencies
  const { polygon } = WagmiCoreChains;
  const { configureChains, createConfig } = WagmiCore;
  
  // 1. Define chains
  const chains = [polygon];
  const projectId = "9ba1c138ff7ad815f7026b920b652f0b";
  
  // 2. Configure wagmi client
  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
      ...w3mConnectors({ chains, version: 2, projectId }),
      new WagmiCoreConnectors.CoinbaseWalletConnector({
        chains,
        options: {
          appName: "html wagmi example",
        },
      }),
    ],
    publicClient,
  });
  
  // 3. Create ethereum and modal clients
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  export const web3Modal = new Web3Modal(
    {
      projectId,
      walletImages: {
        safe: "./face.png",
      },
    },
    ethereumClient
  );

import { contractABI } from './abi.js';
const LINKSHORT = "BULLCLUB";

// Ganti dengan alamat smart contract
const contractAddress ="0x5BdCac26281fec02c9Eff6525849d7477F56F557";

const TOKEN_ADDRESSES = {
    PAYTOKENA: "0x554cd6bdD03214b10AafA3e0D4D42De0C5D2937b", // Contract ID token Payment (USDT)
    PAYTOKENB: "0x...", // Alamat Token B
    PAYTOKENC: "0x...", // Alamat Token C
    PAYTOKEND: "0x...", // Alamat Token D
    PAYTOKENE: "0x...", // Alamat Token E
  };

// Alamat referral default
const DEFAULT_REFERRAL_ADDRESS = "0x5BdCac26281fec02c9Eff6525849d7477F56F557";
document.getElementById("contractFairlaunch").textContent = contractAddress;
// Inisialisasi provider dan signer
let provider, signer, contract;

// Fungsi untuk memotong alamat wallet (misal: 0x45...Ytd6)
function shortenAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  
  // Fungsi untuk menghasilkan link referral
  function generateReferralLink(address) {
    const baseUrl = `https://fairlaunch.cloud/${LINKSHORT}`; // Gunakan contractAddress
    return `${baseUrl}?refId=${address}`;
  }
  
  // Fungsi untuk menyalin link referral ke clipboard
function copyReferralLink() {
    const referralLink = document.getElementById("referralLink").href;
  
    navigator.clipboard.writeText(referralLink)
      .then(() => {
        Swal.fire({
            title: "Success",
            text: "Referral link copied to clipboard!",
            icon: "success",
            confirmButtonText: "OK",
          });
      })
      .catch((error) => {
        console.error("Failed to copy referral link:", error);
        Swal.fire({
            title: "Error",
            text: "Failed to copy referral link. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
      });
  }
  
  // Event listener untuk tombol copy
  document.getElementById("copyReferralLinkBtn").addEventListener("click", copyReferralLink);
  
  /// Fungsi untuk membaca parameter `refId` dari URL
function getReferralFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("refId"); // Ambil nilai `refId` dari URL
  }
  
  
  // Fungsi untuk memeriksa allowance
  async function checkAllowance(tokenAddress, ownerAddress, spenderAddress) {
    const tokenContract = new ethers.Contract(tokenAddress, [
      "function allowance(address owner, address spender) external view returns (uint256)",
    ], provider);
  
    const allowance = await tokenContract.allowance(ownerAddress, spenderAddress);
    return allowance;
  }
  async function getTokenDecimals(tokenAddress, provider) {
    const erc20Abi = ["function decimals() view returns (uint8)"];
    const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, provider);
    return await tokenContract.decimals();
}

  // Fungsi untuk menginisialisasi tombol berdasarkan status allowance
  async function initializeButtons() {
    const amount = document.getElementById("amount").value;
    const token = document.getElementById("token").value;
	
  
    if (!amount || !token) return;
	const tokenAddress = TOKEN_ADDRESSES[token];
	const decimals = await getTokenDecimals(tokenAddress, provider);
    const amountInWei = ethers.utils.parseUnits(amount, decimals);
    
    const ownerAddress = await signer.getAddress();
  
    // Periksa allowance
    const allowance = await checkAllowance(tokenAddress, ownerAddress, contractAddress);
  
    if (allowance.gte(amountInWei)) {
      // Jika allowance cukup, tampilkan tombol Contribute
      document.getElementById("approveBtn").style.display = "none";
      document.getElementById("contributeBtn").style.display = "block";
    } else {
      // Jika allowance tidak cukup, tampilkan tombol Approve Allowance
      document.getElementById("approveBtn").style.display = "block";
      document.getElementById("contributeBtn").style.display = "none";
    }
  }
  
  // Fungsi untuk menghubungkan wallet
  async function checkWalletConnection() {
    if (!window.ethereum) {
      console.error("Ethereum provider not found");
      return;
    }
  
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  
    const accounts = await provider.listAccounts(); // Periksa akun yang sudah terhubung
  
    if (accounts.length > 0) {
      const referralAddress = accounts[0];
      const referralLink = generateReferralLink(referralAddress);
  
      // Tampilkan dan perbarui elemen referral link
      document.getElementById("referralLinkContainer").style.display = "block";
      document.getElementById("referralLink").textContent = referralLink;
      document.getElementById("referralLink").href = referralLink;
      
      
    }
  }
  // Event listener untuk memantau perubahan akun
  ethereumClient.watchAccount((account) => {
    if (account.address) {
      checkWalletConnection();
    } else {
      
    }
  });

  // Fungsi untuk menyetujui allowance
  async function approveAllowance(tokenAddress, amountInWei) {
    const tokenContract = new ethers.Contract(tokenAddress, [
      "function approve(address spender, uint256 amount) external returns (bool)",
    ], signer);

	const approveBtn = document.getElementById("approveBtn");
    approveBtn.disabled = true;
  
    try {
      const tx = await tokenContract.approve(contractAddress, amountInWei);
      await tx.wait();
      console.log("Allowance approved");
  
      
  
      Swal.fire({
        title: "Success",
        text: "Allowance approved successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error approving allowance:", error);
	  approveBtn.disabled = false;
      Swal.fire({
        title: "Error",
        text: "Failed to approve allowance.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
  
  // Fungsi untuk menghandle kontribusi
  async function contribute() {
    const amount = document.getElementById("amount").value;
    const token = document.getElementById("token").value;
    const referral = document.getElementById("referral").value;
  
    if (!amount || !token) {
      Swal.fire({
        title: "Error",
        text: "Please enter amount and select token",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
  
    document.getElementById("status").textContent = "Processing...";
    document.getElementById("contributeBtn").disabled = true;
	

    try {
		const tokenAddress = TOKEN_ADDRESSES[token];
		const decimals = await getTokenDecimals(tokenAddress, provider);
      const amountInWei = ethers.utils.parseUnits(amount, decimals); // Konversi ke wei
      
      const referralAddress = referral || ethers.constants.AddressZero; // Jika tidak ada referral, gunakan address zero
  
      // Lakukan kontribusi
      const tx = await contract.contribute(amountInWei, tokenAddress, referralAddress);
      await tx.wait();
  
      Swal.fire({
        title: "Success",
        text: "Contribution successful! Rewards distributed.",
        icon: "success",
        confirmButtonText: "OK",
      });
  
      // Sembunyikan tombol Contribute setelah kontribusi berhasil
      document.getElementById("contributeBtn").style.display = "none";
  
      // Tampilkan kembali tombol Approve Allowance (opsional)
      document.getElementById("approveBtn").style.display = "block";
    } catch (error) {
      console.error("Error contributing:", error);
      Swal.fire({
        title: "Error",
        text: "Contribution failed.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      document.getElementById("contributeBtn").disabled = false;
    }
  }
  
  // Fungsi untuk mengisi input referral secara otomatis
  function fillReferralInput() {
    const referralAddress = getReferralFromUrl() || DEFAULT_REFERRAL_ADDRESS; // Gunakan refId dari URL atau alamat default
    document.getElementById("referral").value = referralAddress;
  }
  
  // Event listener untuk tombol Connect Wallet
  document.getElementById("connectWalletBtn").addEventListener("click", connectWallet);
  
  // Event listener untuk tombol approve
  document.getElementById("approveBtn").addEventListener("click", async () => {
    const amount = document.getElementById("amount").value;
    const token = document.getElementById("token").value;
  
    if (!amount || !token) {
      Swal.fire({
        title: "Error",
        text: "Please enter amount and select token",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

	const tokenAddress = TOKEN_ADDRESSES[token];
	const decimals = await getTokenDecimals(tokenAddress, provider);
    const amountInWei = ethers.utils.parseUnits(amount, decimals);
    
  
    await approveAllowance(tokenAddress, amountInWei);
  });
  
  // Event listener untuk tombol contribute
  document.getElementById("contributeBtn").addEventListener("click", contribute);
  
  // Isi input referral secara otomatis saat halaman dimuat
  window.addEventListener("load", async () => {
    await fillReferralInput();
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("approveBtn").addEventListener("click", async () => {
        console.log("Approve button clicked");
        const amount = document.getElementById("amount").value;
        const token = document.getElementById("token").value;

        if (!amount || !token) {
            console.error("Amount or token missing");
            return;
        }

        await checkWalletConnection();
        
    });
});