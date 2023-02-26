window.onload = function () { 
const playbut = document.getElementById('play-button')
const pausebut = document.getElementById('pause-button') 
const stopbut = document.getElementById('stop-button') 
const textinput = document.getElementById('text') 
const speedinput = document.getElementById('speed') 


playbut.addEventListener('click', () => {
    playText(textinput.value)  
    let x = textinput.value 
    if(x == "") { 
        // alert("Please Enter Info")
        $("#text").addClass("error"); 
        } 
        else { 
            if($("#text").val()) {
                $("#text").removeClass("error"); 
                // x.disbled = false
            }
            }
    
})  

pausebut.addEventListener('click', pausetext);

stopbut.addEventListener('click',canceltext); 

   

    






function playText(text) { 
    if(speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    const utterance = new SpeechSynthesisUtterance(text) 
    utterance.rate = speedinput.value || 1 
    utterance.addEventListener('end', () => {
        textinput.disbled = false
    })
    textinput.disbled = true 
   
    speechSynthesis.speak(utterance)
} 

function pausetext() {
   if(speechSynthesis.speaking) speechSynthesis.pause()
}  

function canceltext () { 
    // speechSynthesis.resume()
    speechSynthesis.cancel() 
}
} 




