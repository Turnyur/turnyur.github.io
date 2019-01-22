<?php 

Class Computation{

public $id;
public $reg_1;
public $reg_2;
public $date;


public function __construct($computation_array){

	if (is_array($computation_array)) {
		$this->id=$computation_array['comp_id'];
		$this->reg_1=$computation_array['comp_reg_1'];
		$this->reg_2=$computation_array['comp_reg_2'];
		$this->date=$computation_array['comp_date'];

//echo var_dump($computation_array);
	}else{
		echo 'supplied input is not an array';
	}
}


}













 ?>
