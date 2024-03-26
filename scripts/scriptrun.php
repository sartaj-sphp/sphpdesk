<?php
//start builder code
define("sphp_mannually_start_engine",true);
require_once(__DIR__ . "/start.php");
//end builder code
$pfie = realpath($argv[1]);
require_once($pfie);
// process builder code, engine start is not used
SphpBase::sphp_api()->runApp($pfie);
