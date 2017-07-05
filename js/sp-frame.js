var ua = navigator.userAgent;
var timer = false;
function postSize(e)
{
    var target = parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined);
    if (typeof target != "undefined" && document.body.scrollHeight)
    {
        var y = document.getElementById("info_box").scrollHeight + 60;
        y = Math.floor(y);
        target.postMessage(y, "*");
    }
}
if ( ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0)
{
    // iphone
}
else if (ua.indexOf('Android') > 0)
{
    if (ua.indexOf('Android 2') == -1)
    {
        // others(android)
        $(window).bind('load', function(e){
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                postSize(e);
                $(window).bind('resize', function(e){
                    if (timer !== false) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout(function() {
                        postSize(e);
                    }, 200);
                });
            }, 200);
        });
    }
}
