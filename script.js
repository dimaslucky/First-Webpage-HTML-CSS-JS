function showBio(){
    if (document.getElementById("biodata").style.display === "none")
        document.getElementById("biodata").style.display = "";
    else document.getElementById("biodata").style.display = "none";
}

var myopacity = 0;

function opacityUp() {
    if (myopacity<1) {
      myopacity = 1;
   }
   document.getElementById('dropDown').style.opacity = myopacity;
}

function opacityDown() {
   document.getElementById('dropDown').style.opacity = 0.25;
}
