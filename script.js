const inputpassword = document.querySelector("input[type=password]");
const inputs = document.querySelectorAll("input[type=text],input[type=password]");
const password = document.getElementById("password");
const toggle = document.getElementById("toggle");


inputs.addEventListener("focus", ()=>{
  nputs.style.border="2px solid blue"
})
console.log(inputs)
//inputpassword.addEventListener("click",()=>{
 // password.style.border = "1px solid green"
//});

inputpassword.addEventListener("keypress",(e)=>{

     if (!(e.key=="")){
       toggel.classList.add("invisible")
     }
     if(e.target.value === ""){
      toggel.style.backround="red";
     }
})


function toggleClicked() {  
  if (password.type==='password'){
    password.setAttribute('type','text');
    toggel.classList.add("visible")
  }else{
    password.setAttribute('type','password');
    toggle.classList.remove("visible")
  }
  };
  
