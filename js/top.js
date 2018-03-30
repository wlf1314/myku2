window.onload = function() {
var top=document.getElementById('top');
var header=document.getElementById('header');
          document.onscroll=function(){
                var btop=document.body.scrollTop || document.documentElement.scrollTop;
                console.log(btop);
                 if(btop>=30){
                      document.getElementById('top').style.display="none";
                      header.style.top="0px";
                }else{
                      document.getElementById('top').style.display="block";
                      header.style.top="30px";
                }
          }
}