// ... (código anterior igual) ...

function crearDivCobertura() {
    if (divCobertura) return;
    
    divCobertura = document.createElement("div");
    // ... (configuración del div igual) ...

    const imagen = document.createElement("img");
    imagen.src = "TARJETA/FONDO.jpg"; // RUTA CORREGIDA
    
    // Crear el elemento de audio
    audioPlayer = document.createElement('audio');

    audioPlayer.addEventListener('error', function(e) {
        if (audioPlayer.error.code === 4) {
            audioPlayer.src = 'TARJETA/Ha-Ash-Cree-Y-Atrevete-Letra.mp3'; // RUTA CORREGIDA
            audioPlayer.load();
        }
    });
    
    audioPlayer.src = 'TARJETA/Ha-Ash-Cree-Y-Atrevete-Letra.mp3'; // RUTA CORREGIDA
    // ... (resto de configuración de audio igual) ...

    // Crear botón visible (imagen) de música
    const botonMusicaVisible = document.createElement("img");
    botonMusicaVisible.src = "TARJETA/BOTON-2.png"; // RUTA CORREGIDA
    
    // Crear botón visible (imagen) de fecha
    const fecha = document.createElement("img");
    fecha.src = "TARJETA/BOTON-0.png"; // RUTA CORREGIDA

    // Crear botón visible (imagen) de dollar
    const dollar = document.createElement("img");
    dollar.src = "TARJETA/dollar.png"; // RUTA CORREGIDA

    // Crear botón visible (imagen) de ubicación
    const ubicacion = document.createElement("img");
    ubicacion.src = "TARJETA/BOTON-1.png"; // RUTA CORREGIDA

    // ... (el resto del código de funciones.js permanece igual) ...
}

// ... (resto del código de funciones.js igual) ...