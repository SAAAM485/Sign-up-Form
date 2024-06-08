let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm_password");

function onChange() {
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }