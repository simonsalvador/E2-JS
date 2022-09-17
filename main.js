const h2 = document.getElementById('pizzaName')
const h4 = document.getElementById('pizzaPrice')
const input = document.querySelector('input')
const button = document.getElementById('enviar')
const allContainer = document.getElementById("allContainer");

const pizzas = [
    {
        id: 1,
        nombre: "Pizza Napolitana",
        ingredientes: ["Queso", "Tomate", "Ajo"],
        precio: 1000,
    },
    {
        id: 2,
        nombre: "Pizza Barrigona",
        ingredientes: ["Queso", "Jamon", "Huevos Fritos", "Panceta"],
        precio: 2000
    },
    {
        id: 3,
        nombre: "Pizza Especial",
        ingredientes: ["Queso", "Jamon", "Morrones"],
        precio: 1200
    },
    {
        id: 4,
        nombre: "Pizza Calabresa ",
        ingredientes: ["Queso", "Longaniza", "Morrones"],
        precio: 1500
    },
    {
        id: 5,
        nombre: "Pizza Vegetariana",
        ingredientes: ["Queso", "Brocoli", "Morrones", "Choclo"],
        precio: 1700
    },
    {
        id: 6,
        nombre: "Pizza Fugazzeta",
        ingredientes: ["Queso", "Cebolla", "Oregano"],
        precio: 1800
    }
];
button.addEventListener("click", enviarNumber);

function enviarNumber(e) {
    e.preventDefault();
    const pizzaId = parseInt(input.value);
    if (pizzaId <= 0 || pizzaId > pizzas.length) {
        error("El número debe ser entre 1 y 6");
        reset();
        return;
    }
    if (!pizzaId) {
        error("Por favor, ingrese un número del 1 al 6");
        reset();
        return;
    }
    const res = pizzas.find((pizza) => pizza.id === pizzaId);
    render(res);
}


const error = (message) => {
    const lastError = document.querySelector(".m-auto");
    if (!lastError) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("align-text", "m-auto");
        errorContainer.innerHTML = `
    <p class="error">${message}</p>
    `;
        allContainer.appendChild(errorContainer);
        setTimeout(() => {
            errorContainer.remove();
        }, 5000);
    }
};


const render = (pizza) => {
    const { nombre, precio } = pizza;
    h2.innerHTML = `<span class= "small">Usted eligió: </span>${nombre}`;
    h4.innerHTML = `<span class= "small">El precio es de: </span>${precio}`;
}


const reset = () => {
    h2.innerHTML = "";
    h4.innerHTML = "";
};
