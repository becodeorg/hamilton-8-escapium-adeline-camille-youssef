function displayAnAlertIfEmailNotValid() {

    const email = document.getElementById("email")

    let inputValue = email.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(inputValue);

    if (inputValue === "") {
        return alert('Empty email address')
    } else if (emailRegex.test(inputValue)) {
        return alert("email address is valid")
    }
}
