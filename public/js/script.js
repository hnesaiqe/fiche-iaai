// Condition générale d'utilisation
function disable() {
    document.getElementById("contener_form_infoprojet-Id").style.display = "block";    
    document.getElementById("submit").style.display = "block";
}
function undisable() {    
    document.getElementById("contener_form_infoprojet-Id").style.display = "none";    
    document.getElementById("submit").style.display = "none";
    document.getElementById("myForm").reset();

}

// // Case a cocher théme constructeur 

// function disableContructor() {
//     document.getElementsByClassName('desableConstructor').removeAttribute("disabled");
// }
// function undisableConstructor() {      
//     document.getElementsByClassName('desableConstructor').setAttribute("disabled", "disabled");
//     // document.getElementsByClassName("desableConstructor").reset();

// }

// var otherCheckbox = document.querySelector('input[value="constructorTcheck"]');
// var otherText = document.querySelector('input[class="desableConstructor"]');


// otherCheckbox.onchange = function(){
//     if (otherCheckbox.checked) {      
//         otherText.disabled = "true";
//     //     document.getElementsByClassName('desableConstructor').removeAttribute("disabled");        
//     // document.getElementsByClassName("desableConstructor").reset();
//     } else {     
        
//         otherText.disabled = "false";
//     // document.getElementsByClassName('desableConstructor').setAttribute("disabled", "disabled");
//     // document.getElementsByClassName("desableConstructor").reset();
//   }
// };