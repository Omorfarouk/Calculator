const number = document.querySelectorAll('.number')
const operation= document.querySelectorAll('.operation')
const resultLast=document.querySelector('.result');
const clear= document.querySelector('.clear');
const del = document.querySelector('.delete')
const overoutput= document.querySelector('.overoutput');
const underoutput= document.querySelector('.underoutput');
const tempoutput= document.querySelector('.tempoutput');

var output1= '';
var output2='';
var result=null;
var operationLast='';
var oneDot=false;

number.forEach( (n)=>{  //for single parameter we no need to use ()
    n.addEventListener('click' , (e)=> {
        if(e.target.innerText==='.' && !oneDot){
            oneDot=true;
        }
        else if(e.target.innerText==='.' && oneDot){
            return ;
        }
        output2 +=e.target.innerText;
        underoutput.innerText=output2;
    })
})

/* //^ amra eii function ta nicer neyome o likte pari
  function handleNumberClick(e) {
  if (e.target.innerText === '.' && !oneDot) {
    oneDot = true;
  } else if (e.target.innerText === '.' && oneDot) {
    return;
  }
  output2 += e.target.innerText;
  underoutput.innerText = output2;
}

number.forEach(number => {
  number.addEventListener('click', handleNumberClick);
});
*/


operation.forEach( (o) => {
    o.addEventListener('click', (e)=> {
        if(!output2)
            return;
        oneDot=false;
     const operationName= e.target.innerText;
     if(output1 && output2 && operationLast){
        mathOperation();
     }
     else{
        result=parseFloat(output2);
     }

     clearVar(operationName);
     operationLast=operationName;
    })
})

 
function clearVar(name=''){
    output1 += output2 + ' ' + name + ' ';
    overoutput.innerText=output1;
    underoutput.innerText='';
    output2='';
    tempoutput.innerText=result; 
    
}

function mathOperation(){
    if(operationLast==="x"){
        result=parseFloat(result)*parseFloat(output2);
    }

    else if(operationLast==='+'){
        result=parseFloat(result)+ parseFloat(output2);
    }

    else if(operationLast==='/'){
        result=parseFloat(result)/parseFloat(output2);
    }
    else if(operationLast==='-'){
        result=parseFloat(result)- parseFloat(output2);
    }
    else if(operationLast==='%'){
        result=parseFloat(result)%parseFloat(output2);
    }
}

resultLast.addEventListener('click' , (e)=>{
    if(!output1 || !output2) return
    oneDot=false;

    mathOperation();
    clearVar();
    underoutput.innerText=result;
    tempoutput.innerText='';
    output2=result;
    output1='';
})

clear.addEventListener('click', (e)=>{
  underoutput.innerText='';
  overoutput.innerText='';
  tempoutput.innerText='';
  output1='';
  output2='';
  result='';
})

del.addEventListener('click', (e) => {
    underoutput.innerText = underoutput.innerText.toString().slice(0, -1)
    output2 = output2.toString().slice(0, -1)
  })

window.addEventListener('keydown', (e) =>{
    if(
        e.key==='0' ||
        e.key==='1' ||
        e.key==='2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
    ){
        clickNumber(e.key);
    }

    else if(
        e.key==='+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%' ||
        e.key === '*'
     ){
   clickOperation(e.key);
    }

    else if(e.key==='Enter' || e.key==='='){
        clickResult();
    }
  
    else if(e.key==='Backspace'){
        clickDel();
    }
    else if(e.key==='Delete'){
        clickClear();
    }
 
})



 function clickNumber(key){
    number.forEach( (button) =>{
        if(button.innerText==key){
            button.click();
        }
    })
 }

 
 function clickOperation(key){
    operation.forEach( (button) =>{
        if(button.innerText===key){
            button.click();
        }
    })
 }

 function clickResult(){
    resultLast.click();
 }

 function  clickDel(){
    del.click();
 }

 function clickClear(){
    clear.click();
 }