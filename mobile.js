var header;
var logo_img;

window.onload = function(){
  DetectMobileMode();
  
  //logo_img = document.getElementById("logo_img");
  //header = document.getElementsByClassName("navbar")[0];
};

function DetectMobileMode(){
  try{
    var documentWidthProperty = document.documentElement.clientWidth;
    
    //console.log(documentWidth.toString());
    
    if(documentWidthProperty <= 560){
      document.getElementById("logo_img").style.position = "relative";
      document.getElementById("logo_img").style.left = "0px";
      document.getElementsByClassName("navbar")[0].style.textAlign = "center";

      document.getElementById("desktop_menu").style.visibility = "collapse";
      document.getElementById("navbar_separator").style.visibility = "collapse";
      document.getElementById("SearchBoxControl").style.visibility = "collapse";
      document.getElementById("send_review_button").style.visibility = "collapse";
    }
    else if(documentWidthProperty >= 560){
      document.getElementById("logo_img").style.position = "relative";
      document.getElementById("logo_img").style.left = "16px";
      document.getElementsByClassName("navbar")[0].style.textAlign = "left";

      document.getElementById("desktop_menu").style.visibility = "visible";
      document.getElementById("navbar_separator").style.visibility = "visible";
      document.getElementById("SearchBoxControl").style.visibility = "visible";
      document.getElementById("send_review_button").style.visibility = "visible";
    }
  }
  catch(e){
    console.log(e.toString());
  }
}