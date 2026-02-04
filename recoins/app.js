import { contractABI } from './abi.js'; 
import {
    WagmiAdapter,
    createAppKit,
    networks
} from 'https://cdn.jsdelivr.net/npm/@reown/appkit-cdn@1.7.0/dist/appkit.js';
import { reconnect } from 'https://esm.sh/@wagmi/core@2.x';

export const projectId = '9ba1c138ff7ad815f7026b920b652f0b'; 

const appKitNetworks = [networks.polygon];


const wagmiAdapter = new WagmiAdapter({
    networks: appKitNetworks,
    projectId
});


const modal = createAppKit({
    adapters: [wagmiAdapter],
    networks: appKitNetworks,
    enableWalletGuide: false,
    enableWalletConnect: true,
    projectId,
    themeMode: 'dark',
    themeVariables: {
        '--w3m-accent': '#e4745d',
    },
    features: {
        analytics: true,
        email: false,
        socials: false,
        onramp: false,
        swaps: false,
    },
    featuredWalletIds: [
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
        '8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4',
        '0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150',
        '20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66',
        '15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f',
        'bb71b54ced62aa11f76e4f3edacb37a41300807506db840b98b740379f99cc71'
      ],
    metadata: {
        name: 'Fairlaunch Community Program',
        description: 'Fairlaunch For RCA Community',
        url: window.location.href,
        icons: ['https://fairlaunch.vip/recoins/rca.png']
    }
});

reconnect(wagmiAdapter.wagmiConfig);


let accountState = {};
let eip155Provider = null;
let provider, signer, contract;


modal.subscribeAccount(state => {
    accountState = state;
    console.log("Account state updated:", state);
    if (state.address && eip155Provider) {
        initializeProvider();
        updateUI();
    } else {
      updateUI();
    }
});

modal.subscribeProviders(state => {
    eip155Provider = state['eip155'];
    if (eip155Provider && accountState.address) {
        initializeProvider();
        updateUI();
    } else {
      updateUI();
    }
});

document.getElementById('open-modal')?.addEventListener('click', () => {
    modal.open()
});

const LINKSHORT = "recoins";
const contractAddress = "0x16AB421834B9Dd9eFba68BA64ab812B03cab65A7";

const TOKEN_ADDRESSES = {
    PAYTOKENA: "0x554cd6bdD03214b10AafA3e0D4D42De0C5D2937b", // Contract ID token Payment (USDT)
    PAYTOKENB: "0x...", // Alamat Token B
    PAYTOKENC: "0x...", // Alamat Token C
    PAYTOKEND: "0x...", // Alamat Token D
    PAYTOKENE: "0x...", // Alamat Token E
};

const DEFAULT_REFERRAL_ADDRESS = "0x16AB421834B9Dd9eFba68BA64ab812B03cab65A7";
document.getElementById("contractFairlaunch").textContent = contractAddress;

function initializeProvider() {
    if (eip155Provider && accountState.address) {
        provider = new ethers.providers.Web3Provider(eip155Provider);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
    }
}

function shortenAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
function updateUI() {
  const connectButton = document.getElementById("open-modal");
  const referralContainer = document.getElementById("referralLinkContainer");
  
  if (accountState.isConnected) {

    const shortenedAddress = shortenAddress(accountState.address);
    
    connectButton.innerHTML = `
      <span class="wallet-connected">
        <img src="rca.png" class="wallet-favicon" alt="Wallet Icon">
        ${shortenedAddress}
      </span>
    `;
    connectButton.classList.add('connected');
    connectButton.classList.remove('disconnected');

    const referralLink = generateReferralLink(accountState.address);
    referralContainer.style.display = "block";
    document.getElementById("referralLink").textContent = referralLink;
    document.getElementById("referralLink").href = referralLink;

    initializeButtons();
  } else {

    connectButton.innerHTML = `
      <span class="wallet-disconnected">
        Connect Wallet
      </span>
    `;
    connectButton.classList.add('disconnected');
    connectButton.classList.remove('connected');

    referralContainer.style.display = "none";

    document.getElementById("approveBtn").style.display = "block";
    document.getElementById("contributeBtn").style.display = "none";
  }
}

function generateReferralLink(address) {
    const baseUrl = `https://fairlaunch.vip/${LINKSHORT}`;
    return `${baseUrl}?refId=${address}`;
}

function copyReferralLink() {
    const referralLink = document.getElementById("referralLink").textContent;
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

function getReferralFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("refId");
}

async function getTokenDecimals(tokenAddress) {
    const erc20Abi = ["function decimals() view returns (uint8)"];
    const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, provider);
    return await tokenContract.decimals();
}

async function checkAllowance(tokenAddress, ownerAddress, spenderAddress) {
    const tokenContract = new ethers.Contract(tokenAddress, [
        "function allowance(address owner, address spender) external view returns (uint256)",
    ], provider);

    const allowance = await tokenContract.allowance(ownerAddress, spenderAddress);
    return allowance;
}

async function initializeButtons() {
    if (!accountState.address || !provider) return;
    
    const amount = document.getElementById("amount").value;
    const token = document.getElementById("token").value;

    if (!amount || !token) return;
    
    const tokenAddress = TOKEN_ADDRESSES[token];
    const decimals = await getTokenDecimals(tokenAddress);
    const amountInWei = ethers.utils.parseUnits(amount, decimals);
    const ownerAddress = accountState.address;

    const allowance = await checkAllowance(tokenAddress, ownerAddress, contractAddress);

    if (allowance.gte(amountInWei)) {
        document.getElementById("approveBtn").style.display = "none";
        document.getElementById("contributeBtn").style.display = "block";
    } else {
        document.getElementById("approveBtn").style.display = "block";
        document.getElementById("contributeBtn").style.display = "none";
    }
}

async function approveAllowance(tokenAddress, amountInWei) {
    const tokenContract = new ethers.Contract(tokenAddress, [
        "function approve(address spender, uint256 amount) external returns (bool)",
    ], signer);

    const approveBtn = document.getElementById("approveBtn");
    approveBtn.disabled = true;

    try {
        const tx = await tokenContract.approve(contractAddress, amountInWei);
        await tx.wait();
        await initializeButtons();
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

async function contribute() {
    if (!accountState.address) {
        Swal.fire({
            title: "Error",
            text: "Please connect your wallet first",
            icon: "error",
            confirmButtonText: "OK",
        });
        return;
    }

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
        const decimals = await getTokenDecimals(tokenAddress);
        const amountInWei = ethers.utils.parseUnits(amount, decimals);
        const referralAddress = referral || ethers.constants.AddressZero;

        const tx = await contract.contribute(amountInWei, tokenAddress, referralAddress);
        await tx.wait();

        Swal.fire({
            title: "Success",
            text: "Contribution successful! Rewards distributed.",
            icon: "success",
            confirmButtonText: "OK",
        });

        document.getElementById("contributeBtn").style.display = "none";
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

function fillReferralInput() {
    const referralAddress = getReferralFromUrl() || DEFAULT_REFERRAL_ADDRESS;
    document.getElementById("referral").value = referralAddress;
}

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
    const decimals = await getTokenDecimals(tokenAddress);
    const amountInWei = ethers.utils.parseUnits(amount, decimals);
    
    await approveAllowance(tokenAddress, amountInWei);
});

document.getElementById("contributeBtn").addEventListener("click", contribute);
document.getElementById("copyReferralLinkBtn").addEventListener("click", copyReferralLink);

window.addEventListener("load", fillReferralInput);
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("amount").addEventListener("change", initializeButtons);
    document.getElementById("token").addEventListener("change", initializeButtons);
});