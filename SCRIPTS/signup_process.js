let selectedAccountType = null; // Variable to store the selected account type (consumer or farmer)
let signUpProcessType = null; // Variable to store the signup process to follow (with phone or email)

function updateRoleSelection() {
  // The first of the registration is to select the type of the account to create
  // The button labelled "Continue" is disabled till a selection is done
  const consumerRadio = document.querySelector('input[name="accountType"][value="consumer"]');
  const farmerRadio = document.querySelector('input[name="accountType"][value="farmer"]');
  const continueButton = document.getElementById("continueButton");

  if (consumerRadio.checked) {
    selectedAccountType = "consumer";
    continueButton.disabled = false;
  } else if (farmerRadio.checked) {
    selectedAccountType = "farmer";
    continueButton.disabled = false;
  } else {
    selectedAccountType = null;
    continueButton.disabled = true;
  }
  // Update the image at the left based on the selected account type
  if (selectedAccountType === "consumer") {
    document.getElementById("signUpImg").setAttribute('src', "/Images/consumer-login.png");
  } else {
    document.getElementById("signUpImg").setAttribute('src', "/Images/Farmer-signup.png");
  }
}

// The "Continue" button is used to go to next step for filling fields"
document.getElementById('continueButton').addEventListener('click', continueToStep2)

function continueToStep2() {
  // Continue to step 2 and display the corresponding form
  document.getElementById('step1').classList.add('d-none')
  document.getElementById('step2').classList.remove('d-none')
}

// Here are the elements that switch the form process (email or phone)
document.getElementById('RegistrationWithEmail').addEventListener('click', updateFormDisplay)
document.getElementById('RegistrationWithPhoneNumber').addEventListener('click', updateFormDisplay)

function updateFormDisplay() {
  const RegistrationWithEmail = document.querySelector('input[name="RegistrationProcess"][value="RegistrationWithEmail"]');
  const RegistrationWithPhoneNumber = document.querySelector('input[name="RegistrationProcess"][value="RegistrationWithPhoneNumber"]');

  if (RegistrationWithPhoneNumber.checked) {
    signUpProcessType = "phone";
  } else if (RegistrationWithEmail.checked) {
    signUpProcessType = "email";
  } else {
    signUpProcessType = "email";
  }

  if (signUpProcessType === 'phone') {
    // When signing up with phone, the phone field is displayed and the email field is hidden
    document.getElementById('emailField').style.display = 'none'
    document.getElementById('phoneField').style.display = 'block'

    // Highlighting the form title selected for signing up
    document.querySelector('label[for="RegistrationWithEmail"]').classList.remove('registrationLabel')
    document.querySelector('label[for="RegistrationWithPhoneNumber"]').classList.add('registrationLabel')
  } else {
    // When signing up with email, the email field is displayed and the phone field is hidden
    document.getElementById('emailField').style.display = 'block'
    document.getElementById('phoneField').style.display = 'none'

    // Highlighting the form title selected for signing up
    document.querySelector('label[for="RegistrationWithPhoneNumber"]').classList.remove('registrationLabel')
    document.querySelector('label[for="RegistrationWithEmail"]').classList.add('registrationLabel')
  }
}

const accountButton = document.getElementById('accountButton');
accountButton.addEventListener('submit', createAccount);

function createAccount() {
  // const fullname = document.getElementById("fullname").value;
  // const email = document.getElementById("email").value;
  // const tel = document.getElementById("tel").value;
  // const password = document.getElementById("password").value;
  // const location = document.getElementById("location").value;
  // const agreePrivacyPolicy = document.getElementById("agreePrivacyPolicy").checked;
  // const accountType = selectedAccountType;

  // const raw = {
  //   fullname, email, tel, password, location, agreePrivacyPolicy, accountType,
  // }

  // Make API call using the provided data
  // Example using fetch:
  // const requestOptions = {
  //   method: 'POST',
  //   body: JSON.stringify(raw),
  //   redirect: 'follow'
  // };

  // fetch("https://greenarv.onrender.com/api/user/register", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  var raw = "{\r\n    \"fullname\": \"mary slessor\",\r\n    \"email\": \"rirzitustu@gufum.com\",\r\n     \"role\": \"farmer\",\r\n    \"password\": \"mary234\",\r\n     \"location\": \"abuja\"\r\n\r\n\r\n}";

  var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  fetch("https://greenarv.onrender.com/api/user/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
