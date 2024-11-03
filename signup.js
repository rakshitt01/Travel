// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-7Ublg1B_lk7jrl34HNv4X_4xoVt0czA",
    authDomain: "travelpal-a183b.firebaseapp.com",
    projectId: "travelpal-a183b",
    storageBucket: "travelpal-a183b.appspot.com",
    messagingSenderId: "844045139783",
    appId: "1:844045139783:web:a60545e6d492a7f338d662",
    measurementId: "G-6XZ4ZSTCF5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Sign Up Function
async function signUp(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    // Clear previous message
    message.innerHTML = '';

    // Check if passwords match
    if (password !== confirmPassword) {
        message.innerHTML = 'Passwords do not match!';
        return;
    }

    try {
        // Sign up the user
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Save user details to Firestore
        await db.collection('users').doc(user.uid).set({
            name: name,
            dob: dob,
            email: email
        });

        alert("User signed up successfully!");
        // Optionally redirect to login or home page
        window.location.href = 'login.html';
    } catch (error) {
        message.innerHTML = error.message;
    }
}