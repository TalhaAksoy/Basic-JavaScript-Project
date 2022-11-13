document.addEventListener('DOMContentLoaded', function(){
    let body = document.querySelector('body');
    var limit = body.offsetHeight - 939;
    let scroll = document.querySelector('div.scroll');
    var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight -document.documentElement.clientHeight)
        window.onscroll = function(){
        var width = (window.scrollY / scrollMaxY) * 100;
        scroll.setAttribute("style",`width:${width}%`);
    }    
});
