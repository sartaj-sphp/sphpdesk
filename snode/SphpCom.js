const SphpClass = require('./SphpClass');
const readline = require('readline');
const funLib = require('./FunLib').FunLib;
let sfunLib = new funLib();


module.exports = class SphpCom extends SphpClass{
    onstart(){
        this.appEngine = null;
    }
    run(obj){
        this.appEngine = obj;
        this.setupIO();
    }
    setupIO(){
        let myself = this;
        this.stdin = process.openStdin();
        this.stdin.setEncoding('utf-8');
        //this.stdout.setEncoding('utf-8');
        this.rl = readline.createInterface({ input: this.stdin });
        this.rl.on('line', function(line){
            myself.onRx(line); 
        });
    }
    onRx(d){
		try{
        let myself = this;
        let postdata = JSON.parse("[" + sfunLib.hex2bin(d.toString().trim()) + "{}]");
        //myself.appEngine.debug.println("you entered: "+ d.toString());
        let ipc = postdata[0]["response"]["ipc"];
        if(ipc.hasOwnProperty("fun")){
            let funm = ipc["fun"];
            for (var p in funm) {
                myself.OnFunCall(funm[p]["aname"],funm[p]["data"]);
                //myself.appEngine.debug.println("you entered2: ",ipc["fun"][p]);
            }

        }else if(ipc.hasOwnProperty("cmd")){
            let funm2 = ipc["cmd"];
            for (var p2 in funm2) {
                myself.OnCmdCall(funm2[p2]);
            }
        }
		}catch(e){
			consoleLog("Rx data format Error: " + d.toString());
			consoleLog("Rx data format Error: " + e.message);
		}
    }
    OnFunCall(fun,data){
       let myself = this;
       let a1 = fun.split('-',3);
       let ctrl = a1[0];
       if(a1.length < 2){
          myself.appEngine.getAppTrigger(ctrl); 
       }else if(a1.length < 3){
          myself.appEngine.getEventTrigger(a1[1],data,ctrl);            
       }else if(a1.length > 2){
          myself.appEngine.getEventTrigger(a1[1],data,ctrl);            
       }
    }
    OnCmdCall(cmd){
       let myself = this;
       let a1 = cmd.split('-',3);
       let ctrl = a1[0];
       if(a1.length < 2){
          myself.appEngine.getAppTrigger(ctrl); 
       }else if(a1.length < 3){
          myself.appEngine.getEventTrigger(a1[1],'',ctrl); 
       }else if(a1.length > 2){
          myself.appEngine.getEventTrigger(a1[1],a1[2],ctrl);            
       }
        
    }
    callSphpEvent(evt, evtp, data={}){
        let d = {};
        d["evt"] = evt;
        d["evtp"] = evtp ;
        d["type"] = "c";
        d["bdata"] = data;
        this.sendData(sfunLib.bin2hex(JSON.stringify(d)));
    }
    sendData(data){
        consoleLog("",data,"c");
    }
};
