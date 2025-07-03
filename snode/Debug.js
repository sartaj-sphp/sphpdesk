const SuperClass = require('./SuperClass');
const funLib = require('./FunLib').FunLib;
let sfunLib = new funLib();

class Debug extends SuperClass{
		constructor(){
			super();
		}
		printerr(msg,strj){
			let str1 = this.filterMsg(msg);
			if(str1.length > 2){
				console.error(str1,strj);
			}
		}
		printwarn(msg,strj){
			let str1 = this.filterMsg(msg);
			if(str1.length > 2){
				console.warn(str1,strj);
			}
		}
		println(msg,strj){
			let str1 = this.filterMsg(msg);
			if(str1.length > 2){
				console.info(str1,strj);
			}
		}
		log(msg,strj){
			let str1 = this.filterMsg(msg);
			if(str1.length > 2){
				console.log(str1,strj);
			}
		}
		sendData(data,err=""){
			let str1 = this.filterMsg(err);
			let strj = "";
			let token = data["response"]["tok"];
			let reply = {};
			reply["token"] = token;
			reply["data"] = sfunLib.bin2hex(JSON.stringify(data) + ",");
			strj["reply"] = JSON.stringify(reply);
			strj["error"] = str1;
			consoleLog("SNode:- RX",strj);
		}
		print_r(msga,strj){
			let myself = this.myself;
			msga.forEach(msg => { 
				consoleLog("SNodeA:- " + myself.filterMsg(msg),strj);
			});
		}
		filterMsg(msg){
			if (msg != undefined) {
				if(typeof msg === 'object'){
					if(typeof msg.toString === 'function'){
						return msg.toString();						
					}else{
						return this.objToString(msg);
					}
				}else{
					return msg;
				}
			}
			return "";
		}
		objToString(obj){
			//console.dir(obj, { depth: null });
			return JSON.stringify(obj);
		}
		objToString2(obj){
			var str = '';
			for (var p in obj) {
				if (obj.hasOwnProperty(p)) {
					str += p + '::' + obj[p] + '\n';
				}
			}
			return str;
		}
}
const debug = new Debug();
module.exports = debug;
