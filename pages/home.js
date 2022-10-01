//UI elements
var GettingStartedDiv;

window.onload = function(){
    Page_OnLoaded();
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
