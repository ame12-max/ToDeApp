const inputBox =document.getElementById('input-box');
const listContainer =document.getElementById('list-container'); 
const now = new Date();
function addTask(){
if(inputBox.value === ''){
    alert('you must write somthing')
}
else{
    let li =document.createElement("li");
    li.innerHTML = inputBox.value ;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    span.addEventListener('click',() =>{
        li.remove();
    })
}
inputBox.value = '';
saveData ();
}
listContainer.addEventListener('click',(e) =>{
    if(e.target.tagName === 'LI'){
  e.target.classList.toggle('checked') = "LI"
  saveData ();
    }
    
})
function saveData (){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
    const spans = listContainer.querySelectorAll('span');
    spans.forEach(span => {
        span.addEventListener('click', () => {
            span.parentElement.remove();
            saveData();
        });
    });
}
showTask();