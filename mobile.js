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
    }
    else if(documentWidthProperty >= 560){
      document.getElementById("logo_img").style.position = "relative";
      document.getElementById("logo_img").style.left = "16px";
      document.getElementsByClassName("navbar")[0].style.textAlign = "left";
    }
  }
  catch(e){
    console.log(e.toString());
  }
}