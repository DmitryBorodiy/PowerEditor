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

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
