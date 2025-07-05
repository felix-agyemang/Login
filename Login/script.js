document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from refreshing the page

const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const message = document.getElementById('message');

// Dummy credentials
// email: user@example.com
// password: mypassword1234
const validEmail = "user@example.com";
const validPassword = "mypassword1234";

if (email === validEmail && password === validPassword) {
message.style.color = "green";
message.textContent = "✅ Login successful!";
// You could redirect here: window.location.href = "dashboard.html";
} else {
    message.style.color = "red";
    message.textContent = "❌ Invalid email or password.";
}
});
