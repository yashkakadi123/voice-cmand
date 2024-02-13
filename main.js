x = 0;
y = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);

    var content  = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognised as:"+ content;
    if(content=="apple")
    {
       draw(apple.png);
        document.getElementById("status").innerHTML = "Started drawing apple"
        draw_apple = "set";
    }
  
}
    function setup()
    {
        canvas = createCanvas(900,600);
    }
    function draw()
    {
        if (draw_circle == "set")
        {
            draw(apple.png);
            document.getElementById("status").innerHTML = "apple is drawn"
            draw_apple = "";
        }
        
     
      }
  

