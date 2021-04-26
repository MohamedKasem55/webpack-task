import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "the second div";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());