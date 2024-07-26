var colours=["green","red","yellow","blue"];
var patternuser=[];
var currentpattern=[];
var level=0;
var start=false;
$(document).keypress(function () {
    if (!start) {
        $("#level-title").text("Level"+level);
        newcompseq();
        
        start=true;
        
    }
    
});
function newcompseq() {
    patternuser=[];
    level+=1;
    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomcolour=colours[randomNumber];
    currentpattern.push(randomcolour);
    $("#" + randomcolour).fadeIn(100).fadeOut(100).fadeIn(100);
    playaudio(randomcolour);

    
}

$(".btn").click(function() {

    var userColour = $(this).attr("id");
    patternuser.push(userColour);
  
    playaudio(userColour);
    animate(userColour);
  
    check(patternuser.length-1);
  });
  function check(len){
    
        if(patternuser[len]===currentpattern[len])
            {
                if (patternuser.length === currentpattern.length){
                    setTimeout(function () {
                      newcompseq();
                    }, 1000);
                  }
                } else {
                  playaudio("wrong");
                  $("body").addClass("game-over");
                  $("#level-title").text("Game Over, Press Any Key to Restart");
            
                  setTimeout(function () {
                    $("body").removeClass("game-over");
                  }, 200);
            
                  over();
                }
            }
    
    function over() {
            level = 0;
            currentpattern = [];
            start= false;
          }
          function animate(currentColor)
          {
            $("#" + currentColor).addClass("pressed");
            setTimeout(function () {
              $("#" + currentColor).removeClass("pressed");
            }, 100);
          }
          
          

        
    

  
function playaudio(colour){
    var ad="sounds/"+colour+".mp3";
    var audio=new Audio("sounds/"+colour+".mp3");
    audio.play();
            
}
function animate(colour) {
    $("#" + colour).fadeIn(100).fadeOut(100).fadeIn(100);


    
}

