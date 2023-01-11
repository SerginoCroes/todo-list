export function drawFooter() {

    const footer = document.createElement('div');
    const footerText = document.createElement('p');

    footer.classList.add('footer');

    footerText.innerText = 'Footer';

    footer.appendChild(footerText);

    return footer;

}