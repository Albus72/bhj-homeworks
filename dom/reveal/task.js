let reveals = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
    let sizeWindow = window.innerHeight;
    for (let i = 0; i < reveals.length; i++) {
        let topElement = reveals[i].getBoundingClientRect().top;
        let bottomElement = reveals[i].getBoundingClientRect().bottom;
        if ((topElement > 0 || (bottomElement > 0 && bottomElement < sizeWindow)) && topElement < sizeWindow && !reveals[i].classList.contains('reveal_active')) {
            reveals[i].classList.add('reveal_active');
        }
    }  
});