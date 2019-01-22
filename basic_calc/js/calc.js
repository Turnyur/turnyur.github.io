var back_sp_key=document.getElementById('watermark');
var lcd=document.querySelector('p.orangeGradient');
lcd.innerText='0.0';
$animateDisp=$('#liquidCristal');
$animateLastInput=$animateDisp.text();
var btn_keys=document.querySelector('div.main_inner');
var target_btn;
var result_1;
var isDone=false;
var isDoneFromEqual=false;
//var animateLastInput;
var operator_flag=false;
var glob_operator;

var mRoot=document.getElementById('btn_root');
var mSqRoot=document.getElementById('btn_sq_root');
var mHex=document.getElementById('btn_hex');
var mBin=document.getElementById('btn_bin');
var mPi=document.getElementById('btn_pi');
var mExp=document.getElementById('btn_expo');

var btn_div, btn_mul,btn_sub,btn_add;

	btn_div=document.getElementById('btn_div');
	btn_mul=document.getElementById('btn_mul');
	btn_sub=document.getElementById('btn_minus');
	btn_add=document.getElementById('btn_add');
	

var temp_results='';
var finalReslt='';

function checkButton(pressed_btn){


}
function mDisplay(e,tempRes){
	//lcd.innerText=tempRes;
	
	result_1=tempRes;
	switch(tempRes){
	case '1':
			handle_btn_one(e)
			break;
	case '2':
			handle_btn_two(e);
			break;
	case '3':
			handle_btn_three(e);
			break;
	case '4':
			handle_btn_four(e);
			break;
	case '5':
			handle_btn_five(e);
			break;
	
	case '6':
			handle_btn_six(e);
			break;
	
	case '7':
			handle_btn_seven(e);
			break;
	
	case '8':
			handle_btn_eight(e);
			break;
	case '9':
			handle_btn_nine(e);
			break;
	case '0':
			handle_btn_zero(e);
			break;
	case '.':
			handle_btn_dot(e);
			break;         
	case '=':
			handle_btn_equal();
			break;
			
	case 'sin':
			handle_btn_sin(e);
			break;
	case 'cos':
			handle_btn_cos(e);
			break;
	case 'tan':
			handle_btn_tan(e);
			break;
	case 'ANS':
			handle_btn_nlog(e);
			break;
	
	case 'asin':
			handle_btn_asin(e);
			break;
	case 'acos':
			handle_btn_acos(e);
			break;
	case 'atan':
			handle_btn_atan(e);
			break;
	case 'bin':
			handle_btn_bin(e);
			break;
	case 'log':
			handle_btn_log(e);
			break;
	case 'hex':
			handle_btn_hex(e);
			break;
	case 'clear':
		handle_btn_clear()
		break;
	
	
	
	
	
	
	
	
	
	}
	$animateLastInput=lcd.innerText;
	$animateLastInput=$animateLastInput.slice($animateLastInput.length-1);
	//alert($animateLastInput);
	//$animateLastInput.;
	
}

function addEffect(){
	$animateDisp.hide();
	$animateDisp.slideDown(500);

}


function handle_btn_clear(){
        lcd.innerText='';

		isDone=false;
		//$('#liquidCristal').hide().fadeOut(1500);
}

function handle_btn_one(e){
		
		if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
		}
		
		$animateDisp.hide().fadeIn(300);
}

