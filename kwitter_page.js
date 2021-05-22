//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDNdVhgobYjDsppNgUnn3jMcYwmoPq3flY",
      authDomain: "kwitter-c893d.firebaseapp.com",
      databaseURL: "https://kwitter-c893d-default-rtdb.firebaseio.com",
      projectId: "kwitter-c893d",
      storageBucket: "kwitter-c893d.appspot.com",
      messagingSenderId: "265066622452",
      appId: "1:265066622452:web:905526344c3a732540dda1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("user_name");
    var room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code

      } });  }); }
getData();
      function logout(){
            localStorage.removeItem("room_name");
            localStorage.removeItem("user_name");
            window.location = "index.html";
      }