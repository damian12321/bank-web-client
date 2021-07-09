window.onload=function(){
    init();
};
function init(){
let submitButton=document.getElementById("submitButton");
submitButton.addEventListener("click",checkInputsIfNotNull)
}
function checkInputsIfNotNull()
{
    let inputs=document.getElementsByTagName("input");
    let inputsOk=true;
    var arr = [].slice.call(inputs);//htmlCollection to arr
    arr.splice(6,1);//splice input button
    arr.forEach(function(val){
        let value=val.value;
        if(value=="")
        {
            inputsOk=false;
        }
    });
    if(inputsOk)
    {
       getValuesFromFormAndCheck();
    }

}
function getValuesFromFormAndCheck()
{
let firstName=document.getElementById("firstName").value;
let lastName=document.getElementById("firstName").value;
let password=document.getElementById("password").value;
let passwordConfirm=document.getElementById("passwordConfirm").value;
let pinNumber=document.getElementById("pinNumber").value;
let pinNumberConfirm=document.getElementById("pinNumberConfirm").value;
if(password!==passwordConfirm)
{
    this.password.value="";
    this.passwordConfirm.value="";
    document.getElementById("passwordError").style.display="block";

}else{
    document.getElementById("passwordError").style.display="none";
}
if(pinNumber!==pinNumberConfirm)
{
    this.pinNumber.value="";
    this.pinNumberConfirm.value="";
    document.getElementById("pinNumberError").style.display="block";

}else{
    document.getElementById("pinNumberError").style.display="none";
}
}
class Account{
constructor(firstName,lastName,password,pinNumber)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.password=password;
    this.pinNumber=pinNumber;
}
}