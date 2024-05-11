let player_name=window.prompt("Kérem adja meg a nevét!")
let seconds=0
let minutes=0
let start_button=document.getElementById("jatek_start_button");
start_button.addEventListener("click",(e)=>{
    document.getElementById("start_div").style.display="none";
    document.getElementById("jatek_gameboard").style.display="grid";    
    seconds=0;
    minutes=0
    document.getElementById("timer_game").style.display="block"
    document.getElementById("score").style.display="block"
    document.getElementById("score").innerText=score+"/8"
    document.getElementById("word_tobe_guessed").style.display="block"
    setTime();
})
let words=["hádész", "zeusz","athéna","apolló","alvilág","olümposz","athén","árész"]
let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let used_words=[];
let used_index=0;
let used_letters=""
let used_letters_indexes=[]
for( let x=0;x<8;x++){
    let words_rnd=Math.floor(Math.random()*(7-used_index))
    let new_letters=[]
    if(words.length==0){
    }else{
    new_letters=words[words_rnd].split("")
    used_words[used_index]=words[words_rnd]
    words.splice(words_rnd,1)
    used_index++;
    }
    let maradék_helyek=8-new_letters.length;
    let elötte_helyek=Math.floor(Math.random()*maradék_helyek)
    let szó_index=0;
    for(let y=0;y<8;y++){
        let rnd=Math.floor(Math.random()*26);
        let new_div=document.createElement("div")
        new_div.id="gameboard_div"+(x+1)+"_"+(y+1)
        new_div.style.textAlign="center"
        new_div.style.fontSize="3vw"
        new_div.style.display="flex"
        new_div.style.alignItems="center"
        new_div.style.justifyContent="center"
        new_div.style.gridArea=(x+1)+"/"+(y+1);
        new_div.addEventListener("mouseover",(e)=>{
            let maybe_coordinates= new_div.style.gridArea.split("/")
            current_xpos=maybe_coordinates[0].trim()
            current_ypos=maybe_coordinates[1].trim()
            
        })
        mouseMoveWhilstDown(new_div, function(){
            let square=document.getElementById("gameboard_div"+current_xpos+"_"+current_ypos)
            if(used_letters.includes(square.textContent) && used_letters_indexes.includes(square.style.gridArea)){
                
            }else{
                used_letters+=square.textContent
                used_letters_indexes.push(square.style.gridArea)
            }
            square.style.backgroundColor="white"
            square.style.color="black"
            

        })
        
        if(new_letters.length+y<=8 || megfel){
            if(y-elötte_helyek>=new_letters.length || y<elötte_helyek){
                let rnd_letters=Math.floor(Math.random()*26)
                new_div.textContent=letters[rnd_letters]
            }else{
            new_div.textContent=new_letters[szó_index]
            szó_index++
            megfel=true;}
            
        }document.getElementById("jatek_gameboard").appendChild(new_div)
        }
}
function mouseMoveWhilstDown(target, whileMove) {
    var endMove = function () {
        window.removeEventListener('mousemove', whileMove);
        window.removeEventListener('mouseup', endMove);
        let game_squares=document.getElementById("jatek_gameboard").children
        for(let i=0;i<game_squares.length;i++){
            game_squares.item(i).style.backgroundColor="black"
            game_squares.item(i).style.color="white"
        }
        guess=used_letters
        used_letters=""
        used_letters_indexes=[]
            if(guess===random_word_fromused){
                score++;
                document.getElementById("score").innerText=score+"/8"
                used_words.splice(used_words.indexOf(random_word_fromused),1)
                random_word_fromused=used_words[Math.floor(Math.random()*(used_words.length-1))]
                document.getElementById("word_tobe_guessed").textContent=random_word_fromused
            }
            if(score===8){
                document.getElementById("jatek_gameboard").style.display="none";
                document.getElementById("timer_game").style.display="none"
                document.getElementById("score").style.display="none"
                document.getElementById("word_tobe_guessed").style.display="none"
                let final_time_seconds=document.getElementById("seconds").textContent
                let final_time_minutes=document.getElementById("minutes").textContent
                let final_time=final_time_minutes+":"+final_time_seconds;
                document.getElementById("end_screen").style.display="block"
                document.getElementById("player_name").textContent=player_name
                document.getElementById("final_time").textContent=final_time
            }
    };
    target.addEventListener('mousedown', function (event) {
        event.stopPropagation();
        window.addEventListener('mousemove', whileMove);
        window.addEventListener('mouseup', endMove);   
    });
}
let score=0;
let random_word_fromused=used_words[Math.floor(Math.random()*(used_words.length-1))]
document.getElementById("word_tobe_guessed").textContent=random_word_fromused
console.log(random_word_fromused)
let guess=""
function setTime(){
        if(seconds<10){
            document.getElementById("seconds").textContent="0"+seconds;
        }
        else{
        document.getElementById("seconds").textContent=seconds
        }
        if(minutes<10){
            document.getElementById("minutes").textContent="0"+minutes
        }
        else{
            document.getElementById("minutes").textContent=minutes
        }
        if(seconds/59==1){
            seconds=0
            minutes++;
        }
        seconds++
        setTimeout(setTime,1000)
}
