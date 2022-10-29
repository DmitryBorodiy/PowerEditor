import {
  ThemeHelper,
  RequestedTheme
} from "../helpers/ThemeHelper.js";

import{
  DeviceHelper,
  KnownDeviceOS
} from "../helpers/DeviceHelper.js";

import {
  FeedbackHelper
} from "../helpers/FeedbackHelper.js";

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

var RootLayout;
var FooterContactAction;
var FeedbackFooterAction;
var PrivacyPolicyAction;
var SendFeedbackAction;
var FeedbackSubjectBox;
var FeedbackContentBox;
var FooterMSStoreButton;
var MSStoreButton;
var TwitterButton;
var StartPane = document.getElementById("start-pane-content");

window.onload = function(){
  Page_OnLoaded();

  RootLayout = document.getElementById("rootLayout");
  FooterContactAction = document.getElementById("footer-contact-action");
  FeedbackSubjectBox = document.getElementById("feedback-subject-box");
  FeedbackContentBox = document.getElementById("description-box");
  FeedbackFooterAction = document.getElementById("feedback-footer-action");
  PrivacyPolicyAction = document.getElementById("privacy-policy-action");
  SendFeedbackAction = document.getElementById("send-feedback-action");
  FooterMSStoreButton = document.getElementById("footer-ms-store-button");
  MSStoreButton = document.getElementById("ms-store-button");
  TwitterButton = document.getElementById("twitter-button");
  
  FooterContactAction.addEventListener("click", ContactDeveloper_UICommand);
  FeedbackFooterAction.addEventListener("click", SendFeedback_UICommand);
  PrivacyPolicyAction.addEventListener("click", PrivacyPolicyAction_Click);
  SendFeedbackAction.addEventListener("click", SendFeedback_UICommand);
  MSStoreButton.addEventListener("click", SendStoreReview);
  FooterMSStoreButton.addEventListener("click", InstallOrGetApp);
  TwitterButton.addEventListener("click", TwitterButton_Click);

  RootLayout.addEventListener("resize", Page_SizeChanged);
};

function Page_OnLoaded(){
  try{
    ThemeInitialize();
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

function ThemeInitialize(){
  try{
    var root = document.getElementById("fluent-design-provider");
    var themeHelper = new ThemeHelper(true);
    var currentTheme = themeHelper.GetCurrentTheme();
    
    if(currentTheme == RequestedTheme.Light){
      baseLayerLuminance.setValueFor(root, StandardLuminance.LightMode);
    }
    else if(currentTheme == RequestedTheme.Dark){
      baseLayerLuminance.setValueFor(root, StandardLuminance.DarkMode);
    }
    else {
      baseLayerLuminance.setValueFor(root, StandardLuminance.LightMode);
    }
  }
  catch(e){
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

function SendStoreReview(){
  try {
    window.open("ms-windows-store://review/?ProductId=9NCXLRSKPL9K");
  }
  catch(e) {
    console.log(e.toString());
  }
}

function Page_SizeChanged(args){
  try {
    var pageWidth = parseInt(rootLayout.clientWidth);
    console.log(pageWidth.toString());
    
    if(pageWidth <= 600){
      StartPane.style.paddingLeft = "0px";
      StartPane.style.textAlign = "center";
    }
    else if(pageWidth >= 600){
      StartPane.style.paddingLeft = "45px";
      StartPane.style.textAlign = "left";
    }
  }
  catch(e){
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

function TwitterButton_Click(){
  try {
    window.open("https://twitter.com/dev_dmitriy");
  }
  catch(e) {
    console.log(e.toString());
  }
}