export class WebAppInstanceHelper{
  constructor(debug){
    if(debug == true){
      console.log("WebAppInstasceHelper was loaded successfully.");
    }
  }
  
  InstanceEntryPoint = "main.html";
  
  SetInstanceEntryPoint(entryPoint){
    try{
      if(entryPoint != null){
        window.localStorage.setItem("PowerEditor.Instance", entryPoint.toString());
      }
    }
    catch(e){
      console.log(e.toString());
    }
  };
  
  GetEntryPoint(){
    try {
      return window.localStorage.getItem("PowerEditor.Instance").toString();
    }
    catch(e) {
      console.log(e.toString());
      return null;
    }
  };
}
