



$(function () {
    let gameStarted = false;
    let faultCounter = 0;
 
 




function startClicked(){ 
        gameStarted = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started")
        //console.log("Strt is clicked");
 
}
function stopHovered(){
 
    if (gameStarted && !faultCounter) {
        $("#status").text("You win:!!");
    } else {
        $("#status").text("Sorry,You lose!")
    }
    gameStarted = false;
}
function mouseLeaveMazeBox() {
    if (gameStarted) {
        $("#status").text("You lose!");
        $(".boundary").not(".example").addClass("youlose");
    }
}
function mouseTouchBorder() {
    if (gameStarted) {
        faultCounter = faultCounter + 1;
        $(".boundary").not(".example").addClass("youlose");
    } else {
        faultCounter = 0;
        $(".boundary").removeClass("youlose");
    }
}
function mazeGame(){

    $("#start").click(startClicked);

    $("#end").mouseover(stopHovered);

    $("#maze").mouseleave(mouseLeaveMazeBox);
    $(".boundary").mouseover(mouseTouchBorder);
  

}

mazeGame(); 

});