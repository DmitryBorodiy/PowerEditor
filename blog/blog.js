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

provideFluentDesignSystem().register(allComponents);

window.onload = function(){
    Page_OnLoaded();
};

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
        ThemeInitialize();
    }
    catch(e){
        console.log(e.toString());
    }
}

function SetStyle(style){
    try {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";

        switch(style){
            case "light":
                link.href = "../css/style-light.css";
            break;
            case "dark":
                link.href = "../css/style-dark.css";
            break;
            default:
                link.href = "../css/style-light.css";
            break;
        }

        document.getElementsByTagName("head")[0].appendChild(link);
    }
    catch(e) {
        console.log(e.toString());
    }
}

function isChromium() {
    for (brand_version_pair of navigator.userAgentData.brands) {
        if (brand_version_pair.brand == "Chromium"){
            return true;
        }
    }
    return false;
}