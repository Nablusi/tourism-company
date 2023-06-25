import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./Sass/style.scss";

// #############################################
// navbar active

let navbar = document.querySelector(".navbar-expand-lg");
let navLink = document.querySelector(".nav-link");

window.onscroll = function(){
    if (scrollY > 100){
        navbar.classList.add("active");
        navLink.classList.remove("active");
        
    }else{
        navbar.classList.remove("active");
        navLink.classList.add("active");
    }
};



// ################################################

// let formLogin = document.querySelector(".onsubmit"); 

// formLogin.onclick = (e)=>{
//     e.preventDefault();
// }





// ################################################

// galary 
let buttonGalary = document.querySelectorAll(".btn-galary"); 
let blackLayer = document.querySelector(".black-layer");
let closeButton = document.querySelector(".btn-x");
let blackLayerDiv = document.querySelector(".black-layer-div");
let leftButton = document.querySelector(".btn-galary-left");
let rightButton = document.querySelector(".btn-galary-right");


for (let i = 0; i < buttonGalary.length ; i++){
    buttonGalary[i].onclick = function(){
      i = i+1; 
      blackLayer.style.top= "0px";
      blackLayerDiv.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;

      leftButton.onclick = function(){
        i++;
        if (i <= 0){
          i = 7;
          blackLayerDiv.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`; 
         } else if( i >= 7){
          i = 1;
          blackLayerDiv.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
         } else{
          blackLayerDiv.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
         }
      }
      rightButton.onclick = function(){
        i--;
        if (i <= 0){
          i = 7;
          blackLayerDiv.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`; 
         } else if( i >= 7){
          i = 0;
          blackLayerDiv.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
         } else{
          blackLayerDiv.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
         }
      }

      return i;
    }
    
    closeButton.onclick = function(){
      blackLayer.style.top = "-200vh";
    }
}

// ##################################################
// galary turkey 

let closeTurkey = document.querySelector(".btn-x-turkey"); 
console.log(closeTurkey)
let blackLayerTurkey = document.querySelector(".black-layer-turkey");
console.log(blackLayerTurkey)
let devBlackLayer = document.querySelector(".black-layer-div-turkey");
console.log(devBlackLayer)
let rigthTurkey = document.querySelector(".btn-galary-right-turkey");
console.log(rigthTurkey)
let leftTurkey = document.querySelector(".btn-galary-left-turkey");
console.log(leftTurkey)
let btnGalaryTurkey = document.querySelectorAll(".btn-galary-turkey");


for (let i = 0 ; i < btnGalaryTurkey.length ; i++){
  btnGalaryTurkey[i].onclick = function(){
    i = i+10; 
    blackLayerTurkey.style.top= "0px";
    devBlackLayer.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;

    leftTurkey.onclick = function(){
      i++;
      if (i <= 9){
        i = 14;
        devBlackLayer.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`; 
       } else if( i >= 14){
        i = 10;
        devBlackLayer.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
       } else{
        devBlackLayer.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
       }
    }
    rigthTurkey.onclick = function(){
      i--;
      if (i <= 9){
        i = 14;
        devBlackLayer.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`; 
       } else if( i >= 14){
        i = 10;
        devBlackLayer.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
       } else{
        devBlackLayer.innerHTML = `<img src="./images/${i}.jpg" class="img-fluid active-img-black" />`;
       }
    }

    return i;
  }
  
  closeTurkey.onclick = function(){
    blackLayerTurkey.style.top = "-200vh";
  }
}









// ###################################################
// copyRight

let copyRightYear = document.querySelector(".copy-right");


let date = new Date (); 
let year = date.getFullYear(); 

copyRightYear.innerHTML = `${year}`; 


// #################################
// validation

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()





