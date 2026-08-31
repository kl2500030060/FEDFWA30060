document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (username === "" && password === "") {
        message.textContent = "Please enter both username and password.";
        message.style.color = "red";
    } else if (username === "") {
        message.textContent = "Please enter username.";
        message.style.color = "red";
    } else if (password === "") {
        message.textContent = "Please enter password.";
        message.style.color = "red";
    } else if ((username === "2500030060" || username.toLowerCase() === "ravella sai karthik") && password === "12345") {
        message.textContent = "Login Successful! Welcome, Ravella Sai Karthik.";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid username or password. Please try again.";
        message.style.color = "red";
    }
});