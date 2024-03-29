﻿import {
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
} from "./helpers/ThemeHelper.js";

import{
  DeviceHelper,
  KnownDeviceOS
} from "./helpers/DeviceHelper.js";

import{
  FeedbackHelper
} from "./helpers/FeedbackHelper.js";

import {
  WebAppInstanceHelper
} from "./helpers/WebAppInstanceHelper.js";

provideFluentDesignSystem().register(allComponents);

//UI Controls
var rootLayout;
var header;
var AppNavLogo;
var searcBoxUI;
var NavBarTitle;
var GetAppCommandUI;
var NavBarMenu;
var RootFrame;
var SearchBoxInput;
var SearchBoxIcon;
var TopMenuUI;
var ProgressUI;
var CompactMenuButton;
var MSStoreCompactButton;
var CompactHomeButton;
var CompactReviewButton;

//Mobile UI controls
var MobileMenuButtonUI;
var NavigationViewUI;
var NavigationViewSearchInput;
var NavigationViewSearchAction;
var NavigationViewItems;

window.onload = function(){
  Page_OnLoaded();

  rootLayout = document.getElementById("rootLayout");
  var pageWidth = parseInt(rootLayout.clientWidth);

  if(pageWidth != null) {
    if(pageWidth <= 1050) {
        SetMobileView();
    }
    else if (pageWidth > 1050) {
        SetDefaultView();
    }
  }
};

