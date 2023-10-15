
const showPopupCard = document.getElementById('accountButton');
const popup = document.querySelector('.popup');


showPopupCard.addEventListener('click', function () {
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("createAccountForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const locationInput = document.getElementById("location");
    const accountButton = document.getElementById("accountButton");

    form.addEventListener("submit", function (event) {
        if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
            event.preventDefault(); // Prevent form submission
            setCustomValidationMessage(usernameInput, "Username is required.");
            setCustomValidationMessage(passwordInput, "Password is required.");
            setCustomValidationMessage(locationInput, "Location is required.");
        } else {
            clearCustomValidationMessage(usernameInput);
            clearCustomValidationMessage(passwordInput);
            clearCustomValidationMessage(locationInput);
        }
    });

    function setCustomValidationMessage(inputField, message) {
        inputField.setCustomValidity(message);
        inputField.reportValidity();
    }

    function clearCustomValidationMessage(inputField) {
        inputField.setCustomValidity("");
        inputField.reportValidity();
    }
});
