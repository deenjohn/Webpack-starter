//https://medium.com/@j_lim_j/summary-of-webpack-4-fundamentals-by-sean-larkin-part-3-of-4-webpack-core-concepts-3d43126047f3

import nav from "./nav" ;
import de from "./de" ;
import image1 from "./images/img_girl.jpg" ;
import {footer} from './footer';
import makeButton from "./button";
import { makeStyle } from "./button-styles";
var img = document.createElement("img");
img.src = image1;

const button = makeButton("Yay! A button!");
//button.style = makeColorStyle("cyan");

Object.assign(button.style,makeStyle({color:"cyan", position:"absolute",top:"10px"}));

document.body.appendChild(button);
document.body.appendChild(img);
document.body.appendChild(footer);



//const footer = document.createElement("footer");

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'john'
  ];
  
  console.log(materials.map(material => material.length));