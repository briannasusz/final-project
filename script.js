function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function speech() {
  document.getElementById("mytext").style.display='none';
  document.getElementById("mytext2").style.display='none';
  document.getElementById("mytext3").style.display='none';
  document.getElementById("mytext4").style.display='none';
  document.getElementById("makaela").innerHTML = "Thank you for donating!";
}
function speech1() {
  document.getElementById("mytext5").style.display='none';
  document.getElementById("mytext6").style.display='none';
  document.getElementById("mytext7").style.display='none';
  document.getElementById("mytext8").style.display='none';
  document.getElementById("mytext9").style.display='none';
  document.getElementById("mytext10").style.display='none';
  document.getElementById("mytext11").style.display='none';
  document.getElementById("brianna").innerHTML = "We will contact you about your volunteer work!";
}
function speech2() {
  document.getElementById("mytext12").style.display='none';
  document.getElementById("christa").innerHTML = "Thank you for posting a comment!";
}
function speech3() {
  document.getElementById("mytext13").style.display='none';
  document.getElementById("mytext14").style.display='none';
  var username=document.getElementById("mytext13").value;
  var password=document.getElementById("mytext14").value;
if (username=="puppylover333"&&password=="girlswhocode") {
  document.getElementById("aby").innerHTML = "You are now logged in!";
  document.getElementById("ori").innerHTML = "Welcome puppylover333";
  document.getElementById("ori").block='block';
}
else {
  document.getElementById("aby").innerHTML = "account not found";
}
}
function speech4() {
  document.getElementById("mytext15").style.display='none';
  document.getElementById("mytext16").style.display='none';
  document.getElementById("mytext17").style.display='none';
  document.getElementById("mytext18").style.display='none';
  document.getElementById("mytext19").style.display='none';
  var name=document.getElementById("mytext15").value;
  var age=document.getElementById("mytext16").value;
  var username2=document.getElementById("mytext17").value;
  var password2=document.getElementById("mytext18").value;
  var retype=document.getElementById("mytext19").value;
if (name=="Christa"&&age=="24"&&username2=="puppylover123"&&password2=="girlswhocode"&&retype=="girlswhocode") {
  document.getElementById("annie").innerHTML = "Thank you for signing up!";
  }
}