function ThemeInitialize(){
  try{
    let themeDetector = new ThemeHelper(true);
    
    if(themeDetector != null){
      var theme = themeDetector.GetCurrentTheme().toString();
      
      if(theme == RequestedTheme.Light){
        var root = document.getElementById("fluent-design-provider");
        baseLayerLuminance.setValueFor(root, StandardLuminance.LightMode);
      }
      else if(theme == RequestedTheme.Dark){
        var root = document.getElementById("fluent-design-provider");
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
    console.log("Debug");
    
    //Theme initilize
    ThemeInitialize();
    
    //rootLayout component initialization
    rootLayout = document.getElementById("rootLayout");
    rootLayout.onresize = Page_SizeChanged;
    
    //rootFrame component init
    RootFrame = document.getElementById("rootFrame");
    
    var pageWidth = parseInt(rootLayout.clientWidth);
    var pageHeight = parseInt(rootLayout.clientHeight);
    
    if(RootFrame != null){
      RootFrame.width = pageWidth;
      RootFrame.height = pageHeight;

      //ShowProgressUI(true, 800);
      RootFrame.src = "pages/home.html";
      
      try {
        var instanceHelper = new WebAppInstanceHelper(true);
        var appInstance = instanceHelper.GetEntryPoint();
        
        console.log(appInstance.toString());
        
        if(appInstance != null) {
          SetFramePage(appInstance.toString(), 600);
        }

        instanceHelper.SetInstanceEntryPoint("pages/home.html");
      }
      catch(e) {
        console.log(e.toString());
      }
    }
    
    //Header component logic
    header = document.getElementsByTagName("header")[0];
    
    //AppNavLogo component logo
    AppNavLogo = document.getElementById("app-nav-logo");
    NavBarTitle = document.getElementById("nav-bar-title");
    GetAppCommandUI = document.getElementById("get-app-command");
    NavBarMenu = document.getElementById("nav-menu");
    SearchBoxInput = document.getElementById("search-box-input");
    SearchBoxIcon = document.getElementById("search-icon");
    TopMenuUI = document.getElementById("top-menu-ui");
    ProgressUI = document.getElementById("progress-ui");
    CompactMenuButton = document.getElementById("compact-menu-button");
    MSStoreCompactButton = document.getElementById("ms-store-button");
    CompactHomeButton = document.getElementById("compact-home-button");
    CompactReviewButton = document.getElementById("compact-review-button");
    NavigationViewUI = document.getElementById("navigation-view");
    NavigationViewItems = document.getElementById("navigation-view-items");
    NavigationViewSearchInput = document.getElementById("navigation-view-search-input");
    NavigationViewSearchAction = document.getElementById("navigation-view-search-box-action");
    NavigationViewSearchAction.onclick = function(){
      SearchWeb(NavigationViewSearchInput.value.toString());
    };

    NavigationViewSearchInput.addEventListener("keydown", NavigationViewSearchInput_KeyDown);
    
    SearchBoxInput.addEventListener("keydown", SearchBox_KeyDown);
    SearchBoxIcon.onclick = function(){
        SearchWeb(SearchBoxInput.value.toString());
    };

    MSStoreCompactButton.addEventListener("click", InstallOrGetApp);    
    GetAppCommandUI.addEventListener("click", InstallOrGetApp);
    CompactHomeButton.onclick = function(){
      SetFramePage("pages/home.html");
    };
    CompactReviewButton.onclick = function(){
      SetFramePage("pages/feedback.html");
    };
    CompactMenuButton.onclick = function(){
      CompactMenuButton_OnClick();
    };

    document.getElementById("navigation-view-rect").onclick = function(){
      NavigationViewRect_OnClick();
    };

    document.getElementById("collapse-navigation-view").onclick = function(){
      IsShowNavigationView(false);
    };
    
    searcBoxUI = document.getElementById("search-box-ui");
    
    TopMenuUI.children[0].onclick = function(){
      SetFramePage("pages/home.html", 800);
    };
    TopMenuUI.children[1].onclick = function(){
      SetFramePage("blog/blog.html", 800);
    };
    TopMenuUI.children[2].onclick = function(){
      SetFramePage("docs/docs.html", 800);
    };
    TopMenuUI.children[3].onclick = function(){
      SetFramePage("pages/feedback.html", 800);
    };

    NavigationViewItems.children[0].onclick = function(){
      SetFramePage("pages/home.html", 800);
      IsShowNavigationView(false);
    };
    NavigationViewItems.children[1].onclick = function(){
      SetFramePage("blog/blog.html", 800);
      IsShowNavigationView(false);
    };
    NavigationViewItems.children[2].onclick = function(){
      SetFramePage("pages/feedback.html", 800);
      IsShowNavigationView(false);
    };
    NavigationViewItems.children[3].onclick = function(){
      SetFramePage("https://www.microsoft.com/store/productId/9NLHP5KRXZQ7", 800);
      IsShowNavigationView(false);
    };
    
    var pageWidth = parseInt(rootLayout.clientWidth);
    
    if (pageWidth != null) {
      if (pageWidth <= 1050) {
        SetMobileView();
      }
      else if (pageWidth > 1050) {
        SetDefaultView();
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function NavigationViewRect_OnClick(){
  try{
    IsShowNavigationView(false);
  }
  catch(e){
    console.log(e.toString());
  }
}

var IsNavigationViewOpened = false;
function CompactMenuButton_OnClick(){
  try{
    if(IsNavigationViewOpened == false){
      IsShowNavigationView(true);
      IsNavigationViewOpened = true;
    }
    else{
      IsShowNavigationView(false);
      IsNavigationViewOpened = false;
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function IsShowNavigationView(isShow){
  try{
    if(isShow == true){
      document.getElementById("navigation-view").style.visibility = "visible";
      document.getElementById("navigation-view-box").style.visibility = "visible";
      
      console.log("Navigation opened.");
    }
    else{
      document.getElementById("navigation-view").style.visibility = "collapse";
      document.getElementById("navigation-view-box").style.visibility = "collapse";

      console.log("Navigation closed.");
    }

    IsNavigationViewOpened = isShow;
  }
  catch(e){
    console.log(e.toString());
  }
}

function Page_SizeChanged(){
  try{
    if(rootLayout != null){
      console.log("Resize handled.");
      
      var pageWidth = parseInt(rootLayout.clientWidth);
      var pageHeight = parseInt(rootLayout.clientHeight);
      
      console.log(pageWidth);
      
      if(pageWidth != null){
        if(pageWidth <= 1050){
          SetMobileView();
        }
        else if(pageWidth > 1050){
          SetDefaultView();
        }
      }
      
      if(RootFrame != null){
        RootFrame.width = pageWidth;
        RootFrame.height = pageHeight;
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SetNavigationViewItemsVisible(itemsCount){
    try{
        switch(itemsCount){
            case 0:

            break;
            case 1:
                TopMenuUI.children[0].style.visibility = "visible";
                TopMenuUI.children[1].style.visibility = "collapse";
                TopMenuUI.children[2].style.visibility = "collapse";
                TopMenuUI.children[3].style.visibility = "collapse";

                NavBarMenuContextButton.style.left = "-403px";
            break;
            case 2:
                TopMenuUI.children[0].style.visibility = "visible";
                TopMenuUI.children[1].style.visibility = "visible";
                TopMenuUI.children[2].style.visibility = "collapse";
                TopMenuUI.children[3].style.visibility = "collapse";

                NavBarMenuContextButton.style.left = "-275px";
            break;
            case 3:
                TopMenuUI.children[0].style.visibility = "visible";
                TopMenuUI.children[1].style.visibility = "visible";
                TopMenuUI.children[2].style.visibility = "visible";
                TopMenuUI.children[3].style.visibility = "collapse";

                NavBarMenuContextButton.style.left = "-156px";
            break;
            case 4:
                TopMenuUI.children[0].style.visibility = "visible";
                TopMenuUI.children[1].style.visibility = "visible";
                TopMenuUI.children[2].style.visibility = "visible";
                TopMenuUI.children[3].style.visibility = "visible";

                NavBarMenuContextButton.style.left = "-13px";
            break;
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function SetMobileView(){
  try{
    header.style.height = "70px";
    
    AppNavLogo.style.height = "42px";
    AppNavLogo.style.width = "42px";
    AppNavLogo.style.left = "50%";
    AppNavLogo.style.transform = "translate(-50%, -50%)";
    NavBarTitle.style.visibility = "collapse";
    GetAppCommandUI.style.visibility = "collapse";
    NavBarMenu.style.visibility = "collapse";
    CompactMenuButton.style.visibility = "visible";
    CompactHomeButton.style.visibility = "visible";
    MSStoreCompactButton.style.visibility = "visible";
    CompactReviewButton.style.visibility = "visible";
    
    searcBoxUI.style.visibility = "collapse";

  }
  catch(e){
    console.log(e.toString());
  }
}

function SetDefaultView() {
  try {
    header.style.height = "80px";
    
    AppNavLogo.style.height = "45px";
    AppNavLogo.style.width = "45px";
    AppNavLogo.style.left = "18px";
    AppNavLogo.style.transform = "translate(0, -50%)";
    NavBarTitle.style.visibility = "visible";
    GetAppCommandUI.style.visibility = "visible";
    NavBarMenu.style.visibility = "visible";
    CompactMenuButton.style.visibility = "collapse";
    CompactHomeButton.style.visibility = "collapse";
    MSStoreCompactButton.style.visibility = "collapse";
    CompactReviewButton.style.visibility = "collapse";
    
    searcBoxUI.style.visibility = "visible";
  }
  catch (e) {
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

function SendReview(){
  try{
    var deviceHelper = new DeviceHelper(true);
    var currentOS = deviceHelper.GetCurrentDeviceOSInfo();
    
    if(currentOS.toString() == KnownDeviceOS.Windows) {
      
    }
    else{
      
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function NavigateTo(url){
  try{
    if(RootFrame != null){
      RootFrame.src = url.toString();
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SearchWeb(request){
  try{
    if(request != null){
      ShowProgressUI(true);
      
      RootFrame.src = "https://www.bing.com/search?q=" + request;
      console.log("Search by " + request.toString());
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SearchBox_KeyDown(args){
  try{
    if(args.key == "Enter"){
      if(SearchBoxInput != null){
        ShowProgressUI(true, 2750);
        
        console.log(SearchBoxInput.value);
        SearchWeb(SearchBoxInput.value.toString());
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function NavigationViewSearchInput_KeyDown(args){
  try{
    if(args.key == "Enter"){
      if(NavigationViewSearchInput != null){
        ShowProgressUI(true, 2750);
        
        console.log(NavigationViewSearchInput.value);
        SearchWeb(NavigationViewSearchInput.value.toString());

        IsShowNavigationView(false);
        NavigationViewSearchInput.value = "";
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SetFramePage(page, loadTime){
  try{
    ShowProgressUI(true, loadTime);
    
    RootFrame.src = page.toString();
  }
  catch(e){
    console.log(e.toString());
  }
}

function ShowProgressUI(isShow, time){
  try{
    if(isShow == true){
      ProgressUI.style.visibility = "visible";
      
      setTimeout(() => { ProgressUI.style.visibility = "collapse"; }, parseInt(time));
    }
    else{
      ProgressUI.style.visibility = "collapse";
    }
  }
  catch(e) {
    console.log(e.toString());
  }
}

function RootFrame_OnLoaded(){
  try{
    ShowProgressUI(false);
  }
  catch(e){
    console.log(e.toString());
  }
}
