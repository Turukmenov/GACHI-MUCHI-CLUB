const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const modal = document.querySelector('.modal');
const modal_2 = document.querySelector('.modal_2');

const yesF = () => {
    modal.style.display = 'none';
    modal_2.style.display = 'flex';
    return false;
}
yes.onclick = () => yesF();

function randomIntegerTop(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}
function randomIntegerLeft(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}

no.addEventListener('click', function(event) {
    event.preventDefault();

    const modalRect = modal.getBoundingClientRect();
    const noRect = no.getBoundingClientRect();

    const maxTop = modalRect.height - noRect.height - 20;
    const maxLeft = modalRect.width - noRect.width - 20;

    let newTop = randomIntegerTop(10, maxTop);
    let newLeft = randomIntegerLeft(10, maxLeft);

    if (newTop < 10) {
        newTop = 10;
    } else if (newTop > maxTop) {
        newTop = maxTop;
    }
    if (newLeft < 10) {
        newLeft = 10;
    } else if (newLeft > maxLeft) {
        newLeft = maxLeft;
    }

    no.style.marginTop = `${newTop}px`;
    no.style.marginLeft = `${newLeft}px`;
});