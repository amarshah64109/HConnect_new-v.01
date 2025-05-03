const firebaseConfig = {
    apiKey: "AIzaSyCAgdzfUF7cfktDdjf-8T8UgmK5p_4Ol9I",
    authDomain: "hconnect-41c7c.firebaseapp.com",
    projectId: "hconnect-41c7c",
    storageBucket: "hconnect-41c7c.firebasestorage.app",
    messagingSenderId: "927970333668",
    appId: "1:927970333668:web:541f523bea1a7f9549adf1",
    measurementId: "G-1GY23K6506"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      document.getElementById('username').textContent = user.displayName;
      document.getElementById('app').style.display = 'block';
    });
  }
  