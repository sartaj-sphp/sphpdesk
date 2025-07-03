const SuperClass = require('./SuperClass');
const debug = require('./Debug');

module.exports = class SphpClass extends SuperClass{
	constructor(sphpApi){
		super()
		this.sphp_api = sphpApi;
		this.debug = debug;
		// attach destroy callback to the process event emitter
		this.onstart();
			let myself = this;
			process.on('ondestroy',myself.ondestroy);
		}
	get ServerPath(){
		return this.serverPathi;
	}
	set ServerPath(val){
		this.serverPathi = val;
	}
	
	onstart(){}
	async ondestroy(){}
};
