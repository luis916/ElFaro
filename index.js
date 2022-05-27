//fecha con segundos en tiempo real.
let fecha_full = document.getElementById('fecha_full');
let hora = document.getElementById('hora');
let minuto = document.getElementById('minuto');
let segundo = document.getElementById('segundo');
let fecha = new Date();
//Contador de articulos
let contador_negocios_js = 3;
let contador_deportes_js = 3;
let contador_negocios = document.querySelector('.contador_negocios');
let contador_deportes = document.querySelector('.contador_deportes');
fecha_full.textContent = fecha.toDateString();
hora.textContent = fecha.getHours()+':';
minuto.textContent = fecha.getMinutes()+':';
setInterval(() => {
    let x = new Date();
    segundo.textContent = x.getSeconds();
}, 1000);
//------------------------------------------------------
//categorias.
let negocios = document.getElementById('negocios');
let deportes = document.getElementById('deportes');

//Agregar articulos dinamicamente.
let agregar_articulo = document.getElementById('agregar_articulo');
let crear_articulo = document.getElementById('crear_articulo');
let agregar_titulo = document.getElementById('agregar_titulo');
let agregar_descripcion = document.getElementById('agregar_descripcion');
let contenedor_agregar_articulo = document.querySelector('.contenedor_agregar_articulo');
let seleccionar_categoria = document.getElementById('seleccionar_categoria');
function creacion_articulos(){
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let textoh2 = document.createTextNode(agregar_titulo.value);
    let textop = document.createTextNode(agregar_descripcion.value);
    p.style.fontWeight = 'normal';
    h2.appendChild(textoh2);
    p.appendChild(textop);
    div.appendChild(h2);
    div.appendChild(p);
    div.classList.add('destacar_articulo');
    if(seleccionar_categoria.value == 'deportes'){
    deportes.appendChild(div);
    contador_deportes_js++;
    contador_deportes.innerHTML = `(${contador_deportes_js})`;
    }
    else
    if(seleccionar_categoria.value == 'negocios'){negocios.appendChild(div);
    contador_negocios_js++;
    contador_negocios.innerHTML = `(${contador_negocios_js})`;
    }
}
agregar_articulo.addEventListener('click',()=>{
    contenedor_agregar_articulo.style.display = 'block';
});
//creacion articulo.
crear_articulo.addEventListener('click',()=>{
creacion_articulos();
});