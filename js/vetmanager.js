var getIframe = function (url) {
    var elem = document.createElement('iframe');
    elem.src = url;
    elem.style.cssText = "width: 100% !important;height: 100vh !important;max-width: 98vw;max-height: 98vh;padding: 0;margin:0;background:#D7DFE6;border: 0;";
    elem.frameborder = "0";
    elem.referrerpolicy="unsafe-url";
    return elem;
}
    , getMainDiv = function () {
    var elem = document.createElement('div');
    elem.id = "vetmanager__window-modal";
    elem.className = "window-modal";
    elem.style.cssText = "" +
        "display:none !important;" +
        "overflow:auto !important;" +
        "width:100vw !important;" +
        "";
    return elem;
}
    , getSubDiv = function () {
    var elem = document.createElement('div');
    elem.className = "modal-closed";
    elem.style.cssText = "position:absolute;right:4%;top:3%;width:30px;height:30px;cursor:pointer;";
    elem.onclick = function () {
        document.body.classList.remove('vetmanager-popup-window');
        document.getElementById('vetmanager__window-modal' ).style.display = 'none';
    };
    return elem;
}
    , getFirstSpan = function () {
    var elem = document.createElement('span');
    elem.style.cssText = "display:inline-block;position:absolute;transform:rotate(45deg);top:50%;width:25px;height:4px;background-color:#707478;";
    return elem;
}
    , getSecondSpan = function () {
    var elem = document.createElement('span');
    elem.style.cssText = "display: inline-block;position: absolute;top: 50%;transform: rotate(-45deg);width:25px;height:4px;background-color:#707478;";
    return elem;
};

window.onload = function() {
    var elements = document.getElementsByClassName('vetmanager-run-widget'),
        iframeUrl = "";

    for(var i = 0, length = elements.length; i < length; i++) {
        if (iframeUrl == "") {
            iframeUrl = elements[i].dataset.url;
        }

        elements[i].onclick = function () {
            document.body.classList.add('vetmanager-popup-window');
            document.getElementById('vetmanager__window-modal' ).style.display='block';
        };

        elements[i].href = "#";
        elements[i].style.cssText = "text-decoration:none;display:inline-block;color:#fff;padding:5px 25px;border-radius:25px;background:#0a8cbd;";
    }

    var mainDiv = getMainDiv(),
        elemIframe = getIframe(iframeUrl),
        subDiv = getSubDiv(),
        firstSpan = getFirstSpan(),
        secondSpan = getSecondSpan();

    subDiv.appendChild(firstSpan);
    subDiv.appendChild(secondSpan);
    mainDiv.appendChild(elemIframe);
    mainDiv.appendChild(subDiv);

    document.body.appendChild(mainDiv);

    var css = "body.vetmanager-popup-window >*:not(#vetmanager__window-modal){" +
        "    display: none !important;" +
        "}" +
        "body.vetmanager-popup-window{" +
        "    min-height:100vh !important;" +
        "    min-width:100vw !important;" +
        "    width:100vw !important;" +
        "    background-color: #D7DFE6 !important;" +
        "    top: 0px !important;" +
        "    position: absolute !important;" +
        "    overflow: scroll !important;" +
        "}",
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');


    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};