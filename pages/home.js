//UI elements
var Body = document.body;
var GettingStartedDiv;

window.onload = function(){
  Page_OnLoaded();
  Body.onresize = function(){
    Page_OnResize();
  };
};

function AnimateTextTyping(text) {
  try {
    var string = text.toString();
    var array = string.split("");
    var timer;

    function frameLooper() {
      if (array.length > 0) {
        document.getElementById("getting-started-title").innerHTML += array.shift();
      } else {
        clearTimeout(timer);
      }

      loopTimer = setTimeout('frameLooper()', 70);
    }

    frameLooper();
  }
  catch (e) {
    console.log(e.toString());
  }
}

function Page_OnLoaded(){
    try{
        GettingStartedDiv = document.getElementById("ui-page-transition");

        //Animation interop
        if(GettingStartedDiv.classList.contains("ui-page-transition")){
           GettingStartedDiv.classList.remove("ui-page-transition");
           GettingStartedDiv.classList.add("ui-page-transition"); 
        }
        else {
            GettingStartedDiv.classList.add("ui-page-transition");
        }
    }
    catch(e){
        console.log(e.toString);
    }
}

function Page_OnResize(){
  try{
    var pageWidth = parseInt(rootLayout.clientWidth);
    
    if(pageWidth != null){
      if(pageWidth <= 1050){
        SetMobileView();
      }
      else if(pageWidth > 1050){
        SetDefaultView();
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
