import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  accentBaseColor,
  provideFluentDesignSystem,
  SwatchRGB
} from "https://unpkg.com/@fluentui/web-components";

provideFluentDesignSystem().register(allComponents);

import{
  ThemeHelper,
  RequestedTheme
} from "./helpers/ThemeHelper.js";

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

        console.log("Light mode.");
      }
      else if(theme == RequestedTheme.Dark){
        var root = document.getElementById("rootLayout");
        baseLayerLuminance.setValueFor(root, StandardLuminance.DarkMode);

        console.log("Dark mode.");
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