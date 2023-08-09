const form = document.getElementById("form");
const textContainer = document.getElementById("personal-info");
const emailInput = document.getElementById("email");
const errorContainer = document.getElementById("error");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity() && isValidEmail(emailInput.value)) {
      textContainer.classList.remove('hide');
      errorContainer.classList.add('hide');
    } else {
      textContainer.classList.add('hide');
      errorContainer.classList.remove('hide');
    }
});
  
function isValidEmail(email) {
    // Regular expression for email validation
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}