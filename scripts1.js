//script for jason extraction and implementation
var tech = JSON.parse(blogDataMultipleAuthors);

var i=0;

//function to display json string in the techniques blog page
function blog1()
{
  var container1 = document.getElementById("blog_content_tech");

  var disp1="";

  for(i=1;i<4;i++)
  {
    disp1 += "<section>";
    disp1 += "<img src=images\\img2.jpg>";
    disp1 += "<h3>" +tech[i].PostTitle +"</h3>";
    disp1 += "<p>" +tech[i].PostAuthor +"    " +tech[i].PostDate +"</p>";
    disp1 += "<p>" +tech[i].PostDetail +"</p>";
    disp1 += "</section>";
  }

  container1.innerHTML = disp1;

}

//function to display the json string in the art blog page
function blog2()
{
  var container2 = document.getElementById("blog_content_art");

  var disp2="";

  for(i=4;i<8;i++)
  {
    disp2 += "<section>";
    disp2 += "<img src=images\\img1.jpg>"
    disp2 += "<h3>" +tech[i].PostTitle +"</h3>";
    disp2 += "<p>" +tech[i].PostAuthor +"    " +tech[i].PostDate +"</p>";
    disp2 += "<p>" +tech[i].PostDetail +"</p>";
    disp2 += "</section>";
  }

  container2.innerHTML = disp2;

}

//function to display the json string in the supplies blog page
function blog3()
{
  var container3 = document.getElementById("blog_content_supplies");

  var disp3="";

  for(i=7;i<tech.length;i++)
  {
    disp3 += "<section>";
    disp3 += "<img src=images\\img3.jpg>"
    disp3 += "<h3>" +tech[i].PostTitle +"</h3>";
    disp3 += "<p>" +tech[i].PostAuthor +"    " +tech[i].PostDate +"</p>";
    disp3 += "<p>" +tech[i].PostDetail +"</p>";
    disp3 += "</section>";
  }

  container3.innerHTML = disp3;
}
