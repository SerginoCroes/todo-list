export function drawHeader() {

    const header = document.createElement('div');
    const headerTitle = document.createElement('h1');

    header.classList.add('header');

    headerTitle.innerText = 'Todo List';

    header.appendChild(headerTitle);

    return header;

}