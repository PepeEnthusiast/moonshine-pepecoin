// https://en.bitcoin.it/wiki/List_of_address_prefixes
const networks = {
	pepecoin: {
		messagePrefix: '\x18Pepecoin Signed Message:\n',
		bech32: '',
		bip32: {
			public: 0x02facafd,
			private: 0x02fac398
		},
		pubKeyHash: 0x38,
		scriptHash: 0x16,
		wif: 0x9e
	}
};

//Max amount of BTC/LTC.
const maxCoins = {
	bitcoin: 2100000000000000,
	bitcoinTestnet: 2100000000000000,
	litecoin: 8400000000000000,
	litecoinTestnet: 8400000000000000
};

//Returns an array of all available coins from the networks object.
const availableCoins = Object.keys(networks).map(coin => coin);

const supportsRbf = {
	bitcoin: true,
	bitcoinTestnet: true,
	litecoin: false,
	litecoinTestnet: false,
	pepecoin: false
};

const zeroValueItems = {
	bitcoin: 0,
	bitcoinTestnet: 0,
	litecoin: 0,
	litecoinTestnet: 0,
	pepecoin: 0,
	timestamp: null
};

const arrayTypeItems = {
	bitcoin: [],
	bitcoinTestnet: [],
	litecoin: [],
	litecoinTestnet: [],
	pepecoin: [],
	timestamp: null
};

const objectTypeItems = {
	bitcoin: {},
	bitcoinTestnet: {},
	litecoin: {},
	litecoinTestnet: {},
	pepecoin: {},
	timestamp: null
};

const defaultWalletShape = {
	id: "",
	name: "",
	type: "default",
	addresses: arrayTypeItems,
	addressIndex: zeroValueItems,
	changeAddresses: arrayTypeItems,
	changeAddressIndex: zeroValueItems,
	utxos: arrayTypeItems,
	transactions: arrayTypeItems,
	blacklistedUtxos: arrayTypeItems,
	confirmedBalance: zeroValueItems,
	unconfirmedBalance: zeroValueItems,
	lastUpdated: zeroValueItems,
	hasBackedUpWallet: false,
	walletBackupTimestamp: "",
	keyDerivationPath: {
		bitcoin: "84",
		bitcoinTestnet: "84",
		litecoin: "84",
		litecoinTestnet: "84",
		pepecoin: "84"
	},
	coinTypePath: {
		bitcoin: "0",
		bitcoinTestnet: "1",
		litecoin: "2",
		litecoinTestnet: "1",
		pepecoin: "3",
	},
	addressType: { //Accepts bech32, segwit, legacy
		bitcoin: "bech32",
		bitcoinTestnet: "bech32",
		litecoin: "bech32",
		litecoinTestnet: "bech32",
		pepecoin: "bech32"
	},
	rbfData: objectTypeItems
};

const getCoinImage = (coin = "bitcoin") => {
	try {
		coin = coin.toLowerCase();
		coin = coin.replace("testnet", "");

		switch (coin) {
			case "bitcoin":
				return require(`../assets/bitcoin.png`);
			case "litecoin":
				return require(`../assets/litecoin.png`);
			case "pepecoin":
				return require(`../assets/pepecoin.png`);
			default:
				return require(`../assets/bitcoin.png`);
		}
	} catch (e) {
		return require(`../assets/bitcoin.png`);
	}
};

const getCoinData = ({ selectedCrypto = "bitcoin", cryptoUnit = "satoshi" }) => {
	try {
		let acronym = "BTC";
		let satoshi = "satoshi";
		let oshi = "sats";
		let blockTime = 10; //min
		switch (selectedCrypto) {
			case "bitcoin":
				acronym = cryptoUnit === "satoshi" ? "sats" : "BTC";
				oshi = "sats";
				return { acronym, label: "Bitcoin", crypto: "BTC", satoshi, oshi, blockTime };
			case "bitcoinTestnet":
				acronym = cryptoUnit === "satoshi" ? "sats" : "BTC";
				oshi = "sats";
				return { acronym, label: "Bitcoin Testnet", crypto: "BTC", satoshi, oshi, blockTime };
			case "litecoin":
				satoshi = "litoshi";
				oshi = "lits";
				acronym = cryptoUnit === "satoshi" ? "lits" : "LTC";
				blockTime = 2.5;
				return { acronym, label: "Litecoin", crypto: "LTC", satoshi, oshi, blockTime };
			case "litecoinTestnet":
				satoshi = "litoshi";
				oshi = "lits";
				acronym = cryptoUnit === "satoshi" ? "lits" : "LTC";
				blockTime = 2.5;
				return { acronym, label: "Litecoin Testnet", crypto: "LTC", satoshi, oshi, blockTime };
			case "pepecoin":
				satoshi = "ribbit";
				oshi = "ribbit";
				acronym = cryptoUnit === "ribbit" ? "ribbit" : "PEPE";
				blockTime = 1;
				return { acronym, label: "Pepecoin", crypto: "PEPE", satoshi, oshi, blockTime };
			default:
				acronym = cryptoUnit === "satoshi" ? "sats" : "BTC";
				return { acronym, label: "Bitcoin", crypto: "BTC", satoshi, oshi, blockTime };
		}
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	networks,
	availableCoins,
	defaultWalletShape,
	maxCoins,
	supportsRbf,
	zeroValueItems,
	arrayTypeItems,
	getCoinImage,
	getCoinData
};
