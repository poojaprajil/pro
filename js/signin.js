let email = document.getElementById("email");
let error = document.getElementById("error");
console.log(email, error);
function validate() {
  let regexp =
    /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  if (regexp.test(email.value)) {
    error.innerHTML = "valid";
    error.style.color = "greem";
    return true;
  } else {
    error.innerHTML = "invalid email";
    error.style.color = "red";
    return false;
  }
}
// phone
function val() {
  var mobile = document.getElementById("mobile").value;
  var number = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;

  if (number.test(mobile)) {
    //   alert(" correct mobile number");
    return true;
  } else {
    alert("wrong mobile number");
    return false;
  }
}
// password strength
let parameters = {
  count: false,
  letters: false,
  numbers: false,
  special: false,
};
let strengthBar = document.getElementById("strength-bar");

function strengthChecker() {
  let password = document.getElementById("password").value;
  parameters.letters = /[A-Z]+/.test(password) ? true : false;
  parameters.numbers = /[0-9]+/.test(password) ? true : false;
  parameters.special = /[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password)
    ? true
    : false;
  parameters.count = password.length > 7 ? true : false;

  let barlength = Object.values(parameters).filter((value) => value);
  console.log(Object.values(parameters), barlength);

  strengthBar.innerHTML = "";
  for (let i in barlength) {
    let span = document.createElement("span");
    span.classList.add("strength");
    strengthBar.appendChild(span);
  }
}
// checkpassword
function checkPassword() {
  let password = document.getElementById("password").value;
  let confrmpassword = document.getElementById("confrmpassword").value;
  console.log(password, confrmpassword);
  let message = document.getElementById("message");

  if (password.length != 0) {
    if (password == confrmpassword) {
      message.textContent = "Password match";
      message.style.backgroundColor = "#3ae374";
      return true;
    } else {
      message.textContent = "Password don't match";
      message.style.backgroundColor = "#ff4d4d";
      return false;
    }
  }
}

// const checkUserPass = (e) => {
//   e.preventDefault();
//   val();
//   checkPassword();
//   validate();
// };

// document.querySelector(".sub").addEventListener("click", checkUserPass);

// let pwd = document.getElementById("pwd");

// function validate(){
// if(email.value ==""||pwd.value ==""){
//     alert("field cannot be empty");
//     return false;
// }
// else{
//     alert("validation is proper");
//     return true;
// }
// if(email.value =="")
// {
//     alert("email cannot empty");
//     return false;
// }
// else if(pwd.value ==""){
//     alert("password cannot be blank");
//     return false;
// }
// else if(pwd.value.length<=5){
//   alert("password is too short");
//   pwd.style.border="2px bold red";
//   return false;
// }
// else{
//     return true;
// }
// }
