const hasTooltipArr = Array.from(document.querySelectorAll('.has-tooltip'));
let positionArr = ['top', 'left', 'right', 'bottom'];
const allTagA = document.getElementsByTagName('a');

function addTooltip(index) {
    let div = document.createElement('div');
    div.classList.add('tooltip');
    div.innerText = hasTooltipArr[index].title;
    hasTooltipArr[index].appendChild(div);
    allTagA[index].removeAttribute('title');
}

function position(index, children) {
    let {top, left, right, bottom, height} = hasTooltipArr[index].getBoundingClientRect();
    let childrenHeight = children.getBoundingClientRect().height;
    let childrenWidth = children.getBoundingClientRect().width;

    if (hasTooltipArr[index].dataset.position === 'top') {
        children.style = `left: ${left}px; top: ${top - childrenHeight}px`;
    }

    if (hasTooltipArr[index].dataset.position === 'left') {
        children.style = `left: ${left - childrenWidth}px; top: ${top - ((childrenHeight - height) / 2)}px`;
    }

    if (hasTooltipArr[index].dataset.position === 'right') {
        children.style = `left: ${right}px; top: ${top - ((childrenHeight - height) / 2)}px`;
    }

    if (hasTooltipArr[index].dataset.position === 'bottom') {
        children.style = `left: ${left}px; top: ${bottom}px`;
    }
}

for (let i = 0; i < hasTooltipArr.length; i++) {
    addDataset(i);
    addTooltip(i);
    
    let children = hasTooltipArr[i].querySelector('.tooltip');

    hasTooltipArr[i].addEventListener('click', function(evtent) {
        evtent.preventDefault();
        if (children.classList.contains('tooltip_active')) {
            children.classList.remove('tooltip_active');
        } else { 
            hasTooltipArr.forEach(element => element.querySelector('div.tooltip').classList.remove('tooltip_active'));
            children.classList.add('tooltip_active');
        }
        position(i, children);
    });
    
    window.addEventListener('scroll', function() {
        position(i, children);
    });
}

function addDataset(index) {
    randomPosition = Math.floor(Math.random() * positionArr.length);
    hasTooltipArr[index].dataset.position = positionArr[randomPosition];  
}