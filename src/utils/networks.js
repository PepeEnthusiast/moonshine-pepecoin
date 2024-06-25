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
	pepecoin: Infinity
};

//Returns an array of all available coins from the networks object.
const availableCoins = Object.keys(networks).map(coin => coin);

const supportsRbf = {
	pepecoin: false
};

const zeroValueItems = {
	pepecoin: 0,
	timestamp: null
};

const arrayTypeItems = {
	pepecoin: [],
	timestamp: null
};

const objectTypeItems = {
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
		pepecoin: "84"
	},
	coinTypePath: {
		pepecoin: "3",
	},
	addressType: {
		pepecoin: "legacy"
	},
	rbfData: objectTypeItems
};

const getCoinImage = (coin = "pepecoin") => {
	return require(`../assets/pepecoin.png`);
};

const getCoinData = ({ selectedCrypto = "bitcoin", cryptoUnit = "satoshi" }) => {
	try {
		let satoshi = "ribbit";
		let oshi = "sats";
		let blockTime = 1; //min
		let acronym = cryptoUnit === "satoshi" ? "ribbit" : "PEPE";
		return { acronym, label: "Bitcoin", crypto: "PEPE", satoshi, oshi, blockTime };
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
