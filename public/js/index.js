let HOST = 'http://localhost:3000';

async function obtenerProductos() {
    const URL_PRODUCTOS = `${HOST}/api/v1/products`;
    const response = await fetch(URL_PRODUCTOS);
    
    const productos = await response.json();

    return productos;
}

async function cargarTabla(){
    const tablaProductos = document.getElementsByClassName('tablaProductos');
    const bodyTablaProductos =  tablaProductos[0].querySelector('tbody');
    const productos = await obtenerProductos();

    productos.forEach(product => {
        const fila = `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.image}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.createdAt}</td>
            <td>${product.updateAt}</td>
            <td>${product.categoryId}</td>
        </tr>`
        bodyTablaProductos.innerHTML += fila;
    });
}

cargarTabla();