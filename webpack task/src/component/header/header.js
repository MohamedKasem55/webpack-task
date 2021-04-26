import "./style.css";
const element = document.createElement("header");

element.innerHTML = "webpack task";
element.classList.add('info')
import photo from '../../assets/image.png'
const img = document.createElement("img");
img.src=photo;
img.style.width="10px"
img.style.height="10px"
element.appendChild(img);
document.body.appendChild(element);

// nooo




