function hoverNews(element) {
    element.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
}

function unhoverNews(element) {
    element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
}
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if (username === "admin@123" && password === "admin123") {
    
        // Successful login
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";
        window.location.href="page1.html";
    } else {
        // Incorrect credentials
        errorMessage.textContent = "Password is incorrect.";
        errorMessage.style.color = "red";
    }
}
