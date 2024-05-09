let start_button=document.getElementById("jatek_start_button");
start_button.addEventListener("click",(e)=>{
    document.getElementById("start_div").style.display="none";
    document.getElementById("jatek_gameboard").style.display="grid";
})
let words=["hádész", "zeusz","athéna","apolló","alvilág","olümposz","athén"]
let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let used_words=[];
let used_index=0;
for( let x=0;x<8;x++){
    let words_rnd=Math.floor(Math.random()*(7-used_index))
    let new_letters=[]
    console.log(words[words_rnd])
    if(words.length==0){
    }else{
    new_letters=words[words_rnd].split("")
    used_words[used_index]=words[words_rnd]
    words.splice(words_rnd,1)
    used_index++;
    let maradék_helyek=8-new_letters.length;
    let elötte_helyek=Math.floor(Math.random()*maradék_helyek)
    }
    for(let y=0;y<8;y++){
        let rnd=Math.floor(Math.random()*26);
        let new_div=document.createElement("div")
        new_div.style.textAlign="center"
        new_div.style.fontSize="3vw"
        new_div.style.display="flex"
        new_div.style.alignItems="center"
        new_div.style.justifyContent="center"
        new_div.style.gridArea=(x+1)+"/"+(y+1);
        if(new_letters.length+y<=8 || megfel){
            if(y>=new_letters.length || y<=elötte_helyek){
                let rnd_letters=Math.floor(Math.random()*26)
                new_div.textContent=letters[rnd_letters]
            }else{
            new_div.textContent=new_letters[y-elötte_helyek]
            megfel=true;}
            
        }document.getElementById("jatek_gameboard").appendChild(new_div)
        }
    }