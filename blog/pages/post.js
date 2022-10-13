window.onload = function(){
    Page_OnLoaded();
};

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

            debugger;
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