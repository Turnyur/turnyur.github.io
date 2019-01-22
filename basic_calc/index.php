<!DOCTYPE html>
<html>
<head>
<title> Calculator  </title>
<meta name="author" content="CSE323 PRACTICAL">
<meta charset="utf-8">
<link rel="shortcut icon" href="images/ic_blur_linear.png" type="image/x-icon" >
<link rel="stylesheet" href="css/calc.css" type="text/css">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

<div id="container">
 <header><div class="header_inner"><!-- 	<span class='menu'><a href="#">File</a></span> <span class='menu'><a href="#">Edit</a></span> 
 <span class='menu'><a href="#">Help</a></span> --> <a href="#">Advance Calculator With Memory</a></div></header>
	<div id="disp_result">
		<div class="disp_result_inner custorm_display">
			<p id="liquidCristal" class="orangeGradient"></p>
		</div>

	</div>
	<div id="main">
		<div class="main_inner">
			<div><button id="watermark"> <span class="align-left"><img src="images/ic_assignment_return_black_24dp.png">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> </b></span></button> <button id="clear"> clear</button></div>
			<div id='btn_keys'> 
			<div id="row_1"><button id="btn_root" class="normal_btn">√x</button>	<button id="btn_sq_root" class="normal_btn">x²</button>	<button id="btn_seven" class="normal_btn">7</button>	<button id="btn_eight" class="normal_btn">8</button>	<button id="btn_nine" class="normal_btn">9</button>	<button id="btn_div" class="normal_btn">÷</button></div>
			<div id="row_2"><button id="btn_sin" class="normal_btn">sin</button>	<button id="btn_log" class="normal_btn">log</button>	<button id="btn_four" class="normal_btn">4</button>	<button id="btn_five" class="normal_btn">5</button>	<button id="btn_six" class="normal_btn">6</button>	<button id="btn_mul" class="normal_btn">x</button></div>
			<div id="row_3"><button id="btn_cos" class="normal_btn">cos</button>	<button id="btn_hex" class="normal_btn">hex</button>	<button id="btn_one" class="normal_btn">1</button>	<button id="btn_two" class="normal_btn">2</button>	<button id="btn_three" class="normal_btn">3</button>	<button id="btn_minus" class="normal_btn">-</button></div>
			<div id="row_4"><button id="btn_tan" class="normal_btn">tan</button>	<button id="btn_bin" class="normal_btn">bin</button>	<button id="btn_dot" class="normal_btn">.</button>	<button id="btn_zero" class="normal_btn">0</button>	<button id="btn_equal" class="normal_btn">=</button>	<button id="btn_add" class="normal_btn">+</button></div>
			<div id="row_5"><button id="btn_pi" class="normal_btn">π</button>	<button id="btn_asin" class="normal_btn">asin</button>	<button id="btn_acos" class="normal_btn">acos</button>	<button id="btn_atan" class="normal_btn">atan</button>	<button id="btn_nlog" class="normal_btn">ANS</button>	<button id="btn_expo" class="normal_btn">e˟</button></div>
		
			</div>
		</div>
	</div>
</div>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/calc.js"></script>
</body>

</html>