document.getElementById('questionForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting automatically
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const question = document.getElementById('question').value.trim();
  const errorMessage = document.getElementById('error-message');
  errorMessage.innerHTML = '';

  let hasError = false;
  if (name === '') {
      errorMessage.innerHTML += 'Please enter your name.<br>';
      hasError = true;
  }
  if (email === '' || !email.includes('@') || !email.includes('.')) {
      errorMessage.innerHTML += 'Please enter a valid email address.<br>';
      hasError = true;
  }
  if (question === '') {
      errorMessage.innerHTML += 'Please enter your question.<br>';
      hasError = true;
  }
  if (hasError) {
    return true;
      
  }
  else{
    alert('Form submitted successfully!');
      return false; 
  }

});
