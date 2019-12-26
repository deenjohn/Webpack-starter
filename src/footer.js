import {red, blue ,makeStyle} from "./button-styles"

const top = document.createElement("div");
top.innerText = "Top of Footer";
Object.assign(top.style,makeStyle({color:red}));

const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
Object.assign(bottom.style,makeStyle({color:blue}));


const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };