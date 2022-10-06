export class FeedbackHelper{
  constructor(isDebug){
    if(isDebug == true){
      console.log("FeedbackHelper was loaded successfully.");
    }
  }
  
  SupportMail = "dima.borodiy@outlook.com";
  
  SendIssue(title, description){
    try{
      var link = "mailto:" + SupportMail.toString() + "$body=" + description.toString() + "?subject=" + title.toString();
      
      window.open(link);
    }
    catch(e){
      console.log(e.toString());
    }
  };
  
  SendReviewClient(){
    try{
      window.open("ms-windows-store://review/?ProductId=9NLHP5KRXZQ7");
    }
    catch(e){
      console.log(e.toString());
    }
  };
  
  SendReviewWeb(){
    try{
      window.open("https://apps.microsoft.com/store/detail/power-editor-powerful-text-editor-for-windows/9NCXLRSKPL9K");
    }
    catch(e){
      console.log(e.toString());
    }
  };
  
  ContactDeveloper(){
    try{
      window.open("mailto:dima.borodiy@outlook.com");
    }
    catch(e){
      console.log(e.toString());
    }
  };
}
