// SCROLL TO TOP 
var scrollElem = document.getElementById("scrollToTop");
window.onscroll = function() {
        if(this.scrollY>100){
            scrollElem.classList.add("active-elem")
        }
        else{
            scrollElem.classList.remove("active-elem")
        }
    }

scrollElem.onclick=function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}