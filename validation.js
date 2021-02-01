function validacija(form) {
    var email = document.getElementById('email').value;
    if (email == "") {
        alert('Neispravan unos!');
        return false;
    }
    alert('Uspešna prijava!');
}