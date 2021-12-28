<?php 
define('DB_SERVER','localhost');
define('DB_USERNAME','root');
define('DB_PASSWORD','');
define('DB_NAME','login');

$mysql = new mysqli(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);

if($myqsl===false){
    die("ERROR: Couldn't connect".$mysql->connect_error);
}
?>