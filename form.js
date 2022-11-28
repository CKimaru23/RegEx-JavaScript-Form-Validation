function validateForm(){  

    function nameValidation(){
        let fname=document.getElementById("fname").value;
        
        if (fname==null || fname==""){  
            alert("Name can't be blank");  
            return false;  
        }
        else{
            let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if(!regName.test(fname)){
                alert('Invalid name given. Please provide two names');
            }
        }
    }
    nameValidation();

    function emailValidation(){
        let email=document.getElementById("email").value;
        if(email==null || email==""){
            alert("Email can't be blank");  
            return false;
        }
        else{
            let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!mailFormat.test(email)){
                alert('Invalid email given. Please provide proper email');
            }
            
        }
    }
    emailValidation();
    
    function phonevalidation(){
        let phone = document.getElementById("phone").value;
        if(phone==null || phone==""){
            alert("Phone Number can't be blank");  
            return false;
        }
        else{
            let phoneNumber = /^\(?(\d{10})$/;
            if(!phoneNumber.test(phone)){
                alert('Invalid phone number given. Please start with 07********');
            }
            
        }
    }
    phonevalidation();

    function urlValidation(){
        let urlPassed = document.getElementById("url").value;
        if(urlPassed==null || urlPassed==""){
            alert("URL field can't be blank");  
            return false;
        }
        else{
            if(!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(urlPassed)) {
                alert('URL Not Valid');
            }
        }
    }
    urlValidation();

    function dobValidation(){
        let date = document.getElementById("bdate").value;
        if(date==null || date==""){
            alert("Date can't be blank");  
            return false;
        }
        
        else{
            if (date < 1942 || date>=2004){
                alert('Invalid Date of Birth. You must be between 18 and 80 years!!!');
                
            }
            // else{
            //     let date = document.getElementById("bdate").value;
            //     let date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
            //     if(!date_regex.test(date)){
            //         alert('Invalid Date format');
            //     }
            // }
            
        }
    }
    dobValidation();

    let pw = document.getElementById("password").value;
    function passwordValidation(){
        //check empty password field  
        if(pw == "" || pw==null) {  
            alert('Password cannot be left blank'); 
            return false;  
        }  
        
        else{
            var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
            if(!password.value.match(passw)) { 
                alert('Try another stronger password. Have a combination of capital letters, small letters and other characters. Password must be more than 8 character.')
                return false;
            }
            
        }
    }
    passwordValidation();  

    var pw2 = document.getElementById("password2").value;  
    function doubleCheckingPassword(){
        if(pw2== "" || pw2==null) {  
            alert("**Re-enter the password please!");  
            return false;  
        }
        else{
            if(pw!=pw2){
                alert("**Passwords do not match!");  
                return false;  
            }
        } 
    }
    doubleCheckingPassword()
    alert("Thank you for filling the form correctly");
}
  