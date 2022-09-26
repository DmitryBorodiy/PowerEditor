export class DeviceHelper{
  constructor(debug){
    if(debug == true){
      console.log("Device Helper module was loaded successfully.");
    }
  }
  
  GetCurrentDeviceOSInfo(){
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
}

export class OSProfile{
  constructor(os, version, deviceModel, deviceManufacturer){
    
  }
}

export const KnownDeviceOS = {
  Windows: "Windows",
  Android: "Android",
  IOS: "IOS",
  Linux: "Linux"
};
