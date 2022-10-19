import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  accentBaseColor,
  provideFluentDesignSystem,
  SwatchRGB
} from "https://unpkg.com/@fluentui/web-components@2.0.0";

import{
  ThemeHelper,
  RequestedTheme
} from "../helpers/ThemeHelper.js";

import{
  DeviceHelper,
  KnownDeviceOS
} from "../helpers/DeviceHelper.js";

provideFluentDesignSystem().register(allComponents);

//UI controls
var GetAppButton = document.getElementById("get-app-button");
var LaptopScreen;
var AppScreen1;

window.onload = function(){
  ThemeInitialize();
  Page_OnLoaded();
}

function InstallOrGetApp(){
  try{
    var deviceHelper = new DeviceHelper(true);
    var currentOS = deviceHelper.GetCurrentDeviceOSInfo();
    
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

function ThemeInitialize(){
  try{
    let themeDetector = new ThemeHelper(true);
    
    if(themeDetector != null){
      var theme = themeDetector.GetCurrentTheme().toString();
      
      if(theme == RequestedTheme.Light){
        var root = document.getElementById("rootLayout");
        baseLayerLuminance.setValueFor(root, StandardLuminance.LightMode);
      }
      else if(theme == RequestedTheme.Dark){
        var root = document.getElementById("rootLayout");
        baseLayerLuminance.setValueFor(root, StandardLuminance.DarkMode);
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function Page_OnLoaded(){
    try{
        LaptopScreen = document.getElementById("screenshot-ui");
        AppScreen1 = document.getElementById("app-screen");

        document.getElementById("rootLayout").onresize = function(){
            Page_OnResize();
        };

        if(GetAppButton != null){
            GetAppButton.addEventListener("click", InstallOrGetApp);
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function Page_OnResize(){
    try {
        var pageWidth = parseInt(document.getElementById("rootLayout").clientWidth);

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
                AppScreen1.style.height = "520px";
            }
        }
    }
    catch(e) {
        console.log(e.toString());
    }
}