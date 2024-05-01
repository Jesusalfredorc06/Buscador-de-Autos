//selectores o variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//crear el listado de los years
const years = document.createElement('option');
const max = new Date().getFullYear();
//console.log(max);
const min = max - 10;

for(let i=max; i> min; i--){
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

//datos que necesitamos para la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

    //eventos
    document.addEventListener('DOMContentLoaded',() => {
        mostrarAutos(autos);
    });

    //even listener para el formulario

    marca.addEventListener('input', e => {
        datosBusqueda.marca = e.target.value;
        
        //console.log(datosBusqueda);
        filtrarAutos();
    })
    year.addEventListener('input',e =>{
        datosBusqueda.year = Number (e.target.value);
        
        //console.log(datosBusqueda);
        filtrarAutos();
    })
    minimo.addEventListener('input',e =>{
        datosBusqueda.minimo = Number (e.target.value);
        
        //console.log(datosBusqueda);
        filtrarAutos();
    })
    maximo.addEventListener('input',e =>{
        datosBusqueda.maximo = Number (e.target.value);
        
        //console.log(datosBusqueda);
        filtrarAutos();
    })
    puertas.addEventListener('input',e =>{
        datosBusqueda.puertas = Number (e.target.value);
        
        //console.log(datosBusqueda);
        filtrarAutos();
    })
    transmision.addEventListener('input',e =>{
        datosBusqueda.transmision = e.target.value;
        
        //console.log(datosBusqueda);
        filtrarAutos();
    })
    color.addEventListener('input',e =>{
        datosBusqueda.color = e.target.value;
        
        //console.log(datosBusqueda);
        filtrarAutos();
    })


    function mostrarAutos(autos){
        limpiarHTML();
        
        const contenedor = document.querySelector('#resultado');

        //construir el HTML de los autos
        autos.forEach(auto => {
            const autoHTML = document.createElement('p');
            autoHTML.innerHTML = `
                <p>${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} puertas - ${auto.color} - Transmision ${auto.transmision} - Precio ${auto.precio}</p>
            `;
            contenedor.appendChild(autoHTML);    
        });
        
    }

    function filtrarAutos(){
        const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
        //console.log(resultado);
        if(resultado.length){
            mostrarAutos(resultado);
        }else{
            noResultado();
        }
    }

function limpiarHTML() {
    //leer el elemento resultado

    const contenedor = document.querySelector('#resultado');

    //limpiar los resultados anteriores

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }

}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay resultados para su busqueda'));
    document.querySelector('#resultado').appendChild(noResultado);
}


//aplicar los filtros
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}
function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}