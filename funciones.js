const heart = document.getElementById("heart-icon");
let divCobertura = null;
let audioPlayer = null;
let usuarioHaInteractuado = false;
let botonOculto = null;
let botonFechaOculto = null;
let botonUbicacionOculto = null;
let botonDollarOculto = null;

heart.addEventListener("click", function () {
    const elementoSuperior = document.querySelector(".superior");
    elementoSuperior.classList.toggle("abrir-superior");
    
    usuarioHaInteractuado = true;
    
    setTimeout(() => {
        const d4 = document.querySelector(".d4");
        const d5 = document.querySelector(".d5");
        
        if (elementoSuperior.classList.contains("abrir-superior")) {
            d4.classList.add("subir");
            d5.classList.add("subir");
            setTimeout(crearDivCobertura, 500);
        } else {
            d4.classList.remove("subir");
            d5.classList.remove("subir");
        }
    }, 0);
    
    this.classList.toggle("bx-rotada");
});

function crearDivCobertura() {
    if (divCobertura) return;
    
    divCobertura = document.createElement("div");
    divCobertura.style.position = 'fixed';
    divCobertura.style.top = '0';
    divCobertura.style.left = '0';
    divCobertura.style.width = '100vw';
    divCobertura.style.height = '100vh';
    divCobertura.style.zIndex = '1000';
    divCobertura.style.backgroundColor = '#ffffff';
    divCobertura.style.overflow = 'auto';
    divCobertura.style.display = 'flex';
    divCobertura.style.justifyContent = 'center';
    divCobertura.style.alignItems = 'flex-start';

    const imagen = document.createElement("img");
    imagen.src = "../TARJETA/FONDO.jpg";
    imagen.id = 'imagen-carta';
    
    // Crear el elemento de audio
    audioPlayer = document.createElement('audio');

    audioPlayer.addEventListener('error', function(e) {
        // Si hay error, intentar con una fuente alternativa
        if (audioPlayer.error.code === 4) {
            audioPlayer.src = '/TARJETA/Ha Ash- Cree Y Atrevete Letra.mp3';
            audioPlayer.load();
        }
    });
    
    audioPlayer.addEventListener('canplay', function() {
        // Audio listo para reproducirse
    });
    
    audioPlayer.src = '/TARJETA/Ha Ash- Cree Y Atrevete Letra.mp3';
    audioPlayer.controls = false;
    audioPlayer.loop = true;
    audioPlayer.volume = 0.7;
    audioPlayer.preload = 'auto';
    audioPlayer.style.display = 'none';
    
    // Crear botón visible (imagen) de música
    const botonMusicaVisible = document.createElement("img");
    botonMusicaVisible.src = "/TARJETA/BOTON 2.png";
    botonMusicaVisible.id = 'boton-musica-visible';
    
    // Crear botón visible (imagen) de fecha
    const fecha = document.createElement("img");
    fecha.src = "/TARJETA/BOTON 0.png";
    fecha.id = 'imagen-fecha';

    // Crear botón visible (imagen) de dollar
    const dollar = document.createElement("img");
    dollar.src = "/TARJETA/dollar.png";
    dollar.id = 'imagen-dollar';

    // Crear botón visible (imagen) de ubicación
    const ubicacion = document.createElement("img");
    ubicacion.src = "/TARJETA/BOTON 1.png";
    ubicacion.id = 'imagen-ubicacion';
    
    // Crear botón transparente (área clickeable) de música
    botonOculto = document.createElement("div");
    botonOculto.id = 'boton-musica-oculto';
    
    // Crear botón transparente (área clickeable) de fecha
    botonFechaOculto = document.createElement("div");
    botonFechaOculto.id = 'boton-fecha-oculto';
    
    // Crear botón transparente (área clickeable) de ubicación
    botonUbicacionOculto = document.createElement("div");
    botonUbicacionOculto.id = 'boton-ubicacion-oculto';
    
    // Crear botón transparente (área clickeable) de dollar
    botonDollarOculto = document.createElement("div");
    botonDollarOculto.id = 'boton-dollar-oculto';
    
    // Estilos para la imagen principal
    imagen.style.display = 'block';
    imagen.style.margin = '0 auto';
    
    // Estilos para el botón visible de música
    botonMusicaVisible.style.width = '40px';
    botonMusicaVisible.style.height = '40px';
    botonMusicaVisible.style.position = 'absolute';
    botonMusicaVisible.style.top = '215px';
    botonMusicaVisible.style.right = '135px';
    botonMusicaVisible.style.margin = '0 auto';
    botonMusicaVisible.style.zIndex = '1001';
    botonMusicaVisible.style.cursor = 'pointer';
    
    // Estilos para el botón visible de fecha
    fecha.style.width = '70px';
    fecha.style.height = '20px';
    fecha.style.position = 'absolute';
    fecha.style.top = '800px';
    fecha.style.right = '215px';
    fecha.style.margin = '0 auto';
    fecha.style.zIndex = '1001';
    fecha.style.cursor = 'pointer';

    // Estilos para el botón visible de ubicación
    ubicacion.style.width = '70px';
    ubicacion.style.height = '68px';
    ubicacion.style.position = 'absolute';
    ubicacion.style.top = '971px';
    ubicacion.style.right = '135px';
    ubicacion.style.margin = '0 auto';
    ubicacion.style.zIndex = '1001';
    ubicacion.style.cursor = 'pointer';

    // Estilos para el botón visible de dollar
    dollar.style.width = '50px';
    dollar.style.height = '48px';
    dollar.style.position = 'absolute';
    dollar.style.top = '3010px';
    dollar.style.right = '156px';
    dollar.style.margin = '0 auto';
    dollar.style.zIndex = '1001';
    dollar.style.cursor = 'pointer';

    // CONTADOR COMPACTO (igual de pequeño que fecha)
    const container = document.createElement('div');
    container.className = 'countdown-compact';
    
    // Crear cajas para días, horas, minutos y segundos
    const timeBoxes = ['Días', 'Horas', 'Min', 'Seg'];
    const timeValues = {};
    
    timeBoxes.forEach((label) => {
        const box = document.createElement('div');
        box.className = 'time-box';
        
        const value = document.createElement('div');
        value.className = 'time-value';
        value.textContent = '00';
        timeValues[label.toLowerCase()] = value;
        
        const labelElement = document.createElement('div');
        labelElement.className = 'time-label';
        labelElement.textContent = label;
        
        box.appendChild(value);
        box.appendChild(labelElement);
        container.appendChild(box);
    });
    
    // Posicionamiento del contador (igual que fecha)
    container.style.position = 'absolute';
    container.style.top = '1329px'; // Misma posición vertical que fecha
    container.style.right = '95px'; // Ajustado para estar cerca de fecha
    container.style.zIndex = '1001';

    
    // Función para actualizar el contador
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        
        let targetDate = new Date(currentYear, 9, 4);
        
        if (now > targetDate) {
            targetDate = new Date(currentYear + 1, 9, 4);
        }
        
        const difference = targetDate - now;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        timeValues.días.textContent = days.toString().padStart(2, '0');
        timeValues.horas.textContent = hours.toString().padStart(2, '0');
        timeValues.min.textContent = minutes.toString().padStart(2, '0');
        timeValues.seg.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Estilos para el botón transparente de música
    botonOculto.style.position = 'absolute';
    botonOculto.style.top = '215px';
    botonOculto.style.right = '135px';
    botonOculto.style.width = '40px';
    botonOculto.style.height = '40px';
    botonOculto.style.cursor = 'pointer';
    botonOculto.style.zIndex = '1002';
    botonOculto.style.backgroundColor = 'transparent';
    botonOculto.style.border = 'none';
    
    // Estilos para el botón transparente de fecha
    botonFechaOculto.style.position = 'absolute';
    botonFechaOculto.style.top = '800px';
    botonFechaOculto.style.right = '215px';
    botonFechaOculto.style.width = '70px';
    botonFechaOculto.style.height = '20px';
    botonFechaOculto.style.cursor = 'pointer';
    botonFechaOculto.style.zIndex = '1002';
    botonFechaOculto.style.backgroundColor = 'transparent';
    botonFechaOculto.style.border = 'none';
    
    // Estilos para el botón transparente de ubicación
    botonUbicacionOculto.style.position = 'absolute';
    botonUbicacionOculto.style.top = '971px';
    botonUbicacionOculto.style.right = '135px';
    botonUbicacionOculto.style.width = '70px';
    botonUbicacionOculto.style.height = '68px';
    botonUbicacionOculto.style.cursor = 'pointer';
    botonUbicacionOculto.style.zIndex = '1002';
    botonUbicacionOculto.style.backgroundColor = 'transparent';
    botonUbicacionOculto.style.border = 'none';
    
    // Estilos para el botón transparente de dollar
    botonDollarOculto.style.position = 'absolute';
    botonDollarOculto.style.top = '3025px';
    botonDollarOculto.style.right = '156px';
    botonDollarOculto.style.width = '50px';
    botonDollarOculto.style.height = '48px';
    botonDollarOculto.style.cursor = 'pointer';
    botonDollarOculto.style.zIndex = '1002';
    botonDollarOculto.style.backgroundColor = 'transparent';
    botonDollarOculto.style.border = 'none';
    
    divCobertura.appendChild(imagen);
    divCobertura.appendChild(botonMusicaVisible);
    divCobertura.appendChild(fecha);
    divCobertura.appendChild(dollar);
    divCobertura.appendChild(container); // Contador compacto
    divCobertura.appendChild(ubicacion);
    divCobertura.appendChild(botonOculto);
    divCobertura.appendChild(botonFechaOculto);
    divCobertura.appendChild(botonUbicacionOculto);
    divCobertura.appendChild(botonDollarOculto);
    divCobertura.appendChild(audioPlayer);

    // Función para controlar la música
    function manejarMusica() {
        if (!audioPlayer) {
            return;
        }
        
        if (audioPlayer.error) {
            if (audioPlayer.error.code === 4) {
                audioPlayer.src = '/TARJETA/Ha Ash- Cree Y Atrevete Letra.mp3';
                audioPlayer.load();
                
                setTimeout(() => {
                    if (!audioPlayer.error) {
                        manejarMusica();
                    }
                }, 500);
            }
            return;
        }
        
        if (audioPlayer.paused) {
            const promise = audioPlayer.play();
            
            if (promise !== undefined) {
                promise.then(() => {
                    // Solo cambiar la opacidad, sin agregar borde
                    botonMusicaVisible.style.opacity = '0.7';
                }).catch(error => {
                    const reproducirEnProximoClic = () => {
                        audioPlayer.play().then(() => {
                            document.removeEventListener('click', reproducirEnProximoClic);
                        });
                    };
                    
                    document.addEventListener('click', reproducirEnProximoClic, { once: true });
                });
            }
        } else {
            audioPlayer.pause();
            botonMusicaVisible.style.opacity = '1';
        }
    }

    // Función para mostrar la imagen de celebración
    function mostrarCelebracion() {
        // Crear overlay para la imagen de celebración
        const overlayCelebracion = document.createElement("div");
        overlayCelebracion.style.position = 'fixed';
        overlayCelebracion.style.top = '0';
        overlayCelebracion.style.left = '0';
        overlayCelebracion.style.width = '100vw';
        overlayCelebracion.style.height = '100vh';
        overlayCelebracion.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlayCelebracion.style.zIndex = '2000';
        overlayCelebracion.style.display = 'flex';
        overlayCelebracion.style.justifyContent = 'center';
        overlayCelebracion.style.alignItems = 'center';
        
        // Crear imagen de celebración
        const imgCelebracion = document.createElement("img");
        imgCelebracion.src = "/TARJETA/CELEBRACION.jpg";
        imgCelebracion.style.maxWidth = '90%';
        imgCelebracion.style.maxHeight = '90%';
        imgCelebracion.style.borderRadius = '10px';
        imgCelebracion.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        
        // Botón para cerrar
        const btnCerrar = document.createElement("button");
        btnCerrar.textContent = "X";
        btnCerrar.style.position = 'absolute';
        btnCerrar.style.top = '20px';
        btnCerrar.style.right = '20px';
        btnCerrar.style.background = '#d64d7e';
        btnCerrar.style.color = 'white';
        btnCerrar.style.border = 'none';
        btnCerrar.style.borderRadius = '50%';
        btnCerrar.style.width = '40px';
        btnCerrar.style.height = '40px';
        btnCerrar.style.cursor = 'pointer';
        btnCerrar.style.zIndex = '2001';
        btnCerrar.addEventListener('click', function() {
            document.body.removeChild(overlayCelebracion);
        });
        
        overlayCelebracion.appendChild(imgCelebracion);
        overlayCelebracion.appendChild(btnCerrar);
        document.body.appendChild(overlayCelebracion);
    }

    // Función para mostrar la imagen de ticket
    function mostrarTicket() {
        // Crear overlay para la imagen de ticket
        const overlayTicket = document.createElement("div");
        overlayTicket.style.position = 'fixed';
        overlayTicket.style.top = '0';
        overlayTicket.style.left = '0';
        overlayTicket.style.width = '100vw';
        overlayTicket.style.height = '100vh';
        overlayTicket.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlayTicket.style.zIndex = '2000';
        overlayTicket.style.display = 'flex';
        overlayTicket.style.justifyContent = 'center';
        overlayTicket.style.alignItems = 'center';
        
        // Crear imagen de ticket
        const imgTicket = document.createElement("img");
        imgTicket.src = "../TARJETA/TICKET.jpg";
        imgTicket.style.maxWidth = '90%';
        imgTicket.style.maxHeight = '90%';
        imgTicket.style.borderRadius = '10px';
        imgTicket.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        
        // Botón para cerrar
        const btnCerrar = document.createElement("button");
        btnCerrar.textContent = "X";
        btnCerrar.style.position = 'absolute';
        btnCerrar.style.top = '20px';
        btnCerrar.style.right = '20px';
        btnCerrar.style.background = '#d64d7e';
        btnCerrar.style.color = 'white';
        btnCerrar.style.border = 'none';
        btnCerrar.style.borderRadius = '50%';
        btnCerrar.style.width = '40px';
        btnCerrar.style.height = '40px';
        btnCerrar.style.cursor = 'pointer';
        btnCerrar.style.zIndex = '2001';
        btnCerrar.addEventListener('click', function() {
            document.body.removeChild(overlayTicket);
        });
        
        overlayTicket.appendChild(imgTicket);
        overlayTicket.appendChild(btnCerrar);
        document.body.appendChild(overlayTicket);
    }

    // Función para redireccionar a Google Maps
    function redireccionarUbicacion() {
        window.open('https://goo.gl/maps/pUKCqottVPEKaviP9?g_st=aw', '_blank');
    }

    // Asignar el evento al botón transparente de música
    botonOculto.addEventListener('click', manejarMusica);

    // Asignar el evento al botón transparente de fecha
    botonFechaOculto.addEventListener('click', mostrarCelebracion);

    // Asignar el evento al botón transparente de ubicación
    botonUbicacionOculto.addEventListener('click', redireccionarUbicacion);

    // Asignar el evento al botón transparente de dollar
    botonDollarOculto.addEventListener('click', mostrarTicket);

    // Ajustar el tamaño de la imagen cuando cargue
    imagen.onload = function() {
        const anchoObjetivo = 420;
        const relacionAspecto = this.naturalHeight / this.naturalWidth;
        const nuevaAltura = anchoObjetivo * relacionAspecto;
        
        this.style.width = anchoObjetivo + 'px';
        this.style.height = nuevaAltura + 'px';
        this.style.maxWidth = '100%';
        this.style.height = 'auto';
        this.style.display = 'block';
    };

    divCobertura.style.opacity = '0';
    divCobertura.style.transition = 'opacity 0.5s ease';
    
    document.body.appendChild(divCobertura);
    
    setTimeout(() => {
        divCobertura.style.opacity = '1';
    }, 10);
}

// Permitir la reproducción automática después de la primera interacción
document.addEventListener('click', function() {
    usuarioHaInteractuado = true;
}, { once: true });