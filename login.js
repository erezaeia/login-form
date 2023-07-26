document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make API request to Back4App
    fetch('https://parseapi.back4app.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': '9tj2uLK9UVu25sy9CBD8roZteXWMOZJ0xpS1jdQb',
        'X-Parse-REST-API-Key': 'BLRi3YnyqKiONiKVYGZDGQb8jXB7gQMww5rzi1dw' 
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.sessionToken) {
          console.log('Authentication successful!');
          alert('Authetication Successfull!');
        } else {
          console.log('Authentication failed. Please check your username and password.');
          alert('Authetication Failed! Please check your username and password.');
          // You can display an error message to the user on failed authentication
        }
      })
      .catch(error => {
        // Handle any error that occurred during the request
        console.error('Error:', error);
        alert('error!');
      });
  }
});
