$(function () {
    var timer;
    var opacity;
    $("#start").click(function () {
        let width = $('#width').val();
        let growthAmount = $('#growthAmount').val();
        let speed = $('#speed').val();
        let numberOfCircle = $('#numberOfCircle').val();
        for (let i = 0; i < numberOfCircle; i++) {
            makeCircle(width, i * 100);
        } 
        listenToClick();
        listenToHover();
     
            timer = setInterval(changeSize, speed, growthAmount);
       
    });
    // $("#stop").click(function () {
    //     console.log("Stoping Timer")
    //     clearInterval(timer);
    // })
    function makeCircle(width) {
     $("#container")
            .append(
                $("<div>", {
                    "class": "circle",
                    "css": {
                        "width": width+"px",
                        "height": width+"px", 
                        "border-radius": width+"px",
                        
                        "position": "absolute",
                        "background-color": `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,

                        "left": Math.floor(Math.random() * screen.width) + "px",
                    }
                }
                )
            );
    }

    function changeSize(value) {
       $(".circle")
        
            .css({ 
                "height": ((idx, old) => parseInt(old) + parseInt(value) + "px"),
                "width": ((idx, old) => parseInt(old) + parseInt(value) + "px"),
                "border-radius": ((idx, old) => parseInt(old) + parseInt(value) + "px")
            });
    }

function listenToClick(){
    $("#container > .circle").click(function () {
        $(this).hide()
    });
}
function listenToHover(){
    let opacitytimer=0;
    $("#container > .circle").hover(function () {
      if(!opacity){
          opacity =1;
      }   
      opacitytimer=setInterval(decreseOpacity, 250, this, opacity)

    },  function () {
        $(this).css("opacity", "1");
        clearInterval(opacitytimer);
    });
}
function  decreseOpacity(selectedDiv){ 
  opacity-=0.5;
  $(selectedDiv).css("opacity", opacity)
}

  
});

/* ----------------

This assignment requires  full understanding of JQuery and I spend more than four hours of understanding and practicing 
different jquery function  and then after I practice  I decided to the assignment and it takes arround 2 and half hours.
I tried each funtionality and  deleting  one circle takes about half an hour.
The web page can be accessed from  the function url.
https://muluadam.github.io/WAP/ 

*/