import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  provideFluentDesignSystem
} from "https://unpkg.com/@fluentui/web-components@2.0.0";

import {
  FeedbackHelper
} from "/helpers/FeedbackHelper.js";

import {
  WebAppInstanceHelper
} from "/helpers/WebAppInstanceHelper.js";

provideFluentDesignSystem().register(allComponents);

//UI elements
var FooterContactAction;
var FeedbackFooterAction;
var rootLayout = document.getElementById("rootLayout");

window.loaded = function(){
  Page_OnLoaded();
};

function ContactDeveloper_UICommand(args){
  try {
    var feedback = new FeedbackHelper();
    feedback.ContactDeveloper();
  }
  catch(e){
    console.log(e.toString());
  }
}

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
    
    FooterContactAction = document.getElementById("footer-contact-action");
    FeedbackFooterAction = document.getElementById("feedback-footer-action");
    
    FooterContactAction.addEventListener("click", ContactDeveloper_UICommand);
    FeedbackFooterAction.addEventListener("click", SendFeedback_UICommand);
  }
  catch(e){
    console.log(e.toString());
  }
}

function SendFeedback_UICommand(args){
  try {
    window.document.location.href = "/PowerEditor/pages/feedback.html";
  }
  catch(e) {
    console.log(e.toString());
  }
}

Page_OnLoaded();
