module.exports = class SuperClass{
	constructor(){
	this.self2 = this; 
	}
    get myself(){
        return this.self2;
    }
};

