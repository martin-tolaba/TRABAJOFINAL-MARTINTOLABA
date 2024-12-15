let titulo = document.getElementById ("Martin Deportivos s.r.l")
 
console.log(titulo)


//metodo de acceso al dom

//getElementById()
const elementosClases = document.getElementsByClassName ("items")
for (let item of elementosClases) {
    item.style.color = "blue";

}
console.log(elementosClases)

const nuevoParrafo = document.createElement("p")
nuevoParrafo.textContent = "ENVIOS GRATIS A TODO EL PAIS A PARTIR DE 100000 PESOS"
document.body.appendChild(nuevoParrafo)



const parrafos =document.getElementsByTagName("p");

for (let item of parrafos) {
  item.style.color = "green"
}
console.log(parrafos)

const boton = document.getElementById("botoncito")

boton.addEventListener('click',() =>{alert("añadiste al carrito")})

console.log(boton)

let container = document.getElementById("contenedor")

let nombre = "martin deportivo"
container.innerHTML = '<h1>VENTA DE ZAPATILLAS ${nombre} </h1>'  

console.log(container)

const descripcion = document.getElementById("descripcion")

const inputDescripcion = document.getElementById("inputDescripcion")

const botonAgregar = document.getElementById("agregarDescripcion")

console.log(descripcion)
console.log(inputDescripcion)
console.log(botonAgregar)


function agregarTarea() {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = inputDescripcion.value;
    nuevaTarea.addEventListener('click', () => nuevaTarea.style.textDecoration = 'line-through')
    descripcion.appendChild(nuevaTarea)
    inputDescripcion.value="";
}

botonAgregar.addEventListener('click', agregarTarea)

const formulario = document.getElementById("formulario")

formulario.addEventListener('submit',(evento) =>{
    evento.preventDefault();
    const nombre =document.getElementById("nombre").value
    const email = document.getElementById("email").value

    alert('gracias, ${nombre}. tu formulario fue enviado con el mail ${email}')

    document.getElementById('nombre').value = ''
    document.getElementById('email').value = ''
})

const productos = [
    {id: 1, nombre: "adidas", precio: 125000, descripcion: "negro", stock: 8 },
    {id: 2, nombre: "fila", precio: 155000, descripcion: "rojo", stock: 7 },
    {id: 3, nombre: "nike", precio: 155000, descripcion: "azul", stock: 8 },
    {id: 4, nombre: "reebok", precio: 120000, descripcion: "gris", stock: 12 },
];

const listaProductos = document.getElementById('listaProductos')
const carro = document.getElementById ('carro')
const total = document.getElementById('total')

console.log(listaProductos)
console.log(carro)
console.log(total)

let totalcompra = 0;

productos.forEach((productos) =>{
    const item = document.createElement('div');
    item.classList.add('producto')

    item.innerHTML= //como se hace esa comilla que haces vos? donde explican eso??
    <h3> $ {productos.nombre} </h3>
    <p>Precio: $${productos.precio}</p>
    <button class= "agregar-carrito">Agregar al carrito</button>

    const botonAgregar = item.querySelector(".agregar-carrito")
    botonAgregar.addEventListener("click", () => agregarCarrito(productos))
    
listaProductos.appendChild(item)

});




function agregarCarrito(productos) {

const itemcarrito = document.createElement("li")
itemcarrito.textContent = ${productos.nombre} y ${productos.precio}
carrito.appendChild(itemcarrito)

totalcompra += productos.precio
text.textContent= total: $${totalcompra}


}
