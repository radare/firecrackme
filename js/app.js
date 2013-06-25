function validate() {
    var pass = document.getElementsByName('password')[0].value;
    if (pass == "so easy")
	document.getElementById("answer").innerHTML += 'Congrats.<br>';
    else 
	document.getElementById("answer").innerHTML += 'Gimme correct pass.<br>';
}

