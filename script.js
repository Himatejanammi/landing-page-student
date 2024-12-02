document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Form validation logic (simple for demonstration)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const course = document.getElementById('course').value.trim();
    const dob = document.getElementById('dob').value;
  
    if (name && email && phone && course && dob) {
      // Display success message
      document.getElementById('successMessage').classList.remove('hidden');
    } else {
      alert('Please fill out all fields!');
    }
  });
  



