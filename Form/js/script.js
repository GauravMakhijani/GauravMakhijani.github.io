const checkbox = document.getElementById('terms');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
var input = document.getElementById('name_1');
input.oninvalid = function(event) {
    event.target.setCustomValidity('Name should only contain alphabets. e.g. John');
}
var input_1 = document.getElementById('name_2');
input_1.oninvalid = function(event) {
    event.target.setCustomValidity('Username should only contain alphabets letters. e.g. John');
}
var input_2 = document.getElementById('phone_no');
input_2.oninvalid = function(event) {
    event.target.setCustomValidity('Please enter a valid 10 digits phone no.');
}


var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function checkCheckBoxes(theForm) {
	if (
	theForm.section_1.checked == false &&
	theForm.section_2.checked == false &&
	theForm.section_3.checked == false) 
	{
		alert ('Select atleast 1 checkbox');
		return false;
	} else { 	
		return true;
	}
}
