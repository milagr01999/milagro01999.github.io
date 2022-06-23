const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imegen')
const contenedorLight = document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.agetAttribute('src'))
        
    })
})


const aparecerImagen =( imagen)=>{
    imagenesLight.src =imagen;
    contenedorLight.classList.toggle('show')
}