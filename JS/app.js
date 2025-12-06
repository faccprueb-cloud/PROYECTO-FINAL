let carrito = [];
let historialCitas = []; 
let historialFichas = [];

function agregarAlCarrito(nombreProducto, precioProducto) {
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto
    };

    carrito.push(producto);
    actualizarTotal();
    alert("✅ Agregaste: " + nombreProducto);
}

function actualizarTotal() {
    let total = 0;
    for(let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio;
    }
    document.getElementById("totalDinero").innerText = total;
}

function verCarrito() {
    if(carrito.length === 0) {
        alert("El carrito está vacío 🛒");
    } else {
        let lista = "--- TUS PRODUCTOS ---\n";
        for(let i = 0; i < carrito.length; i++) {
            lista += "- " + carrito[i].nombre + " (" + carrito[i].precio + " Bs)\n";
        }
        alert(lista);
    }
}

function borrarCarrito() {
    carrito = [];
    actualizarTotal();
}
function pedirWhatsapp() {
    if(carrito.length === 0) {
        alert("Primero agrega productos al carrito");
        return;
    }

    let mensaje = "Hola Spa, quisiera hacer el siguiente pedido:%0A";
    let total = 0;

    for(let i = 0; i < carrito.length; i++) {
        mensaje += "- " + carrito[i].nombre + " (" + carrito[i].precio + " Bs)%0A";
        total += carrito[i].precio;
    }

    mensaje += "%0A*Total a Pagar: " + total + " Bs*";

    window.open("https://wa.me/59100000000?text=" + mensaje, "_blank");
}
function guardarCita() {
    let cliente = document.getElementById("nombreCliente").value;
    let groomer = document.getElementById("selectGroomer").value;
    
    if(cliente === "") {
        alert("Por favor escribe tu nombre");
        return;
    }

    let nuevaCita = {
        cliente: cliente,
        groomer: groomer,
        fecha: new Date().toLocaleDateString()
    };

    historialCitas.push(nuevaCita);
    console.log("Citas:", historialCitas);

    alert("📅 ¡Cita Confirmada!\nCliente: " + cliente + "\nAtiende: " + groomer);
    
    document.getElementById("nombreCliente").value = "";
}

function guardarFicha() {
    let nombreMascota = document.getElementById("fichaMascota").value;
    let obs = document.getElementById("fichaObs").value;

    if(nombreMascota === "") {
        alert("⚠️ Falta el nombre de la mascota");
        return;
    }

    let nudos = document.getElementById("chkNudos").checked;
    let pulgas = document.getElementById("chkPulgas").checked;
    let ficha = {
        mascota: nombreMascota,
        estado: { conNudos: nudos, conPulgas: pulgas },
        observaciones: obs,
        hora: new Date().toLocaleTimeString()
    };

    historialFichas.push(ficha);
    
    console.log("Fichas Guardadas:", historialFichas);
    alert("💾 Ficha guardada exitosamente en el historial del día.");

    document.getElementById("fichaMascota").value = "";
    document.getElementById("fichaObs").value = "";
    document.getElementById("chkNudos").checked = false;
    document.getElementById("chkPulgas").checked = false;
}

function verReporte() {
    let totalVentas = 0;
    for(let i = 0; i < carrito.length; i++) {
        totalVentas += carrito[i].precio;
    }

    let reporte = "📊 REPORTE DIARIO DEL SISTEMA\n";
    reporte += "----------------------------\n";
    reporte += "Citas Agendadas: " + historialCitas.length + "\n";
    reporte += "Fichas de Grooming: " + historialFichas.length + "\n";
    reporte += "Ventas en Tienda: " + totalVentas + " Bs\n";
    
    alert(reporte);
}
