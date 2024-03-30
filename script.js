
// Dynamic text change
document.addEventListener("DOMContentLoaded", function () {
    const placeNames = ["Australia", "India", "Germany", "Italy", "Switzerland"];
    const placeNameElement = document.getElementById("placeName");
    let index = 0;
    function updatePlaceName() {
        placeNameElement.textContent = `Visit ${placeNames[index]}`;
        index = (index + 1) % placeNames.length;
    }
    setInterval(updatePlaceName, 2000);
});


// Booking validation
function bookNow() {
    var whereTo = document.getElementById('whereTo').value;
    var numberOfPersons = document.getElementById('numberOfPersons').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var description = document.getElementById('description').value;
  
    if (whereTo && numberOfPersons && startDate && endDate && description) {
      alert('Booking Successful!');
    } else {
      alert('Please fill in all fields.');
    }
  }
  

 // Activate the carousel
 $(document).ready(function () {
  $('#imageCarousel').carousel();
});


//Register the user
function registerUser() {
  var fullname = document.getElementById('fullname').value;
  var contact = document.getElementById('contact').value;
  var dob = document.getElementById('dob').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var gender = document.querySelector('input[name="gender"]:checked');

  if (contact.length !== 10 || isNaN(contact)) {
    alert('Please enter a valid 10-digit contact number.');
    return false;
  }


  if (fullname && dob && email) {
    alert('Registration Successful');
    return true; 
  } else {
    alert('Please fill in all required fields.');
    return false;
  }
}

//Login user
function loginUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email && password) {
    alert('Login Successful');
    return true; 
  } else {
    alert('Please enter valid credentials.');
    return false; 
  }
}