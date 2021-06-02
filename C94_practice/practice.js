//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyD7hqnzlDK9-yK6lVBTLXRLIuhFt7wAqO4",
    authDomain: "kwitter-cb6a5.firebaseapp.com",
    databaseURL: "https://kwitter-cb6a5-default-rtdb.firebaseio.com",
    projectId: "kwitter-cb6a5",
    storageBucket: "kwitter-cb6a5.appspot.com",
    messagingSenderId: "446063605906",
    appId: "1:446063605906:web:b9a78564f52195ef414e4b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
      input_1=document.getElementById("input_1").value;
      firebase.database().ref("/").child(input_1).update({
          purpose:"adding user"
      });
  }