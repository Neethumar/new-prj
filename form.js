let email=document.getElementById('email');
let pwd=document.getElementById('password');
// let error=document.getElementById('error');
let span=document.getElementsByTagName('span');


function validate(){
    const regx =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
        if (regx.test(email.value)){
            span[0].innerText = "Your email is valid";
            span[0].style.color = "lime";
            return true;
           
        }

        else{
            span[0].innerText = "Your email is invalid";
            span[0].style.color = "red";
            return false;
        }

}

function passit(){
    const pwdpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(pwdpattern.test(pwd.value)){
        span[1].innerText = "Your password is valid";
        span[1].style.color = "lime"; 
        return true;
    }
    else{
        span[1].innerText = "Your password is invalid";
        span[1].style.color = "red";
        return false;

    }
}