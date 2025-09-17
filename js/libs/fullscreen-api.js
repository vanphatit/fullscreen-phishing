var elementPrototype = (window.HTMLElement || window.Element)["prototype"];
var getter;
window.fullscreenSupport = true;

// document.isFullScreen
if(!document.hasOwnProperty("fullscreenEnabled")) {
    getter = (function() {
        // These are the functions that match the spec, and should be preferred
        if("webkitIsFullScreen" in document) {
            return function() { return document.webkitIsFullScreen; };
        }
        if("mozFullScreen" in document) {
            return function() { return document.mozFullScreen; };
        }
        // Try the older Firefox API with capital S
        if("mozFullScreenEnabled" in document) {
            return function() { return document.mozFullScreenEnabled; };
        }

        window.fullscreenSupport = false;
        return function() { return false; }; // not supported, never fullscreen
    })();
    
    Object.defineProperty(document, "fullscreenEnabled", {
        enumerable: true, configurable: false, writeable: false,
        get: getter
    });
}

if(!document.hasOwnProperty("fullscreenElement")) {
    getter = (function() {
        // These are the functions that match the spec, and should be preferred
        if("webkitFullscreenElement" in document) {
            return function() { return document.webkitFullscreenElement; };
        }
        if("mozFullscreenElement" in document) {
            return function() { return document.mozFullscreenElement; };
        }
        // Try the older Firefox API with capital S
        if("mozFullScreenElement" in document) {
            return function() { return document.mozFullScreenElement; };
        }
        return function() { return null; }; // not supported
    })();
    
    Object.defineProperty(document, "fullscreenElement", {
        enumerable: true, configurable: false, writeable: false,
        get: getter
    });
}

// Document event: fullscreenchange
function fullscreenchange(oldEvent) {
    var newEvent = document.createEvent("CustomEvent");
    newEvent.initCustomEvent("fullscreenchange", true, false, null);
    // TODO: Any need for variable copy?
    document.dispatchEvent(newEvent);
}
document.addEventListener("webkitfullscreenchange", fullscreenchange, false);
document.addEventListener("mozfullscreenchange", fullscreenchange, false);

// Document event: fullscreenerror
function fullscreenerror(oldEvent) {
    var newEvent = document.createEvent("CustomEvent");
    newEvent.initCustomEvent("fullscreenerror", true, false, null);
    // TODO: Any need for variable copy?
    document.dispatchEvent(newEvent);
}
document.addEventListener("webkitfullscreenerror", fullscreenerror, false);
document.addEventListener("mozfullscreenerror", fullscreenerror, false);

// Element requestFullscreen methods
if(!elementPrototype.requestFullscreen) {
    if(elementPrototype.webkitRequestFullScreen) {
        elementPrototype.requestFullscreen = elementPrototype.webkitRequestFullScreen;
    } else if(elementPrototype.mozRequestFullScreen) {
        elementPrototype.requestFullscreen = elementPrototype.mozRequestFullScreen;
    } else {
        elementPrototype.requestFullscreen = function() {
            return false;
        };
    }
}
