//this function implements spech-to-text
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start1(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content == "take my selfie"){
     speak();
    }
    

}
Webcam.set({
    width:360,height:250,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
function speak(){
    //this function implements text-to-speach functionality!
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie within five seconds";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    }, 5000);
}
function takeSnapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save(){
 link=document.getElementById("link")   ;
 image=document.getElementById("selfie_image").src;
 link.href=image;
 link.click();

}//function for downloading image