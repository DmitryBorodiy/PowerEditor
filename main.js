import {
  StandardLuminance,
  baseLayerLuminance,
  fillColor,
  allComponents,
  provideFluentDesignSystem
} from "https://unpkg.com/@fluentui/web-components@2.0.0";

import{
  ThemeHelper,
  RequestedTheme
} from "./helpers/ThemeHelper.js";

import{
  DeviceHelper,
  KnownDeviceOS
} from "./helpers/DeviceHelper.js";

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
var TopMenuUI;
var ProgressUI;

//Mobile UI controls
var MobileMenuButtonUI;

window.onload = function(){
  Page_OnLoaded();
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
    }
    
    //Header component logic
    header = document.getElementsByTagName("header")[0];
    
    //AppNavLogo component logo
    AppNavLogo = document.getElementById("app-nav-logo");
    NavBarTitle = document.getElementById("nav-bar-title");
    GetAppCommandUI = document.getElementById("get-app-command");
    NavBarMenu = document.getElementById("nav-menu");
    SearchBoxInput = document.getElementById("search-box-input");
    TopMenuUI = document.getElementById("top-menu-ui");
    ProgressUI = document.getElementById("progress-ui");
    
    SearchBoxInput.addEventListener("keydown", SearchBox_KeyDown);
    
    GetAppCommandUI.addEventListener("click", InstallOrGetApp);
    
    searcBoxUI = document.getElementById("search-box-ui");
    
    TopMenuUI.children[0].onclick = function(){
      SetFramePage("pages/home.html");
    };
    
    var pageWidth = parseInt(rootLayout.clientWidth);
    
    if (pageWidth != null) {
      if (pageWidth <= 450) {
        SetMobileView();
      }
      else if (pageWidth > 450) {
        SetDefaultView();
      }
    }
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
        if(pageWidth <= 450){
          SetMobileView();
        }
        else if(pageWidth > 450){
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
        ShowProgressUI(true);
        
        console.log(SearchBoxInput.value);
        SearchWeb(SearchBoxInput.value.toString());
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SetFramePage(page){
  try{
    ShowProgressUI(true);
    
    RootFrame.src = page.toString();
  }
  catch(e){
    console.log(e.toString());
  }
}

function ShowProgressUI(isShow){
  try{
    if(isShow == true){
      ProgressUI.style.visibility = "visible";
      
      setTimeout(() => { ProgressUI.style.visibility = "collapse"; }, 2750);
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
