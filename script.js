let submitBtn = document.getElementById("email-submit");
submitBtn.addEventListener("click", () => {
  let inputEmail = document.getElementById("email");

  if (inputEmail.value !== "") {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value)) {
      console.log("email");
      inputEmail.value = "";
      if (!document.getElementById("error").classList.contains("hidden")) {
        document.getElementById("error").classList.add("hidden");
      }
    } else {
      document.getElementById("error").classList.remove("hidden");
      inputEmail.value = "";
      console.log("not email");
    }
  }
});

function myError() {
  let signError = document.getElementById("error");
  if (!signError.classList.contains("hidden")) {
    signError.classList.add("hidden");
  }
}
