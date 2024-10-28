// script.js

function showLoading(button, loadingSpinner, checkmark, successMessage) {
    // Hide the button and show the loading spinner
     button.style.display = 'none';
    loadingSpinner.parentElement.style.display = 'flex'; // Show the loading container
    
    // Simulate CAPTCHA processing time with a timeout
    setTimeout(() => {
        // Hide the loading spinner and show the checkmark
        loadingSpinner.style.display = 'none';
        checkmark.style.display = 'flex';

        // Show success message
        successMessage.textContent = 'Verification successful!';
        successMessage.style.display = 'block';
    }, 2000); // Simulated processing time (2 seconds)
}

function startCaptcha() {
    const button = document.querySelector('.cta-button');
    const loadingSpinner = document.getElementById('loading-spinner');
    const checkmark = document.getElementById('checkmark');
    const successMessage = document.getElementById('success-message');

    showLoading(button, loadingSpinner, checkmark, successMessage);

    // Redirect to a URL after the verification is complete
    setTimeout(() => {
        window.location.href = "https://www.flipkart.com/"; // Change to desired URL
    }, 4000); // 4 seconds delay before redirect (2 seconds for loading + 1.5 seconds for showing success)
}

function twocapther() {
    const button = document.querySelector('.cta-button-two');
    const loadingSpinner = document.getElementById('loading-spinner-two'); // You might want to give a unique ID here
    const checkmark = document.getElementById('checkmarktwo');
    const successMessage = document.getElementById('success-message-two');

    // If you want to keep two separate spinners, consider changing the ID in the HTML for the second button
    showLoading(button, loadingSpinner, checkmark, successMessage);

    // Redirect to a different URL after the verification is complete
    setTimeout(() => {
        window.location.href = "https://www.amazon.in/"; // Change to desired URL
    }, 4000); // 4 seconds delay before redirect (2 seconds for loading + 1.5 seconds for showing success)
}
