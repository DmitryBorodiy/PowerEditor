window.onload = function(){
  App();
  console.log("App loaded.");
};

function App(){
  try{
    setTimeout(App_OnLoaded, 3500);
  }
  catch(e){
    console.log(e.toString());
  }
}

function App_OnLoaded(){
  try{
    document.location.href = "main.html";
  }
  catch(e){
    console.log(e.toString());
  }
}
