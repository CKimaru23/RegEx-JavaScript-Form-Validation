function validateForm(){  

    function nameValidation(){
        var fname=document.myForm.fname.value;

        if (fname==null || fname==""){  
            alert("Name can't be blank");  
            return false;  
        }
        else{
            var letters = /^[A-Za-z]+$/;
            if(fname.value.match(letters))
            {
            alert('Your name is in the correct format.');
            return true;
            }
            else
            {
            alert('Please input alphabet characters only.');
            return false;
            }
        }
           

    }
    nameValidation();

    function emailValidation(){

    }
    emailValidation();
    
    function phonevalidation(){

    }
    phonevalidation();

    function urlValidation(){

    }
    urlValidation();

    function dobvalidation(){

    }
    dobvalidation();

    function passwordValidation(){
        var pw = document.getElementById("password").value;  
        //check empty password field  
        if(pw == "") {  
            document.getElementById("password").innerHTML = "**Fill the password please!";  
            return false;  
        }  
        
        //minimum password length validation  
        if(pw.length < 8) {  
            document.getElementById("password").innerHTML = "**Password length must be atleast 8 characters";  
            return false;  
        }  
        
        //maximum length of password validation  
        if(pw.length > 15) {  
            document.getElementById("password").innerHTML = "**Password length must not exceed 15 characters";  
            return false;  
        } else {  
            alert("Password is correct");  
        }  
    }
    passwordValidation();

    }  
  