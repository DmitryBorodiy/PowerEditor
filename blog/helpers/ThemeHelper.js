export class ThemeHelper{
  constructor(debug){
    if(debug == true){
      console.log("ThemeHelper was loaded successfully.");
    }
  }
  
  GetCurrentTheme(){
    try{
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      
      if (darkThemeMq.matches) {
        return RequestedTheme.Dark;
      } else {
        return RequestedTheme.Light;
      }
    }
    catch(e){
      console.log(e.toString());
      
      return null;
    }
  }
};

export const RequestedTheme = {
  Light: "Light",
  Dark: "Dark"
};
