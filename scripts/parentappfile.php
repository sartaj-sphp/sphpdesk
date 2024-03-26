<?php 

class parentappfile extends Sphp\tools\ConsoleApp {
	
    public function onstart(){
		$d = $this->consoleReadArgument("--debug");
		if($d != ""){
			$this->enableStdout();
			$this->sendMsg("Console output start in debug mode",'i');
		}else{
			$this->disableStdout();
			//$this->sendMsg("--proj argument not exist",'e');
		}
	}
}
