/*
    Name: patient-form.js file for MIS 3371 assignment 1
    Author: Gregorio Del Angel
    File: patient-form.js
    Date Created: 2/17/2026
    Date Last Modified: 3/27/2026
    Description: This is the JavaScript file for the patient-form A lot was inspired by the work from Prof. Jake's assignment 3 as a baseline,
    but I have included the validation check for the phone, DoB, email, UserIDvsPass, and the UserID, as well as modifying the pre-existing code.
*/

//Global error flag used by all validation functions
var error_flag = 0;

// Set up some starting points
function setup()
  {
    var error_flag = 0;
    console.log(error_flag);
  }
/* 
This subroutine simply retrieves the data names and entered data from the form.
This code doesn't require that you know how many elements are in your form OR the names of the variables. 
*/
function removedata1() {
  var out = document.getElementById("outputformdata");
  out.style.display = "none";
  out.innerHTML = "(Your data has been removed.)";
}
 
function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;

  var userIDlowercase = document.getElementById("userid");
  if (userIDlowercase && userIDlowercase.value) {
    userIDlowercase.value = userIDlowercase.value.toLowerCase();
  }

  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            //if (formcontents.elements[i].value !="") {
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
        

  }

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      var out = document.getElementById("outputformdata");
      out.innerHTML = formoutput;
      out.style.display = "block";
   }
}

/* These are the subroutines to check inidivudial fields  */
function checkfirstname()
    {
        x = document.getElementById("firstname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid name... too short.";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }
function checkmiddle()
    {
        x = document.getElementById("middleinit").value;
        if( x.length>0) { 
              if (x.match(/[a-zA-Z ]/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }
function checklastname()
    {
        x = document.getElementById("lastname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid name... too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
    }
// Deal with UserID
function checkuserid() {
    var IDoutput;
    var IDinput = document.getElementById("userid").value;
    console.log(IDinput);
    //Special Character check
    if(IDinput.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
      document.getElementById("userid_message").innerHTML = "Invalid characters in UserID.";;
      error_flag = 1;
    } else {
      document.getElementById("userid_message").innerHTML = "";
    }
}

function checkUserIDvsPassword() {
  var userID = document.getElementById("userid").value;
  var password = document.getElementById("password1").value;
  
  if (userID && password && userID == password) {
    //show the error message
    document.getElementById("userid_message").innerHTML = "UserID and Password cannot be the same.";
    error_flag = 1;
  } 
    else {
      if (document.getElementById("userid_message").innerHTML == "UserID and Password cannot be the same.") {
        document.getElementById("userid_message").innerHTML = "";

      }
    }
  }


// Deal with password    
function passwordentry() 
    {
    var passwordoutput;
    var passwordinput = document.getElementById("password1").value;
    console.log(passwordinput);
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter at least 1 lower case letter: Missing";
      error_flag = 1;
    } else {
      passwordoutput = "Enter at least 1 lower case letter: Done";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter: Missing";
      error_flag = 1;
    } else {
      passwordoutput = "Enter at least 1 upper case letter: Done";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 number: Missing";
    error_flag = 1;
    } else {
    passwordoutput = "Enter at least 1 number: Done";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    // Validate special chars
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character: Missing";
    error_flag = 1;
    } else {
    passwordoutput = "Enter at least 1 special character: Done";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter at least 8 characters: Missing";
      error_flag = 1;
  } else {
      passwordoutput = "Enter at least 8 characters: Done";
  }
  document.getElementById("password_message5").innerHTML = passwordoutput;
  }

// Check that both passwords match
function checkpassword2() {
    x=document.getElementById("password1").value;
    y=document.getElementById("password2").value;
    if ( x==y ) 
    {
      document.getElementById("password2_text").innerHTML = "Passwords match!";
    } else  
      {
         document.getElementById("password2_text").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
    }
// Check other fields
function checkaddress1() {
    x = document.getElementById("address1").value;
    console.log(x.value);
    console.log(x.length);
    if (x.length < 2 ) {  
      document.getElementById("address1_message").innerHTML = "Enter something on address line";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("address1_message").innerHTML = "";  
      }
      console.log(address1_message);
}
function checkaddr2() {}

function checkcity() {
         if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
              document.getElementById("city_message").innerHTML = "";  
            }
            else  {
              document.getElementById("city_message").innerHTML = "Invalid characters in City name.";
              error_flag = 1;
              }
}
function checkstate() {
        z=document.getElementById("state").value;
        if(z=="") { 
              document.getElementById("state_message").innerHTML = "Please choose a state";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_message").innerHTML = ""; 
        }
}
//    if (document.getElementById("state").length = 0 ) {  error_flag = 1; }

//Email Validation
function checkemail() {
  var email = document.getElementById("email").value;
  var email_message = document.getElementById("email_message");

  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  if (!email) {
    email_message.innerHTML = "Please enter an email address.";
    error_flag = 1;
  } else if (!emailPattern.test(email)) {
    email_message.innerHTML = "Please enter a valid email address.";
    error_flag = 1;
  } else {
    email_message.innerHTML = "";
  }
}
//DoB Validation ensuring it can't be in the future and not older than 120 years from date
function checkDoB() {
  var DoBinput = document.getElementById("birthday").value;
  var DoB_message = document.getElementById("birthday_message");

  var value = DoBinput.value;
  if (!value) {
    DoB_message.innerHTML = "Please enter a date of birth.";
    error_flag = 1;
    return;
  }
  
  var DoB = new Date(value);
  if (isNaN(DoB.getTime())) {
    DoB_message.innerHTML = "Please enter a valid date of birth.";
    error_flag = 1;
    return;
  }
  var today = new Date();
  //normalize time
  today.setHours(0, 0, 0, 0);
  
  var minDoB = new Date();
  minDoB.setFullYear(today.getFullYear() - 120);
  minDoB.setHours(0, 0, 0, 0);

  if (dob < minDob || dob > today) {
    DoB_message.innerHTML = "Date of Birth must be within the last 120 years and not in the future.";
    error_flag = 1;
  }
  else {
    DoB_message.innerHTML = "";
  }
}
//Phone Validation
function checkphone() {
  var phone = document.getElementById("phone").value;
  var phone_message = document.getElementById("phone_message");
  var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  if (!phone) {
    phone_message.innerHTML = "Please enter a phone number.";
    error_flag = 1;
  } else if (!phonePattern.test(phone)) {
    phone_message.innerHTML = "Please enter a valid phone number.";
    error_flag = 1;
  } else {
    phone_message.innerHTML = "";
  }
}

// Check everything
    function checkform() 
      {
        // Reset the error flag
        error_flag = 0;

        checkfirstname();
        checkmiddle();
        checklastname();
        checkaddr1();
        checkaddr2();
        checkemail();
        checkDoB();
        checkphone();
        // etc...
        passwordentry();

        if(typeof checkUserIDvsPassword == "function") {
          checkUserIDvsPassword();          
        }

        console.log("Error flag: "+error_flag);

        if (error_flag == 1)
        {
          alert("Please fix the indicated errors!");
        }
        else {
          document.getElementById("submit").disabled = false;
        }
      }
    /* End of document: patient-form.js */