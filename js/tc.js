$(document).ready(function(){
// image cache
$('.ro').each(function(i, val){
        $('<img>').attr("src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_ro$2"));
});
$('.ro').hover(
    function () {
                var s = $(this).attr("src");
            if (!s.match(/_ro/))
            {
                                s = s.replace(/^(.+)(\.[a-z]+)$/, "$1_ro$2")
                                $(this).attr("src", s);
            }
        },function () {
                var s = $(this).attr("src");
            if (s.match(/_ro/))
            {
                                s = s.replace("_ro", "");
                $(this).attr("src", s);
            }
        }
);

$("#mv a").click(function(){
	var result = $(this).attr("href").match(/v=([^&]+)&/);
	var urlstr = "http://www.youtube.com/embed/" + result[1] + "?rel=0&amp;hd=1&amp;vq=hd720&amp;autohide=1&amp;iv_load_policy=3";
	var htmlstr ='<iframe width="640" height="360" src="' + urlstr + '" frameborder="0" allowfullscreen></iframe>'
	$.colorbox({
		html: htmlstr,
		transition: "fade",
		innerWidth: 640,
		innerHeight: 360,
		scrolling: false,
		close: "close"
	});
	return	false;
});

});
