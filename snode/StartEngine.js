    // do app specific cleaning before exiting
    process.on('exit', function () {
        //process.emit('ondestroy');
    });
    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }   
    process.on('ondestroy',async function(){
        consoleLog("\n closing.... \n");
        setTimeout(function(){
            process.exit(2); 
        },2000);
    });

    // catch ctrl+c event and exit normally
    process.on('SIGINT', function () {
        consoleLog('Ctrl-C...');
        process.emit('ondestroy');
    });

    //catch uncaught exceptions, trace, then exit normally
    process.on('uncaughtException', function(e) {
        consoleLog('Uncaught Exception...');
        consoleLog(e.stack);
        process.emit('ondestroy');
        //process.exit(99);
    });
    // set max listener
    //process.setMaxListeners(20);
    // Prevents the program from closing instantly
    //process.stdin.resume();

var sconsole = console;
global.consoleLog = function(msg="",jsonm="",type="l"){
	var str1 = {};
	str1["id"] = 1;
	str1["msg"] = msg;
        str1["type"] = type;
	str1["cpdata"] = jsonm;
        sconsole.log(JSON.stringify(str1));
};
var sconsoleLog = {
    log: function(msg,jsonm="",type="l"){
        consoleLog(msg,jsonm,type);
    },
    info: function(msg,jsonm="",type="i"){
        consoleLog(msg,jsonm,"i");
    },
    warn: function(msg,jsonm="",type="w"){
        consoleLog(msg,jsonm,"w");
    },
    error: function(msg,jsonm="",type="e"){
        consoleLog(msg,jsonm,"e");
    }
    };
console = sconsoleLog;

const debug = require('./Debug');
const sphpComP = require('./SphpCom');

class StartEngine {
		constructor(){
			this.lstappsobj = {};
			this.debug = debug
		}
		registerApp(ctrl,obj){
			this.lstappsobj[ctrl] = obj;
		}
		runSphpCom(){
			this.sphpCom = new sphpComP();
			this.sphpCom.run(this);
		}
		getSphpCom(){
			return this.sphpCom;
		}
		run(){
			this.getAppTrigger("index");
		}
		getEventTrigger(evt,evtp,ctrl){
			let obj2 = this.getApp(ctrl);
			let fcall = 'page_event_' + evt ;
			try{
				//this.debug.println(ctrl + " Application have event handler " + fcall);
			if(obj2 !== null) obj2[fcall](evtp);
			}catch(e){
				this.debug.println(ctrl + " Application doesn't have event handler " + evt);
			}

		}
		getAppTrigger(ctrl){
			let obj2 = this.getApp(ctrl);
			if(obj2 !== null) obj2.page_new();
		}
		getApp(ctrl){
			if(this.lstappsobj[ctrl]){
				return this.lstappsobj[ctrl];
			}else{
				this.debug.println(ctrl + " Application not exist");
				return null;
			}
		}
}
const st1a = new StartEngine();

module.exports = {StartEngine: st1a};
