import { drawFooter } from "./footer";
import { drawHeader } from "./header";
import { drawMenu } from "./menu";

const content = document.querySelector('#content');

content.appendChild(drawHeader());
content.appendChild(drawMenu());
content.appendChild(drawFooter());