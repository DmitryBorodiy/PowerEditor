﻿import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  accentBaseColor,
  provideFluentDesignSystem,
  SwatchRGB
} from "https://unpkg.com/@fluentui/web-components";

import{
  DeviceHelper,
  KnownDeviceOS
} from "../helpers/DeviceHelper.js";

import {
  FeedbackHelper
} from "../helpers/FeedbackHelper.js";

var FooterContactAction;
var FeedbackFooterAction;
var PrivacyPolicyAction;
var MSStoreButton;
var TwitterButton;

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

    FooterContactAction = document.getElementById("footer-contact-action");
    FeedbackFooterAction = document.getElementById("feedback-footer-action");
    PrivacyPolicyAction = document.getElementById("privacy-policy-action");
    MSStoreButton = document.getElementById("ms-store-button");
    TwitterButton = document.getElementById("twitter-button");

    FooterContactAction.addEventListener("click", ContactDeveloper_UICommand);
    FeedbackFooterAction.addEventListener("click", ContactDeveloper_UICommand);
    PrivacyPolicyAction.addEventListener("click", PrivacyPolicyAction_Click);
    MSStoreButton.addEventListener("click", InstallOrGetApp);
    TwitterButton.addEventListener("click", TwitterButton_Click);
  }
  catch(e){
    console.log(e.toString());
  }
}

function ContactDeveloper_UICommand(){
  try {
    var feedback = new FeedbackHelper();
    feedback.ContactDeveloper();
  }
  catch(e){
    console.log(e.toString());
  }
}

function PrivacyPolicyAction_Click(){
  try {
    window.document.location.href = "../docs/pages/privacy.html";
  }
  catch(e) {
    console.log(e.toString());
  }
}

function SendFeedback_UICommand(){
  try {
    var subject = FeedbackSubjectBox.value.toString();
    var message = FeedbackContentBox.value.toString();
    
    if(subject != null || message != null){
      window.open(
        "mailto:dima.borodiy@outlook.com?body=" 
        + message.toString() 
        + "&subject=" + subject.toString());
    }
  }
  catch(e) {
    console.log(e.toString());
  }
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

function TwitterButton_Click(){
  try {
    window.open("https://twitter.com/dev_dmitriy");
  }
  catch(e) {
    console.log(e.toString());
  }
}