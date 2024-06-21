class Clients {
	constructor() {
		this.coin = "bitcoin";
		this.mainClient = {
			pepecoin: false
		};
		this.peer = {
			pepecoin: { port: 0, host: "", protocol: "" }
		};
		this.peers = {
			pepecoin: []
		};
		this.subscribedAddresses = {
			pepecoin: []
		};
		this.subscribedHeaders = {
			pepecoin: false
		};
	}
	
	updateCoin(coin) {
		this.coin = coin;
	}
	
	updateMainClient(mainClient) {
		this.mainClient = mainClient;
	}
	
	updatePeer(peer) {
		this.peer = peer;
	}
	
}

module.exports = new Clients();
