const CHAIN_ID = "0x89"; 
const LINKSHORT = "RCA01";

// Ganti dengan alamat smart contract
const contractAddress ="0x96715BE1Cd356f3fB1522712F35Cf0b3174088Fe";
const contractABI = [
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "lpAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "projectAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "teamDevAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "extraAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "partnerAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "RewardTokenA",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "RewardTokenB",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "RewardTokenC",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "RewardTokenD",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "RewardTokenE",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "DecimalTokenA",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "DecimalTokenB",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "DecimalTokenC",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "DecimalTokenD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "DecimalTokenE",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "LockToken",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "PayTokenA",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "PayTokenB",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "PayTokenC",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "PayTokenD",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "PayTokenE",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "lpSharePercentage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "projectSharePercentage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "teamDevSharePercentage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "extraSharePercentage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ownerSharePercentage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralSharePercentage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenA",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenB",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenC",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenE",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenAforLp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenBforLp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenCforLp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenDforLp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenEforLp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenAforPartner",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenBforPartner",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenCforPartner",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenDforPartner",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardAmountTokenEforPartner",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralPercentagesGen1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralPercentagesGen2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralPercentagesGen3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralPercentagesGen4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralPercentagesGen5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenAGen1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenAGen2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenAGen3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenAGen4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenAGen5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenBGen1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenBGen2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenBGen3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenBGen4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenBGen5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenCGen1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenCGen2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenCGen3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenCGen4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenCGen5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenDGen1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenDGen2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenDGen3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenDGen4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenDGen5",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenEGen1",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenEGen2",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenEGen3",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenEGen4",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "referralRewardTokenEGen5",
						"type": "uint256"
					}
				],
				"internalType": "struct FairlaunchPaymentSplitter.Config",
				"name": "_config",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "Contribution",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "RewardAmountA",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "RewardAmountB",
				"type": "uint256"
			}
		],
		"name": "RewardDistributed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardLockTokenTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "RewardTokensUnlocked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DecimalTokenA",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DecimalTokenB",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DecimalTokenC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DecimalTokenD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DecimalTokenE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LockToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PayTokenA",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PayTokenB",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PayTokenC",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PayTokenD",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PayTokenE",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RewardTokenA",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RewardTokenB",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RewardTokenC",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RewardTokenD",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RewardTokenE",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contributorsList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "extraAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "extraSharePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasContributed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isRewardTokenLocked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lockedTokenRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lpAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lpSharePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ownerSharePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "partnerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "projectAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "projectSharePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralPercentagesGen1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralPercentagesGen2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralPercentagesGen3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralPercentagesGen4",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralPercentagesGen5",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenAGen1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenAGen2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenAGen3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenAGen4",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenAGen5",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenBGen1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenBGen2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenBGen3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenBGen4",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenBGen5",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenCGen1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenCGen2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenCGen3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenCGen4",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenCGen5",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenDGen1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenDGen2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenDGen3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenDGen4",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenDGen5",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenEGen1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenEGen2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenEGen3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenEGen4",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralRewardTokenEGen5",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralSharePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "generation",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenA",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenAforLp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenAforPartner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenB",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenBforLp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenBforPartner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenCforLp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenCforPartner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenDforLp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenDforPartner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenEforLp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardAmountTokenEforPartner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_extraAddress",
				"type": "address"
			}
		],
		"name": "setExtraAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_extraSharePercentage",
				"type": "uint256"
			}
		],
		"name": "setExtraSharePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_LockToken",
				"type": "address"
			}
		],
		"name": "setLockToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lpAddress",
				"type": "address"
			}
		],
		"name": "setLpAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lpSharePercentage",
				"type": "uint256"
			}
		],
		"name": "setLpSharePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ownerSharePercentage",
				"type": "uint256"
			}
		],
		"name": "setOwnerSharePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_partnerAddress",
				"type": "address"
			}
		],
		"name": "setPartnerAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PayTokenA",
				"type": "address"
			}
		],
		"name": "setPayTokenA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PayTokenB",
				"type": "address"
			}
		],
		"name": "setPayTokenB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PayTokenC",
				"type": "address"
			}
		],
		"name": "setPayTokenC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PayTokenD",
				"type": "address"
			}
		],
		"name": "setPayTokenD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PayTokenE",
				"type": "address"
			}
		],
		"name": "setPayTokenE",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_projectAddress",
				"type": "address"
			}
		],
		"name": "setProjectAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectSharePercentage",
				"type": "uint256"
			}
		],
		"name": "setProjectSharePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "setReferral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralSharePercentage",
				"type": "uint256"
			}
		],
		"name": "setReferralSharePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenA",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenAforLp",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenAforLp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenAforPartner",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenAforPartner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenB",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenBforLp",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenBforLp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenBforPartner",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenBforPartner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenC",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenCforLp",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenCforLp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenCforPartner",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenCforPartner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenD",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenDforLp",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenDforLp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenDforPartner",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenDforPartner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenE",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenE",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenEforLp",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenEforLp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmountTokenEforPartner",
				"type": "uint256"
			}
		],
		"name": "setRewardAmountTokenEforPartner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_RewardTokenA",
				"type": "address"
			}
		],
		"name": "setRewardTokenA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_RewardTokenB",
				"type": "address"
			}
		],
		"name": "setRewardTokenB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_RewardTokenC",
				"type": "address"
			}
		],
		"name": "setRewardTokenC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_RewardTokenD",
				"type": "address"
			}
		],
		"name": "setRewardTokenD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_RewardTokenE",
				"type": "address"
			}
		],
		"name": "setRewardTokenE",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_teamDevAddress",
				"type": "address"
			}
		],
		"name": "setTeamDevAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_teamDevSharePercentage",
				"type": "uint256"
			}
		],
		"name": "setTeamDevSharePercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralPercentagesGen1",
				"type": "uint256"
			}
		],
		"name": "setreferralPercentagesGen1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralPercentagesGen2",
				"type": "uint256"
			}
		],
		"name": "setreferralPercentagesGen2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralPercentagesGen3",
				"type": "uint256"
			}
		],
		"name": "setreferralPercentagesGen3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralPercentagesGen4",
				"type": "uint256"
			}
		],
		"name": "setreferralPercentagesGen4",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralPercentagesGen5",
				"type": "uint256"
			}
		],
		"name": "setreferralPercentagesGen5",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenAGen1",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenAGen1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenAGen2",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenAGen2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenAGen3",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenAGen3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenAGen4",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenAGen4",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenAGen5",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenAGen5",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenBGen1",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenBGen1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenBGen2",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenBGen2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenBGen3",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenBGen3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenBGen4",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenBGen4",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenBGen5",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenBGen5",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenCGen1",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenCGen1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenCGen2",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenCGen2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenCGen3",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenCGen3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenCGen4",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenCGen4",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenCGen5",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenCGen5",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenDGen1",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenDGen1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenDGen2",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenDGen2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenDGen3",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenDGen3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenDGen4",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenDGen4",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenDGen5",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenDGen5",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenEGen1",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenEGen1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenEGen2",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenEGen2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenEGen3",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenEGen3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenEGen4",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenEGen4",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referralRewardTokenEGen5",
				"type": "uint256"
			}
		],
		"name": "setreferralRewardTokenEGen5",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamDevAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamDevSharePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalContributions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlockRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const TOKEN_ADDRESSES = {
    PAYTOKENA: "0x554cd6bdD03214b10AafA3e0D4D42De0C5D2937b", // Contract ID token Payment (USDT)
    PAYTOKENB: "0x...", // Alamat Token B
    PAYTOKENC: "0x...", // Alamat Token C
    PAYTOKEND: "0x...", // Alamat Token D
    PAYTOKENE: "0x...", // Alamat Token E
  };

