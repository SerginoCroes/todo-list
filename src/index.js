import { drawFooter } from "./footer";
import { drawHeader } from "./header";

const content = document.querySelector('#content');


console.log('test');
console.log(content);
console.log(drawHeader());


content.appendChild(drawHeader());
content.appendChild(drawFooter());