function submitForm() {
  if (isInvalidEmailId() || isInvalidInterest()) {
    return;
  }
  simulateLoading();
}
function isInvalidInterest() {
  var interest = document.getElementById("interest").value;
  if (interest != "") {
    hideInvalidInterest();
    return false;
  }
  showInvalidInterest();
  return true;
}
function isInvalidEmailId() {
  var mail = document.getElementById("email").value;
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    hideInvalidEmail();
    return false;
  }
  showInvalidEmail();
  return true;
}
function simulateLoading() {
  document.getElementById("submitButton").innerText = "Submitting...";
  setTimeout(() => {
    showThankYouMessage();
  }, 2000);
}

function showThankYouMessage() {
  document.getElementById("isThankYouCardVisible").style.display = "block";
  document.getElementById("isFormContainerVisible").style.display = "none";
}
function hideThankYouMessage() {
  document.getElementById("isThankYouCardVisible").style.display = "none";
  document.getElementById("isFormContainerVisible").style.display = "block";
}
function showInvalidEmail() {
  document.getElementById("emailErrorText").style.display = "block";
}
function hideInvalidEmail() {
  document.getElementById("emailErrorText").style.display = "none";
}

function showInvalidInterest() {
  document.getElementById("interestErrorText").style.display = "block";
}
function hideInvalidInterest() {
  document.getElementById("interestErrorText").style.display = "none";
}
function resetForm() {
  hideInvalidEmail();
  hideInvalidInterest();
  hideThankYouMessage();
}
