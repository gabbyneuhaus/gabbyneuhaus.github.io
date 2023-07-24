$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
    },
    function() {

    });
});
function validateForm(event) {
    event.preventDefault(); // Prevent the form from being submitted by default.
  
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessages = document.getElementById('errorMessages');
      // Clear any existing error messages.
  errorMessages.textContent = '';

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    errorMessages.textContent += 'Please enter a valid email address.\n';
    emailInput.focus();
    return false;
  }

  // Validate message
  if (!messageInput.value.trim()) {
    errorMessages.textContent += 'Please enter a message.\n';
    messageInput.focus();
    return false;
  }

  // If both email and message are valid, the form can be submitted.
  alert('Form submitted successfully!');
}

function isValidEmail(email) {
  // A basic email validation using a regular expression.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}