

         window.onload = function() {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
             var buttons = document.getElementById('buttons').getElementsByTagName('span');
             var prev = document.getElementById('prev');
            var next = document.getElementById('next');
             var index = 1;
            var timer;
 
            function animate(offset) {
                 var newLeft = parseInt(list.style.left) + offset;
               list.style.left = newLeft + 'px';
                 //无限滚动判断
                 if (newLeft > -1920) {
                    list.style.left = -5760 + 'px';
               }
                 if (newLeft < -5760) {
                    list.style.left = -1920 + 'px';
                 }
             }
 
             function play() {
                 timer = setInterval(function() {
                     next.onclick();
                 }, 3000)
             }
 
             function stop() {
                 clearInterval(timer);
            }
 
             function buttonsShow() {
                 for (var i = 0; i < buttons.length; i++) {
                     if (buttons[i].className == "on") {
                         buttons[i].className = "";
                     }
                 }
                 buttons[index - 1].className = "on";
             }
 
             prev.onclick = function() {
                 index -= 1;
                 if (index < 1) {
                     index = 3
                 }
                buttonsShow();
                 animate(1920);
             };

            next.onclick = function() {
                 index += 1;
                if (index >3) {
                     index = 1
                }
                animate(-1920);
                 buttonsShow();
            };

             for (var i = 0; i < buttons.length; i++) {
                (function(i) {
                     buttons[i].onclick = function() {
 
                        var clickIndex = parseInt(this.getAttribute('index'));
                         var offset = 1920 * (index - clickIndex); //这个index是当前图片停留时的index
                         animate(offset);
                         index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
                         buttonsShow();
                     }
                 })(i)
            }
 
             container.onmouseover = stop;
             container.onmouseout = play;
             play();


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
