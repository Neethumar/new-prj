
// new try

function trigger(){

    let indicator = document.querySelector(".indicator");
let input = document.getElementById("password");
let weak = document.querySelector(".weak");
let medium = document.querySelector(".Medium");
let strong = document.querySelector(".Strong");
let text = document.querySelector(".text");

    let regExpvvweak =/[a-z]/;
let regExpvweak =/[A-Z]/;
let regExpweak =/[a-z][A-Z]+/;
let regExpmed =/\d/;
let regExpstr =/.[!,@,#,$,%,^,&,*,(,)]/;

    if(input.value!=""){
        indicator.style.display="block";
        indicator.style.display="flex";
        text.style.display="flex";
        no=0;
        if(input.value.length<=3 && (input.value.match(regExpvvweak)||input.value.match(regExpvweak)||input.value.match(regExpweak)||input.value.match(regExpmed)||input.value.match(regExpstr)))no=1;
        if(input.value.length>=6 && ((input.value.match(regExpweak)&&input.value.match(regExpmed))||(input.value.match(regExpstr)&&input.value.match(regExpmed))||(input.value.match(regExpstr)&&input.value.length>=6)))no=2;
        if(input.value.length>=6 && input.value.match(regExpweak) && input.value.match(regExpmed) && input.value.match(regExpstr))no=3;
        if(no==1){

           text.innerText="your password is weak";
           text.style.color="red";
        weak.style.background ="red";
        }
        if(no==2){

        text.innerText="your password is medium";
        text.style.color="orange";
        medium.style.background ="orange";
        }
        if(no==3){

        text.innerText="your password is strong";
        text.style.color="green";
        strong.style.background ="green";
        }
        no=0;
    }
    else {
        indicator.style.display="none";
        return false;
    }
}


function validate(){
let usr= document.getElementById('Username').value.trim();
let email= document.getElementById('email').value.trim();
let phn= document.getElementById('phone').value.trim();
let password= document.getElementById('password').value.trim();
let cpassword= document.getElementById('cpassword').value.trim();
let regx =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).\([a-z]{2,8})(.[a-z]{2,3})?$/

if((usr.length < 3)||(usr.length > 20)){
    document.getElementById('user').innerText = "**Username length must be between 3 and 20";
    return false;
}
if(!isNaN(usr)){
    document.getElementById('user').innerText = "**Only characters are allowed";
    return false;
}
if(password!=cpassword){
    document.getElementById('cpass').innerText = "**Passwords do not match";
    return false;
}
if(isNaN(phn)){
    document.getElementById('num').innerText = "**Enter digits only";
    return false;
}
if((phn.length)!= 10){
    document.getElementById('num').innerText = "**Enter 10 digits";
    return false;
}
if (!(regx.test(email.value))){
    document.getElementById('mail').innerText = "**Email id entered is invalid";
    return false;
}

}
