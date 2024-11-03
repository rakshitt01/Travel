// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-7Ublg1B_lk7jrl34HNv4X_4xoVt0czA",
    authDomain: "travelpal-a183b.firebaseapp.com",
    projectId: "travelpal-a183b",
    storageBucket: "travelpal-a183b.appspot.com",
    messagingSenderId: "844045139783",
    appId: "1:844045139783:web:a60545e6d492a7f338d662",
    measurementId: "G-6XZ4ZSTCF5"
  };
  
  // Initialise Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Function to handle login
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successfully logged in
        document.getElementById('message').textContent = 'Login successful! Welcome back to TravelPal!';
      })
      .catch((error) => {
        // Handle login errors
        const errorMessage = error.message;
        document.getElementById('message').textContent = 'Error:${errorMessage}';
      });
  });