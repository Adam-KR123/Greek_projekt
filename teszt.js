let questions=1;
let button_left=document.getElementById("test_left")
let button_right=document.getElementById("test_right")
let current_question=document.getElementById("q_0"+questions+"_div")
let final_score=0;
let answers=["Zeusz","Apolló","Vénusz","Alvilág"]
current_question.style.display="block"
if(questions===1){
    button_left.style.display="none"
}
button_left.addEventListener("click",(e)=>{
    current_question.style.display="none"
    questions--;
    if(questions===1){
        button_left.style.display="none"
        current_question=document.getElementById("q_0"+questions+"_div")
        current_question.style.display="block"
    }
    else if(questions<4 && questions>0){
        button_right.textContent="Következő"
        current_question=document.getElementById("q_0"+questions+"_div")
        current_question.style.display="block"
    }
})
button_right.addEventListener("click",(e)=>{
    current_question.style.display="none"
    questions++;
    if(questions===4){
        button_right.textContent="Leadás"
        current_question=document.getElementById("q_0"+questions+"_div")
        current_question.style.display="block"
    }
    else if(questions>1&& questions<5){
        button_left.style.display="block"
        current_question=document.getElementById("q_0"+questions+"_div")
        current_question.style.display="block"
    }
    else{
        button_left.style.display="none"
        button_right.style.display="none"
        current_question.style.display="none"
        let answer_1_possible= document.getElementsByName("r_q_01")
        let answer_1_labels=document.getElementsByName("q_01")
        let answer_1
        for(let i=0;i<answer_1_possible.length;i++){
            if(answer_1_possible[i].checked){
                let labels=answer_1_labels[i].textContent
                answer_1=labels
            }
        }
        let answer_2_possible= document.getElementsByName("r_q_02")
        let answer_2_labels=document.getElementsByName("q_02")
        let answer_2
        for(let i=0;i<answer_2_possible.length;i++){
            if(answer_2_possible[i].checked){
                let labels=answer_2_labels[i].textContent
                answer_2=labels
            }
        }
        let answer_3_possible= document.getElementsByName("r_q_03")
        let answer_3_labels=document.getElementsByName("q_03")
        let answer_3
        for(let i=0;i<answer_3_possible.length;i++){
            if(answer_3_possible[i].checked){
                let labels=answer_3_labels[i].textContent
                answer_3=labels
            }
        }
        let answer_4_possible= document.getElementsByName("r_q_04")
        let answer_4_labels=document.getElementsByName("q_04")
        let answer_4
        for(let i=0;i<answer_4_possible.length;i++){
            if(answer_4_possible[i].checked){
                let labels=answer_4_labels[i].textContent
                answer_4=labels
            }
        }
        let p_answers=[answer_1,answer_2,answer_3,answer_4]
        for(let i=0;i<p_answers.length;i++){
            if(answers[i]===p_answers[i]){
                final_score++;
            }
        }
        document.getElementById("test_end").style.display="block"
        document.getElementById("final_test_score").textContent=final_score
        for(let i=0;i<p_answers.length+1;i++){
            if(i===0){
                document.getElementById("answer_"+i).textContent="Helyes válaszok- - - - - - -Általad megadott válaszok"
            }
            else{
                document.getElementById("answer_"+i).textContent=answers[i-1]+"- - - - - - -"+p_answers[i-1]
            }
        }
    }
})