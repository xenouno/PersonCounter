let countEl=document.getElementById("count")

let count=0

console.log(countEl)
function increment(){
    count=count+1
    countEl.innerText=count

}
let prev=document.getElementById("prev")
function save(){
    prev.textContent=prev.textContent+count+" - "
    count=0
    countEl.textContent=0
}
let point=4
let bonus="15"
console.log(point+bonus)