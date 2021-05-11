// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCAj09ct7azJUf3C4r6LziZF41OHABdA1w",
  authDomain: "lets-chat-app-affa2.firebaseapp.com",
  databaseURL: "https://lets-chat-app-affa2-default-rtdb.firebaseio.com",
  projectId: "lets-chat-app-affa2",
  storageBucket: "lets-chat-app-affa2.appspot.com",
  messagingSenderId: "570441961164",
  appId: "1:570441961164:web:4cf443fa3cc65c9c587c69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+username+"!";
function Add_room(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("roomname",room_name);
  window.location="chat_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Roomname-"+Room_names);
row = "<div class='roomname' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chat_page.html";
}

function Add_room(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chat_page.html";
}