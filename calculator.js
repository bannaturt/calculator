// JavaScript Document

//Change Display
function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

// Evaluate the equation
 function e() {
	 try {
		 d(eval(document.getElementById("d").value));
	 }
	 catch(err) {
		 d("Error");
	 }
 }
 
 //save to memory and get the memory
 function mp(d) {
	 var m = Number(d);
 }
 
 function mm() {
	 v(m);
 }