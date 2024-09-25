const logDiv=document.querySelector('.box1');
const stateDiv=document.querySelector('.box2');
const startBTn=document.querySelector('.btn-1');
const stopBtn=document.querySelector('.btn-2');
startBTn.addEventListener('click',()=>{
    document.addEventListener('keydown',handleDown);
    document.addEventListener('keyup',handleUp);
    startBTn.disabled=true;
    stopBtn.disabled=false;

})
stopBtn.addEventListener('click',()=>{
    document.removeEventListener('keydown',handleDown);
    document.removeEventListener('keyup',handleUp);
    logDiv.textContent="";
    stateDiv.textContent=" ";
    startBTn.disabled=false;
    stopBtn.disabled=true;
})
function handleDown(e)
{
    logDiv.textContent=`key ${e.key} presses down`;
    stateDiv.textContent=`key is Down`;
}
function handleUp(e)
{
    logDiv.textContent=`key ${e.key} presses Up`;
    stateDiv.textContent=`key is Up`;
}