function handle_btn_two(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_three(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_four(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
	
        lcd.innerText=showDisplay;
		}	
	$animateDisp.hide().fadeIn(300);
}

function handle_btn_five(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_six(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}

function handle_btn_seven(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_eight(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if( isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_nine(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_zero(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText=e.innerText;
		}else{
		if(isDoneFromEqual==true || isDone==true){
		
		showDisplay=e.innerText ;
		isDone=false;
		isDoneFromEqual=false;	
		}else{
		showDisplay=lcd.innerText+e.innerText
		}
		
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}

function handle_btn_dot(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText='';
		}else{
		
		showDisplay= lcd.innerText+e.innerText;
        lcd.innerText=showDisplay;
	}
	$animateDisp.hide().fadeIn(300);
}

function handle_btn_equal(){
 
		temp_results=lcd.innerText;
		
		if(operator_flag==true){
			firstResultInstance_1=temp_results.substring(0,temp_results.indexOf(glob_operator));
			firstResultInstance_2=temp_results.substring(temp_results.indexOf(glob_operator)+1);
		}
		switch(glob_operator){
			case '÷':
				var finalReslt=new Number(parseFloat(firstResultInstance_1)/parseFloat(firstResultInstance_2));
				finalReslt=finalReslt.toPrecision(9);
				lcd.innerText=finalReslt;
				//jQuery Section
				
				break;
			case 'x':
				var finalReslt=new Number(parseFloat(firstResultInstance_1)*parseFloat(firstResultInstance_2));
				finalReslt=finalReslt/*.toPrecision(9)*/;
				lcd.innerText=finalReslt;
				//alert(firstResultInstance_1);
				//jQuery Section
				
				break;
			case '-':
				var finalReslt=new Number(parseFloat(firstResultInstance_1)-parseFloat(firstResultInstance_2));
				finalReslt=finalReslt/*.toPrecision(9)*/;
				lcd.innerText=finalReslt;
				//jQuery Section

				//alert(firstResultInstance_1);
				break;
			case '+':
				var finalReslt=new Number(parseFloat(firstResultInstance_1)+parseFloat(firstResultInstance_2));
				finalReslt=finalReslt/*.toPrecision(9)*/;
				lcd.innerText=finalReslt;
				//jQuery Section
				
				//alert(firstResultInstance_1);
				break;
			
				
			default:
				lcd.innerText='error';
		
		
		
		}
		
	//Contact remote server processor to insert necessary computed data into the database
		$.ajax({
			url:'./process/calc_mem.php',
			type:'POST',
			data:{"action":"insert_data","reg_1":temp_results,"reg_2":finalReslt},
			success:function(data){
				//alert(data);
				//$('.orangeGradient').html(data);
			},
			error:function(msg){
				$('.orangeGradient').html('Error!');
			}
		});	
		
	isDoneFromEqual=true;
	//isDone=false;
	operator_flag=false;
	addEffect();



	
}
function handle_btn_sin(e){
		showDisplay= lcd.innerText;
		showDisplay_digit=new Number(showDisplay);
        lcd.innerText=Math.sin(showDisplay_digit);
		isDone=true;
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_cos(e){
		showDisplay= lcd.innerText;
		showDisplay_digit=new Number(lcd.innerText);
        lcd.innerText=Math.cos(showDisplay_digit);
		isDone=true;
		$animateDisp.hide().fadeIn(300);
}
function handle_btn_tan(e){
		showDisplay= lcd.innerText;
		showDisplay_digit=new Number(lcd.innerText);
        lcd.innerText=Math.tan(showDisplay_digit);
		isDone=true;
		$animateDisp.hide().fadeIn(300);
}

//This function was previously used calculating the natural log, nlog but was converted to ANS button by Siy
function handle_btn_nlog(e){
		/*showDisplay= lcd.innerText;
		showDisplay_digit=new Number(lcd.innerText);
        lcd.innerText=Math.log(showDisplay_digit);
		isDone=true;
		$animateDisp.hide().fadeIn(300);*/
		
		$.ajax({
			url:'./process/calc_mem.php',
			type:'POST',
			data:{"action":"retrieve_data"},
			success:function(data){
				//alert(data);
				$('.orangeGradient').html(data);
			},
			error:function(msg){
				$('.orangeGradient').html('Error!');
			}
		});
}
function handle_btn_asin(e){
		showDisplay= lcd.innerText;
		showDisplay_digit=new Number(lcd.innerText);
        lcd.innerText=Math.asin(showDisplay_digit);
		isDone=true;
		$animateDisp.hide().fadeIn(300);
}

function handle_btn_acos(e){
		showDisplay= lcd.innerText;
		showDisplay_digit=new Number(lcd.innerText);
        lcd.innerText=Math.acos(showDisplay_digit);
		isDone=true;
		$animateDisp.hide().fadeIn(300);
}
function handle_btn_atan(e){
		showDisplay= lcd.innerText;
		showDisplay_digit=new Number(lcd.innerText);
        lcd.innerText=Math.atan(showDisplay_digit);
		isDone=true;
		$animateDisp.hide().fadeIn(300);
}
function handle_btn_bin(e){
	lcd.innerText=result_1;
	$animateDisp.hide().fadeIn(300);
}
function handle_btn_log(e){
		showDisplay= lcd.innerText;
		showDisplay_digit=new Number(lcd.innerText);
        lcd.innerText=Math.log(showDisplay_digit);
		isDone=true;
		$animateDisp.hide().fadeIn(300);
}
function handle_btn_hex(e){
	lcd.innerText=result_1;
	$animateDisp.hide().fadeIn(300);

}





//Major Button section handler




mRoot.addEventListener('click',function(e){
	lcd.innerText=Math.sqrt(lcd.innerText);
	isDone=true;
	addEffect();
},false);

mSqRoot.addEventListener('click',function(e){
	lcd.innerText=parseInt(lcd.innerText)*parseInt(lcd.innerText);
	isDone=true;
	addEffect();
},false);
mHex.addEventListener('click',function(e){
	lcd.innerText='Not Implemented';
	isDone=true;
	addEffect();
},false);
mPi.addEventListener('click',function(e){
	valPi=Math.PI;
	if(lcd.innerText=='0.0'){
			lcd.innerText=valPi;
		}else{
		if(isDone==true){
			if(isDoneFromEqual==true){
				lcd.innerText=valPi;
				isDone=false;
			}
		
		}else{
		showDisplay=lcd.innerText+valPi.toPrecision(4);
		
		}
		
        lcd.innerText=showDisplay;
	}
	
	
	
	isDone=true;
	$animateDisp.hide().fadeIn(300);
},false);

mExp.addEventListener('click',function(e){
if(lcd.innerText==''){

}else{
	lcd.innerText=Math.exp(lcd.innerText);
	
	isDone=true;
	addEffect();
}	
},false);







//operator handles

function handle_btn_div(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText='';
		}else{
		if(operator_flag==true){
		
		}else{
			showDisplay= e.target.innerText;
			lcd.innerText=lcd.innerText+showDisplay;
			operator_flag=true;
			glob_operator='÷';
			isDoneFromEqual=false;
			}
		}
		$animateDisp.hide().fadeIn(300);

}

function handle_btn_mul(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText='';
		}else{
		if(operator_flag==true){
		
		}else{
			showDisplay= e.target.innerText;
			lcd.innerText=lcd.innerText+showDisplay;
			operator_flag=true;
			glob_operator='x';
			isDoneFromEqual=false;
		}
		}
	$animateDisp.hide().fadeIn(300);

}
function handle_btn_sub(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText='';
		}else{
		if(operator_flag==true){
		
		}else{
			showDisplay= e.target.innerText;
			lcd.innerText=lcd.innerText+showDisplay;
			operator_flag=true;
			glob_operator='-';
			isDoneFromEqual=false;
			}
		}
	$animateDisp.hide().fadeIn(300);
}

function handle_btn_add(e){
	if(lcd.innerText=='0.0'){
			lcd.innerText='';
		}else{
		if(operator_flag==true){
		
		}else{
			showDisplay= e.target.innerText;
			lcd.innerText=lcd.innerText+showDisplay;
			operator_flag=true;
			glob_operator='+';
			isDoneFromEqual=false;
			}
		}
	$animateDisp.hide().fadeIn(300);
}


// primitive Math operators
btn_div.addEventListener('click',function(event){
		handle_btn_div(event);
	
},false);


btn_mul.addEventListener('click',function(e){
	handle_btn_mul(e);
	
	
},false);

btn_sub.addEventListener('click',function(e){
	handle_btn_sub(e);
	
},false);

btn_add.addEventListener('click',function(e){
	handle_btn_add(e);
	
},false);




function getKey(e){
	if(!e){
		e=window.event
	}
	target_btn=e.target||e.srcElement;
	checkButton(target_btn);
	mDisplay(target_btn,target_btn.innerText);
}
function deleteLastKey(e){
	var deleteChar= lcd.innerText.substring(lcd.innerText.length-1)
	lcd.innerText=lcd.innerText.substring(0,lcd.innerText.length-1);
	if((deleteChar=='-') || (deleteChar=='+') || (deleteChar=='x') || (deleteChar=='÷') ){
		
		operator_flag=false;
	
	}
	
}
btn_keys.addEventListener('click',function(e){

getKey(e);

},false);

back_sp_key.addEventListener('click',function(e){
	deleteLastKey(e);

},false);

$(function(){

	$('#header_inner a').on('click', function(e){
		e.preventDefault();
		//This was used in disabling the anchors in the application menu

	});

});