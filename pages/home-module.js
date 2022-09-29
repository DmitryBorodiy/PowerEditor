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

import Typed from "https://cdn.jsdelivr.net/npm/typed.js@2.0.12";

var options = {
  strings: ['Create(); Edit(); Build(); more faster and comfortable.'],
  typeSpeed: 30
};

var typed = new Typed('.title-text', options);

provideFluentDesignSystem().register(allComponents);

window.onload = function(){
  ThemeInitialize();
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
