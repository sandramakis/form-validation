function submit() {
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;

  if (password === confirmPassword) {
    alert("Password confirmed!");
  } else {
    alert("Both password doesn't match");
  }
  if ((password = " ")) {
    alert("Input a password!");
  }
}
