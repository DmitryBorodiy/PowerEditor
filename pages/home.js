//UI elements
var GettingStartedDiv;

window.onload = function(){
    Page_OnLoaded();
};

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