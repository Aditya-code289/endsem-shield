const branch=document.querySelector("#branch");
const subjects= document.querySelector("#subjects");
const subj_sec=document.querySelector('#subjects_section')
const marks_inputs=document.querySelector("#inputs")
const mid_sem=document.querySelector("#mid_sem")
const lab=document.querySelector("#lab")
const TA=document.querySelector("#TA")
const max=document.querySelector("#expected")
const ans_text=document.querySelector("#answer")
const without_lab=document.querySelector('#inputs_without_lab')
const mid_sem_2=document.querySelector("#mid_sem_2")
const TA_2=document.querySelector("#TA_2")
const max_2=document.querySelector("#expected_2")

let chosen;
let mid_nu,lab_nu,TA_num,max_nu,total,answer,radio,label,chosen_sub,count,answer2,mid_nu_2;

const branch_subj={

    CSE: ["MTTDE" , "Digital Electronics", "Data Structures", "Application Programming", "Communication Skills", "Mechanics and Graphics"],

    CSA: ["Probability-Statistics", "Linear Algebra", "Data Structures", "Application Programming", "Communication Skills"],

    CSD: ["Probability-Statistics", "Linear Algebra", "Data Structures", "Applied    Electronics", "Entrepreneurship"],

    HCIGT:["MTTDE","Applied Physics","Data Structures","Application Programming","Game dev and design thinking", "Applied Electronics", "Environmental Studies"],

    ECE: ["MTTDE" , "Digital Electronics", "Data Structures", "Application Programming", "Environmental Studies", "Applied Sciences"],

    ECI:["Digital System Design","Data Structures","Analog IC and Fabrication", "Probability", "Instrumentation Techniques", "Communication Skills"]

} 


branch.addEventListener('change', ()=>{
    subj_sec.classList.remove('hidden')
    chosen=branch.value;
    subjects.innerHTML=""

    branch_subj[chosen].forEach((elm)=>{
        radio=document.createElement('input');
        label=document.createElement('label')
        label.textContent=`${elm}`
        label.prepend(radio)
        radio.type="radio";
        radio.name="subjects";
        radio.value=elm;
        subjects.appendChild(label);
    })
})

subjects.addEventListener('click',(user_sub)=>{
    chosen_sub=""

    
    chosen_sub=user_sub.target.value;

    if(chosen_sub=="Digital Electronics" || chosen_sub=="Data Structures" ||     chosen_sub=="Communication Skills" || chosen_sub=="Application Programming" || chosen_sub=="Mechanics and Graphics" || chosen_sub=="Analog IC and Fabrication" || chosen_sub=="Digital System Design" || chosen_sub=="Applied Sciences" ||chosen_sub=="Applied Electronics"){

        count=1;
        marks_inputs.classList.remove('hidden')
        submit.classList.remove('hidden')
        without_lab.classList.add('hidden')


    }
    else{
        count=2 
        without_lab.classList.remove('hidden')
        submit.classList.remove('hidden')
        marks_inputs.classList.add('hidden')

    }



    // marks_inputs.classList.remove('hidden')
    // submit.classList.remove('hidden')
})


submit.addEventListener('click',()=>{

    answer=null
    if(count==1){
        ans_text.classList.remove('hidden')
        mid_nu=Number(mid_sem.value);
        lab_nu=Number(lab.value);
        TA_num=Number(TA.value);
        max_nu=Number(max.value);

        if(mid_nu>30 || lab_nu>25 || TA_num>20 || max_nu>100){
            ans_text.textContent="Invalid Input" 
        }

        else{
            answer= [0.4*(max_nu)-lab_nu]*(4/3) - (mid_nu +TA_num);
            answer=Math.floor(answer)

            if(answer<0){
            ans_text.textContent=`You are already passed!` 
            }

            else{
            ans_text.textContent=`Min marks you need out of 100 is ${2*answer}` 

            }            
          
        }

    }

    else{
        ans_text.classList.remove('hidden')
        mid_nu=Number(mid_sem_2.value);
        TA_num=Number(TA_2.value);
        max_nu=Number(max_2.value);   

        if(mid_nu>30 || TA_num>20 || max_nu>100){
            ans_text.textContent="Invalid Input" 
        }
        else{   
            answer= 0.4*(max_nu) - (mid_nu +TA_num)
            answer=Math.floor(answer)
            if(answer<0){
            ans_text.textContent=`You are already passed!` 


            }
            else{
            ans_text.textContent=`Min marks you need out of 100 is ${2*answer}` 

            }
            
        }
    }

    

})

