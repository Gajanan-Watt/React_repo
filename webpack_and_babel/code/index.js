import {add} from "./cal.js";
import('./index.css');
import notesIcon from "./Images/notes_image.png"
// console.log(add(3, 5));

// console.log(add(5, 5));
let parent = document.getElementById("root");
let count = 0;
document.getElementById("btn").onclick = () => {
let div = document.createElement('div');
div.setAttribute("for_id", "id");

let text = document.getElementById('text_area').value;

let para = document.createElement('p');
count++;
para.innerHTML =  `${count} )`+" "+ text;

div.append(para);
parent.append(div);
console.log(parent);

}
