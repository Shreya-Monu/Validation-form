// --- Element Selection ---

// Password
const passwordInput = document.getElementById('Password');
const passwordError = document.getElementById('Password-error');
const passwordSuccess = document.getElementById('Password-success');

// Password Rules
const lengthReq = document.getElementById('length');
const upperReq = document.getElementById('Uppercase');
const lowerReq = document.getElementById('Lowercase');
const numberReq = document.getElementById('Number');
const charReq = document.getElementById('Character');

// Username
const usernameInput = document.getElementById('Username');
const usernameError = document.getElementById('Username-error');
const usernameSuccess = document.getElementById('Username-success');

// Email
const emailInput = document.getElementById('Email');
const emailError = document.getElementById('Email-error');
const emailSuccess = document.getElementById('Email-success');

// Phone
const phoneInput = document.getElementById('PhoneNumber');
const phoneError = document.getElementById('PhoneNumber-error');
const phoneSuccess = document.getElementById('PhoneNumber-success');


// --- Utility function to add class ---
function setRequirementStatus(element, condition) {
  element.classList.remove('valid', 'invalid');
  element.classList.add(condition ? 'valid' : 'invalid');
}


// --- Password Validation ---
function validatePassword(password) {
  const isLengthValid = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  setRequirementStatus(lengthReq, isLengthValid);
  setRequirementStatus(upperReq, hasUppercase);
  setRequirementStatus(lowerReq, hasLowercase);
  setRequirementStatus(numberReq, hasNumber);
  setRequirementStatus(charReq, hasSpecialChar);

  const allValid = isLengthValid && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;

  if (password === '') {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'none';
  } else if (allValid) {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'block';
  } else {
    passwordError.style.display = 'block';
    passwordSuccess.style.display = 'none';
  }
}


// --- Username Validation ---
function validateUsername(username) {
  const isValid = /^[a-zA-Z0-9_]{10,20}$/.test(username);

  if (username === '') {
    usernameError.style.display = 'none';
    usernameSuccess.style.display = 'none';
  } else if (isValid) {
    usernameError.style.display = 'none';
    usernameSuccess.style.display = 'block';
  } else {
    usernameError.style.display = 'block';
    usernameSuccess.style.display = 'none';
  }
}


// --- Email Validation ---
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const isValid = emailRegex.test(email);

  if (email === '') {
    emailError.style.display = 'none';
    emailSuccess.style.display = 'none';
  } else if (isValid) {
    emailError.style.display = 'none';
    emailSuccess.style.display = 'block';
  } else {
    emailError.style.display = 'block';
    emailSuccess.style.display = 'none';
  }
}


// --- Phone Number Validation ---
function validatePhone(phone) {
  const isValid = /^[6-9][0-9]{9}$/.test(phone); // Starts with 6-9 and is 10 digits

  if (phone === '') {
    phoneError.style.display = 'none';
    phoneSuccess.style.display = 'none';
  } else if (isValid) {
    phoneError.style.display = 'none';
    phoneSuccess.style.display = 'block';
  } else {
    phoneError.style.display = 'block';
    phoneSuccess.style.display = 'none';
  }
}


// --- Show/Hide Password ---
function toggleVisibility(inputId, toggleElement) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    toggleElement.textContent = "hide";
  } else {
    input.type = "password";
    toggleElement.textContent = "show";
  }
}


// --- Event Listeners ---
passwordInput.addEventListener('input', () => {
  validatePassword(passwordInput.value);
});

usernameInput.addEventListener('input', () => {
  validateUsername(usernameInput.value);
});

emailInput.addEventListener('input', () => {
  validateEmail(emailInput.value);
});

phoneInput.addEventListener('input', () => {
  validatePhone(phoneInput.value);
});
