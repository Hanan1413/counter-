 let countEl = document.getElementById('count-el');
let countBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');
let saveEl = document.getElementById('save-el');
console.log(countEl)
console.log(countBtn)
console.log(saveBtn)
console.log(saveEl)


count = 0
function increment(){
    count+=1;
    countEl.innerHTML = count


}

function save(){
    
    //    Shorter code 
 // saveEl.textContent += count
    //  saveEl.textContent += "-";
    let countStr = count + " - "
    saveEl.textContent += countStr
   
     count = 0
     countEl.textContent = 0



    //  .innerHTML = count


}