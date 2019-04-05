var count =0; // counter for the responsive menu

//function for the image image_slider
// inspired from: https://www.w3schools.com/howto/howto_js_slideshow.asp accessed on: 15/10/18
var index1 = 0;

function showSlides1()
{
  var i=0;
  var slides = document.getElementsByClassName("img_slides");

  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";
  }

  if (index1 > slides.length-1)
  {
    index1 = 0;
  }

  slides[index1].style.display = "block";

  index1++;

  setTimeout(showSlides1, 4000);
}

//function for the second image slider on the homepage
// inspired from: https://www.w3schools.com/howto/howto_js_slideshow.asp accessed on: 15/10/18
var index2 = 0;

function showSlides2()
{
  var i=0;
  var slides = document.getElementsByClassName("artist_slides");

  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";
  }

  if (index1 > slides.length-1)
  {
    index2 = 0;
  }

  slides[index2].style.display = "block";

  index2++;

  setTimeout(showSlides2, 4000);
}

//function for the responsive menu
function toggleMenu()
{
  count++;
  if(count%2!=0)
  {
    $("#main_menu").show();
  }
  else{
    $("#main_menu").hide();
  }

}

//function for the form validation
function done()
{

  var nam = document.forms.contact.Name;
  var email = document.forms.contact.Email;
  var ph = document.forms.contact.phone;

  if(nam.checkValidity() == true && email.checkValidity()== true && ph.checkValidity()==true)
  {
    window.alert("Your message has been submitted.");
  }
  else {
    document.forms.contact.reportValidity();
  }
}
