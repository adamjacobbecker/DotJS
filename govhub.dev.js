// Collapse Symfony 1.4's debug bar by default
(function () {
    var jsScript = document.createElement('script');
    jsScript.setAttribute('type', 'text/javascript');
    jsScript.text = "if(document.getElementById('sfWebDebug')){sfWebDebugToggleMenu()}";
    document.getElementsByTagName('head')[0].appendChild(jsScript);
})();