document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Page reload hone se rokta hai

      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("⚠️ Please enter Email and Password!");
      } else {
        alert("✅ Login Successful!\nEmail: " + email);
      }
    });

    // Forgotten password
    document.getElementById("forgot").addEventListener("click", function() {
      alert("🔑 Password reset link has been sent to your email!");
    });

    // Create Account
    document.getElementById("createAccount").addEventListener("click", function() {
      alert("🎉 Redirecting to Create Account page...");
    });