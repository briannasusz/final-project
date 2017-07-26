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
  document.getElementById("brianna").innerHTML ='We will contact you about your volunteer work!';

}
