document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Example validation
    if (username && password) {
      alert(`Welcome, ${username}! Your car is ready to race.`);
      window.location.href = "game.html"; // Redirect to game page
    } else {
      alert("Please enter valid credentials to start racing.");
    }
  });
  