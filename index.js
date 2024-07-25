// Your code here
function moveDodgerLeft() {
    const dodger=document.getElementById('dodger');
    let newPosition=dodger.style.left.replace('px', '');
    let left=parseInt('newPosition', 10);
    if (left>0) {
        dodger.style.left= `${left-1}px`;
    }
     else {
        dodger.style.left= `${left=1}px`
     }
    }



function moveDodgerRight() {
    const dodger=document.getElementById('dodger');
    let newPosition=dodger.style.left.replace('px', '');
    let left=parseInt(newPosition, 10);
    if (left<360) {
        dodger.style.left= `${left+1}px`;
    }
    else {
        dodger.style.left= `${left=1}px`
    }
}