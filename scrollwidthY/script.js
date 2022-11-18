document.addEventListener('DOMContentLoaded', function(){
    let body = document.querySelector('body');
    var limit = body.offsetHeight - 939;
    let scroll = document.querySelector('div.scroll');
    var scrollMaxY = document.body.offsetHeight - window.innerHeight;
        window.onscroll = function(){
        var width = (window.scrollY / scrollMaxY) * 100;
        scroll.setAttribute("style",`width:${width}%`);
    }    
});
