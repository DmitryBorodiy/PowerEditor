const KnownDeviceOS = {
  Windows = "Windows",
  Android = "Android",
  IOS = "IOS",
  Linux = "Linux"
};

function GetCurrentDeviceOSInfo(){
   try{
      var currentOS = "Unknown";
      
      if(navigator.appVersion.indexOf("Win") != -1)
        currentOS = KnownDeviceOS.Windows;
      if(navigator.appVersion.indexOf("Mac") != -1) 
        currentOS = KnownDeviceOS.IOS;
      if(navigator.appVersion.indexOf("X11") != -1) 
        currentOS = "UNIX OS";
      if(navigator.appVersion.indexOf("Linux") != -1)
        currentOS = KnownDeviceOS.Linux; 
      
      return currentOS;
    }
    catch(e){
      console.log(e.toString());
    }
}

function InstallOrGetApp(){
  try{
    var currentOS = GetCurrentDeviceOSInfo();
    
    if(currentOS.toString() == KnownDeviceOS.Windows){
      window.open("ms-windows-store://pdp/?productid=9NCXLRSKPL9K");
    }
    else{
      window.open("https://apps.microsoft.com/store/detail/power-editor-powerful-text-editor-for-windows/9NCXLRSKPL9K");
    }
  }
  catch(e){
    console.log(e.toString());
  }
}
