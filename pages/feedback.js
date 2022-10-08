import {
  ThemeHelper,
  RequestedTheme
} from "../helpers/ThemeHelper.js";

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
  
  FooterContactAction.addEventListener("click", ContactDeveloper_UICommand);
  //FeedbackFooterAction.addEventListener("click", SendFeedback_UICommand);
  PrivacyPolicyAction.addEventListener("click", PrivacyPolicyAction_Click);
  SendFeedbackAction.addEventListener("click", SendFeedback_UICommand);
  
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

function SendFeedback_UICommand(args){
  try {
    var subject = FeedbackSubjectBox.value.toString();
    var message = FeedbackContentBox.value.toString();
    
    if(subject != null || message != null){
      var feedback = new FeedbackHelper(true);
      feedback.SendIssue(subject, message);
    }
  }
  catch(e) {
    console.log(e.toString());
  }
}
