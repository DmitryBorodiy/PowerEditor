import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  accentBaseColor,
  provideFluentDesignSystem,
  SwatchRGB
} from "https://unpkg.com/@fluentui/web-components";

import {
  ThemeHelper,
  RequestedTheme
} from "../helpers/ThemeHelper.js";

provideFluentDesignSystem().register(allComponents);

window.onload = function(){
  Page_OnLoaded();
  ThemeInitialize();
};

function ThemeInitialize() {
  try {
    let themeDetector = new ThemeHelper(true);

    if (themeDetector != null) {
      var theme = themeDetector.GetCurrentTheme().toString();

      if (theme == RequestedTheme.Light) {
        console.log("Light mode.");
        
        var root = document.getElementById("fluent-design-provider");
        baseLayerLuminance.setValueFor(root, StandardLuminance.LightMode);
      }
      else if (theme == RequestedTheme.Dark) {
        console.log("Dark mode.");
        
        var root = document.getElementById("fluent-design-provider");
        baseLayerLuminance.setValueFor(root, StandardLuminance.DarkMode);
      }
    }
  }
  catch (e) {
    console.log(e.toString());
  }
}

function Page_OnLoaded(){
    try{
        var browser = (function (agent) {
            switch (true) {
                case agent.indexOf("edge") > -1: return "EdgeHtml";
                case agent.indexOf("edg") > -1: return "Chromium";
                default: return "other";
            }
        })(window.navigator.userAgent.toLowerCase());

        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";

        if(browser == "Chromium"){
            link.href = "../css/style.css";
            document.getElementsByTagName("head")[0].appendChild(link);

            //debugger;
        }
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
        console.log("Works!");
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
