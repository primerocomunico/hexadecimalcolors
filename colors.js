const colorBtn = document.querySelector('.colorBtn');
const background = document.querySelector('body');
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colorName = document.querySelector('.copyAction');

colorBtn.addEventListener('click', getColor);

function getColor() {
    let hex = '#';

    // Ciclo de 6 valores para crear el color hexadecimal
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexColors.length);
        hex = hex + hexColors[random];
        //console.log(hex);
    }
    // Asignas el color al fondo
    background.style.backgroundColor = hex;

    colorName.innerHTML = `
    <h2 class = "hexColor">${hex}</h2> 
    `;
}