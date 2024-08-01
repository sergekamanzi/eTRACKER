document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://e-tracker-backend-mysql-production.up.railway.app/api/register', { // Ensure this is the correct URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'User registered successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirect or perform any additional actions upon successful registration
          window.location.href = 'login.html';
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message || 'Registration failed',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  });
  