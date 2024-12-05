let btn=document.querySelector('#btn')
let content=document.querySelector('.bn')
let voice=document.querySelector("#voice")
let gh=document.querySelector(".gh")


let logo=document.querySelector("#logo")

logo.addEventListener('click',(()=>{
     gh.style.display='flex'
     btn.style.display="flex"
}))


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.pitch=1
    text_speak.rate=1
    text_speak.volume=1
    text_speak.lang='en-US'
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hours=day.getHours()
   
    if(hours>0 && hours<12){
        speak('Good mornig dear how are you')
    }
    else if(hours>=12 && hours<18){
        speak('Good Afternoon dear how are you')
    }
    else {
        speak('Good evening dear')
    }

}

window.addEventListener('load',(()=>{
     wishme()
}))

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
     gh.style.display='none'
     btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hi dear,what can i help you?")
    }
   else if(message.includes("hello")||message.includes("hi")){
        speak("hi dear,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Siraj Chandio")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("girl")){
        speak("no no no no no no no")
        window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2Lz9mtWGy9NpMjbD8Qf2fl4NxgTeTl2JBHHA42vvfMqUe0eMZRycIrhpDuZOXs6PF0k&usqp=CAU")
    }
    else if(message.includes("sex")){
        speak("no no no no no no no")
        window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2Lz9mtWGy9NpMjbD8Qf2fl4NxgTeTl2JBHHA42vvfMqUe0eMZRycIrhpDuZOXs6PF0k&usqp=CAU")
    }
    else if(message.includes("porn")){
        speak("no no no no no no no")
        window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2Lz9mtWGy9NpMjbD8Qf2fl4NxgTeTl2JBHHA42vvfMqUe0eMZRycIrhpDuZOXs6PF0k&usqp=CAU")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("question")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    
    else if(message.includes("reply")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("why")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("when")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("who")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("which")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("how")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("mohammed siraj aabid")){
        speak("My Teacher weveloper")
        window.open("https://scontent.fkhi3-1.fna.fbcdn.net/v/t39.30808-6/400859740_1059327328751611_8660254522991620907_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHpUrkHN4RGvs9RjwGdJzO9sMzjxmshtWqwzOPGayG1anqH9KE_xjnMFv8IeRcQqWWQAtj5OZB9HhAYMJnqhhVm&_nc_ohc=_Zv8jd89On0Q7kNvgGGRBd2&_nc_zt=23&_nc_ht=scontent.fkhi3-1.fna&_nc_gid=A7pJRBS3K5eXnBe7KbSXapu&oh=00_AYBV-qI5TtpsQNh7xEUQ8qmxN-u7r7wdfrIDsntR2MCTjA&oe=6756DEA6")
    }

    


    else if(message.includes("anser")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("What")){
        speak("I'm replying, please wait.")
        window.open("https://www.blackbox.ai/")
    }
    else if(message.includes("saifulla sahab")){
        speak("my best friend qataar p t i")
        window.open("https://web.facebook.com/100089345448452/posts/pfbid0C6W3JfA3n542cLVKzQo5hGPw3xjuWaw2eQV8PQpiVZGJNTL5P5FxoSTfwQXBStWDl/?app=fbl&_rdc=1&_rdr#")
    }
    else if(message.includes("saifulla")){
        speak("my best friend qataar p t i")
        window.open("https://web.facebook.com/100089345448452/posts/pfbid0C6W3JfA3n542cLVKzQo5hGPw3xjuWaw2eQV8PQpiVZGJNTL5P5FxoSTfwQXBStWDl/?app=fbl&_rdc=1&_rdr#")
    }
    else if(message.includes("shan sahab")){
        speak("one of my best teacher in life")
        window.open("https://web.facebook.com/100003231023278/posts/8209650405819245/?substory_index=1176455870253596&app=fbl&_rdc=1&_rdr#")
    }
    else if(message.includes("shan shan shan")){
        speak("one of my best teacher in life")
        window.open("https://web.facebook.com/100003231023278/posts/8209650405819245/?substory_index=1176455870253596&app=fbl&_rdc=1&_rdr#")
    }


    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("siraj","") || message.replace("siraj","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("siraj","")}`,"_blank")
    }
}