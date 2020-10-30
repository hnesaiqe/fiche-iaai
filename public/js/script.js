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