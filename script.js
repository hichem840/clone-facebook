//const input = document.querySelectorAll("input");
///console.log(input)

//input.addEventListener("click",( ) => {
 //   console.log("hichem")
//}),
const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");


function toggleClicked() {  
    if (togglePassword.checked) {
      password.type = "text";
      
    
    } else {
      password.type = "password";
    }
    password.classList.toggle('visible'); 
  }
  
  togglePassword.addEventListener("click", toggleClicked);