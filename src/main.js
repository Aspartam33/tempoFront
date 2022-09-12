
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenido_select=document.querySelector('#select .contenido-select');
const hidden_input=document.querySelector('#input_select');

document.querySelectorAll('#opciones > .opcion').forEach((opcion)=>{
    opcion.addEventListener('click',(e)=>{
        e.preventDefault();
        contenido_select.innerHTML=e.currentTarget.innerHTML;
        select.classList.toggle('active');
    opciones.classList.toggle('active');
    hidden_input.value=e.currentTarget.querySelector('.titulo').innerText;
    });
});

select.addEventListener('click',()=>{
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});
