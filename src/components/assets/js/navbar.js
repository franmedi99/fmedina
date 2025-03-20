window.addEventListener('load', () => {
    const enlaces = document.querySelectorAll('#categorias a');
    const rutaActual = window.location.pathname;
	
    enlaces.forEach((enlace) => enlace.classList.remove('activo'));
    enlaces.forEach((enlace) => {
        const href = enlace.getAttribute('href');
        if (rutaActual === href) {
            enlace.classList.add('activo');
        }
    });

    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');
        });
    });
});