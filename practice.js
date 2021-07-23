var firebaseConfig = {
    apiKey: "AIzaSyCnef6ih1_Aqz30wBvQbDnHl4zX_h4Nqeo",
    authDomain: "kwitter-8d264.firebaseapp.com",
    databaseURL: "https://kwitter-8d264-default-rtdb.firebaseio.com",
    projectId: "kwitter-8d264",
    storageBucket: "kwitter-8d264.appspot.com",
    messagingSenderId: "61395416669",
    appId: "1:61395416669:web:a6570a180f4dc2ac3a3fb4",
    measurementId: "G-Y3DEXYVN6D"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   function change(){
       x=document.getElementById("user").value;
       firebase.database().ref("/").child(x).set({
           Name: "Ananya",
           Grade: 7
       });
       y=document.getElementById("message").value;
       firebase.database().ref("Ananya").child("a").push({
        pushexample:y
       });
       firebase.database().ref("Ananya").child("a").on("value",function(snapshot){
           console.log(snapshot.val());
       });
   }