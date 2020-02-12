var nameExpression =/^[A-Za-z]*$/;
var numbers = /^[0-9]+$/;
function firstNameValidation()
	{
		 var firstName = document.getElementById("firstname");
		 var nameLength = firstName.value.length;
		 if(nameExpression.test(firstName.value) == false || nameLength == 0)
		 {
		 	alert("Enter valid name");
		 	firstName.focus();
		 	return false;
		 }
		 return true;
	}

function lastNameValidation()
	{
		 var lastName = document.getElementById("lastname");
		 var nameLength = lastName.value.length;
		 if(nameExpression.test(lastName.value) == false || nameLength == 0)
		 {
		 	alert("Enter valid name");
		 	return false;
		 }
		 return true;
	}
function emailValidate()
  	{
  		var uemail = document.getElementById("email");
  		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  		if(mailformat.test(uemail.value) == false || uemail.value.length == 0)
  		{
  			alert("Enter valid Email");
  			return false;
  		}
		 return true;
 	}
function validateNumber()
	{
		var moblieNumber = documnet.getElementById("Phno");
			if(moblieNumber.value.length < 10 || moblieNumber.value.length > 10 || moblieNumber.value.length == 0)
			{
				alert("Enter valid moblile number");
				return false;
			}
		return true;
	}
function validatePincode()
  	{ 
  		var uPinCode = documnet.getElementById("pincode");
  		if(numbers.test(uPinCode.value) == false || uPinCode.value.length == 0)
  		{
  			alert("enter valid Pincode");
  			return false;
  		}
  		return true;
  	}
