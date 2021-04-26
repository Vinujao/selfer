var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    output=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=output
    if (output=="take my selfie") {
        speak()  
    }
   
}

function speak(){
    var speechapi=window.speechSynthesis
    speechdata="Say cheese as we are taking your selfie in 5 seconds"
    utterthis=new SpeechSynthesisUtterance(speechdata)
    speechapi.speak(utterthis) 
    Webcam.attach("#camera")
    setTimeout(() => {
        snapshot()
        save()
    }, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});



function snapshot(){
    Webcam.snap(
        function(selfie){
            document.getElementById("result").innerHTML=`<img src=${selfie} id="capture_img">`
        }
    )
}




function save(){
    link=document.getElementById("link")
    img=document.getElementById("capture_img").src 
    link.href=img
    link.click()
}