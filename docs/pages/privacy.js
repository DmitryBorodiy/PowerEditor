import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  provideFluentDesignSystem
} from "https://unpkg.com/@fluentui/web-components@2.0.0";

provideFluentDesignSystem().register(allComponents);

//UI elements
var rootLayout = document.getElementById("rootLayout");

window.loaded = function(){
  Page_OnLoaded();
};

function ThemeInitialize(){
  try{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if(darkThemeMq.matches) {
      baseLayerLuminance.setValueFor(rootLayout, StandardLuminance.DarkMode);
      return "dark";
    } else {
      baseLayerLuminance.setValueFor(rootLayout, StandardLuminance.LightMode);
      return "light";
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

Page_OnLoaded();