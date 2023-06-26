
function displayAnAlertIfEmailNotValid() {

    const email = document.getElementById("email")

    let inputValue = email.value;

    console.log(inputValue);

    if (inputValue === "") {
        return alert('Invalid email address')
    }


}
