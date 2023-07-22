





jQuery.fn.countMe=function(t,e){
    if(void 0!==t||void 0!==e){
        var n=0,r=this.html();
        return setTimeout(()=>{
            var t=setInterval(()=>{
                n++,this.text(n),n==r&&clearInterval(t)},e)},t),this}
                alert("Worning!\ndelay and speed can't be empty!")};
    window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $("#man").countMe(40,65);
        $("#girl").countMe(30, 30);
        $("#boy").countMe(40, 50);
        $("#num4").countMe(100,200);
     }