const inputpassword = document.querySelector("input[type=password]");
const inputs = document.querySelectorAll("input[type=text],input[type=password]");
const password = document.getElementById("password");
const toggel = document.getElementById("toggel");
const button =document.querySelector("button")
const form=document.querySelector(".form2")



password.addEventListener("input", (e) =>{ 
     if (e.target.value !=="") {
       toggel.classList.add("invisible")
    }else{
        toggel.classList="";
        }
      })

     // button.addEventListener("click", (e)=>{
      //  e.preventDefault()
     //   document.body.style.opacity = "0.3"
     // document.body.style.background="hsl(240,20%,99%)"
  //    form.style.display= "block"
  //  document.body.innerHTML+=`
    //<div class="form2"> 
   // <h1>S’inscrire</h1>
   // <h4>C’est rapide et facile.</h4>
    //<hr class="lign2">
    //<div class="grid-container">
   // <input type="text" placeholder="prenom" >
   // <input type="text" placeholder="nom de famille" >
   // <input type="text" placeholder="numéro de mobile ou e-mail" >
    //<input type="password" placeholder="nouveau mot de passe" >
    //</div>
    //</div>`   })
   
function toggelClicked() {  
  if (password.type==='password'){
    password.setAttribute('type','text');
    toggel.classList.add("visible")
  }else{
    password.setAttribute('type','password');
    toggel.classList.remove("visible")
  }
  };
  
