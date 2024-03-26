<?php
//start builder code
define("sphp_mannually_start_engine",true);
require_once(__DIR__ . "/start.php");
//end builder code
require_once(__DIR__ . "/parentappfile.php");
class createscriptrun extends parentappfile {
	
    public function page_new(){
		global $argv;
		if(isset($argv[1]) && !file_exists($argv[1] . '.php')){
			$str1 = '<?php 
class '. $argv[1] .' extends Sphp\tools\ConsoleApp {
    private $proj = "";
    private $os = "win";
    private $arch = "x86_64";
	
    public function onstart(){
		echo "hello i am started";
		//$this->disableStdout();
		//$this->enableStdout();
    }

    public function page_new(){
		global $argv;
		//php console arguments in $argv
		// read key value pair arguments
		$this->proj = $this->consoleReadArgument("--proj");
		if($this->proj != ""){
			$this->sendMsg("ready to work",\'i\');
		}else{
			$this->sendMsg("--proj argument not exist",\'e\');
		}
	}
}';
			file_put_contents($argv[1].'.php',$str1);
			$this->sendMsg("file created " . $argv[1],'i');
		}else{
			$this->sendMsg("File exists or empty name, Give file name like: createscript test2",'e');
		}
	}
}

// process builder code, engine start is not used
SphpBase::sphp_api()->runApp(__FILE__);
