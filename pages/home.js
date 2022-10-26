//UI elements
var GettingStartedDiv;
var LaptopScreen;
var AppScreen1;

window.onload = function(){
  Page_OnLoaded();
};

function Page_OnLoaded(){
    try{
        LaptopScreen = document.getElementById("screenshot-ui");
        AppScreen1 = document.getElementById("app-screen");

        document.getElementById("rootLayout").onresize = function(){
            Page_OnResize();
        };
    }
    catch(e){
        console.log(e.toString);
    }
}

function Page_OnResize(){
  try {
    var pageWidth = parseInt(document.getElementById("rootLayout").clientWidth);
    
    if(pageWidth != null){
      if(pageWidth <= 1050){
        SetMobileView();
      }
      else if(pageWidth >= 1050){
        SetDefaultView();
      }

      if(pageWidth <= 850){
          if(LaptopScreen != null){
              LaptopScreen.style.height = "500px";
          }
      }
      else if(pageWidth >= 850){
          if(LaptopScreen != null){
              LaptopScreen.style.height = "720px";
          }
      }

      if(pageWidth <= 535){
          if(AppScreen1 != null){
              AppScreen1.style.height = "280px";
          }
      }
      else if(pageWidth >= 535){
          if(AppScreen1 != null){
              AppScreen1.style.height = "460px";
          }
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SetMobileView(){
  try{
    document.getElementsByTagName("h1")[0].style.fontFamily = "28px";
  }
  catch(e){
    console.log(e.toString());
  }
}

function SetDefaultView(){
  try{
    document.getElementsByTagName("h1")[0].style.fontFamily = "40px";
  }
  catch(e){
    console.log(e.toString());
  }
}
