<?php 


//include_once "./computation.php";


$host='localhost';
$db_name='adv_calculator';
$user='Uroot';
$pass='';

$dbo="mysql:host=$host;dbname=$db_name;";



if (isset($_POST['action']) && $_POST['action']=='insert_data') {
	
	$res=insertQuery($_POST['reg_1'],$_POST['reg_2']);
	



}




if (isset($_POST['action']) && $_POST['action']=='retrieve_data') {
	# code...

	$returned_computations=selectQuery($host,$db_name,$user,$pass);
	//echo $returned_computations[0]['comp_date'];
	$computation_array=array();
	foreach ($returned_computations as $key => $value) {
		# code...
		$computation_array[$key]=new Computation($value);
		

	}


	$cal_string='<span>Last 15 Computations</span><ul>';

	foreach ($computation_array as $key => $value) {
		$cal_string.='<li style="font-size:18px;">&nbsp;'.$computation_array[$key]->reg_1.'='.$computation_array[$key]->reg_2.'<span style="font-size:10px;color:rgba(38,198,218,1)">&nbsp;&nbsp;'.
		$computation_array[$key]->date.'</span></li>';


	}
	$cal_string.='</ul>';

	echo($cal_string);
}




//definitions of some the functions used above
function selectQuery(){
	global $host,$db_name,$user,$pass,$dbo;
	try {

		$con=new PDO($dbo,$user,$pass);
		$query="SELECT * FROM `computations` ORDER BY `comp_date` DESC LIMIT 15";

		$stmt=$con->prepare($query);
		$results=$stmt->execute();
		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);  

		return $results;

	} catch (PDOException $e) {
		return 'Connection error: '.$e->getMessage();
	}
	
}


function insertQuery($register_1,$register_2){
	$reg_1=$register_1;
	$reg_2=$register_2;
	$mdate=date('Y-m-d H:s:i');

global $host,$db_name,$user,$pass,$dbo;
	try {

	$con=new PDO($dbo,$user,$pass);
	$query="INSERT INTO `computations` (`comp_reg_1`,`comp_reg_2`,`comp_date`) VALUES (:reg_1,:reg_2,:mdate)";

	$stmt=$con->prepare($query);
	$stmt->bindParam(':reg_1',$reg_1,PDO::PARAM_STR);
	$stmt->bindParam(':reg_2',$reg_2,PDO::PARAM_STR);
	$stmt->bindParam(':mdate',$mdate,PDO::PARAM_STR);
	$result=$stmt->execute();
	
	
	return $result;

} catch (PDOException $e) {
	return 'Connection error: '.$e->getMessage();
}
	
}

function __autoload($classname) {
	$filename = "./". strtolower($classname) .".php";
	include_once($filename);
}




?>