// Alamat referral default
const DEFAULT_REFERRAL_ADDRESS = "0x96715BE1Cd356f3fB1522712F35Cf0b3174088Fe";
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
  
  // Fungsi untuk beralih ke jaringan BSC Testnet
  async function switchToBSC() {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: CHAIN_ID, // BSC Testnet
            chainName: "Polygon Mainnet",
            nativeCurrency: {
              name: "POL",
              symbol: "POL",
              decimals: 18,
            },
            rpcUrls: ["https://polygon-rpc.com"],
            blockExplorerUrls: ["https://polygonscan.com"],
          },
        ],
      });
    } catch (error) {
      console.error("Error switching to BSC:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to switch to Polygon. Please switch manually.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
  
  // Fungsi untuk memeriksa jaringan
  async function checkNetwork() {
    if (window.ethereum) {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
  
      if (chainId !== CHAIN_ID) {
        const { isConfirmed } = await Swal.fire({
          title: "Network Mismatch",
          text: "You are not connected to Polygon Mainnet. Please Check Your RPC Network!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Switch",
          cancelButtonText: "Cancel",
        });
  
        if (isConfirmed) {
          await switchToBSC();
          return false; // Kembali ke fungsi connectWallet setelah beralih
        }
        return false;
      }
      return true;
    } else {
      Swal.fire({
        title: "Error",
        text: "Please install MetaMask!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }
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
  async function connectWallet() {
    const isCorrectNetwork = await checkNetwork();
    if (!isCorrectNetwork) return;
  
    try {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Request akses ke akun MetaMask
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      // Dapatkan alamat wallet yang terhubung
      const address = await signer.getAddress();
      const shortenedAddress = shortenAddress(address);
  
      // Update tombol Connect Wallet
      document.getElementById("connectWalletBtn").textContent = shortenedAddress;
      document.getElementById("connectWalletBtn").disabled = true;
  
      // Tampilkan link referral
      const referralLink = generateReferralLink(address);
      document.getElementById("referralLink").href = referralLink;
      document.getElementById("referralLink").textContent = referralLink;
      document.getElementById("referralLinkContainer").style.display = "block";
  
      // Inisialisasi tombol berdasarkan status allowance
      await initializeButtons();
  
      console.log("Wallet connected:", address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to connect wallet.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
  
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
  
      // Perbarui tampilan tombol
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
    if (signer) {
      await initializeButtons();
    }
  });