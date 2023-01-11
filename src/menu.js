export function drawMenu() {

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const allItemButton = document.createElement('button');
    const currentItemButton = document.createElement('button');

    const projectDivider = document.createElement('p');

    const projectAddButton = document.createElement('button');


    allItemButton.innerText = 'All items';
    currentItemButton.innerText = 'Current Items';

    projectDivider.innerText = 'Projects:';
    
    projectAddButton.innerText = 'Add project';



    menu.appendChild(allItemButton);
    menu.appendChild(currentItemButton);
    menu.appendChild(projectDivider);
    menu.appendChild(projectAddButton);


    return menu;

}