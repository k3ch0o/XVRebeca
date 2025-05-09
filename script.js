 document.getElementById('confirmacionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('Nombre').value;
    const telefono = document.getElementById('Telefono').value;
    const acompanantes = document.getElementById('Asistentes').value;
     
   
    // Crear mensaje personalizado
    let mensaje = `¡Gracias ${nombre} por confirmar tu asistencia!\n`;
    mensaje += `Has reservado para ${parseInt(acompanantes) + 1} personas\n con el número de teléfono: ${telefono}\n`;
    mensaje += `Te esperamos el 7 de Junio en Salón "La Cueva"`;
   
    // Mostrar mensaje en un modal más elegante
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#f0faff'; // Azul pastel muy suave
    modalContent.style.padding = '30px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.maxWidth = '500px';
    modalContent.style.textAlign = 'center';
    modalContent.style.boxShadow = '0 5px 15px rgba(110,168,214,0.3)';
    
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = '¡Confirmación Exitosa!';
    modalTitle.style.color = '#6ea8d6'; // Azul pastel
    modalTitle.style.fontFamily = "'Dancing Script', cursive";
    modalTitle.style.marginTop = '0';
    
    const modalText = document.createElement('p');
    modalText.textContent = mensaje;
    modalText.style.lineHeight = '1.6';
    modalText.style.marginBottom = '25px';
    modalText.style.color = '#333';
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.style.background = '#6ea8d6'; // Azul pastel
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.padding = '10px 20px';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontFamily = "'Montserrat', sans-serif";
    closeButton.style.fontWeight = '600';
    closeButton.style.boxShadow = '0 4px 8px rgba(110,168,214,0.3)';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modal);
        document.getElementById('confirmacionForm').reset();
    });
    
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
   
   const whatsappButton = document.createElement('a');
const whatsappMensaje = encodeURIComponent(mensaje);
whatsappButton.href = `https://wa.me/${telefono}?text=${whatsappMensaje}`;
whatsappButton.target = '_blank';
whatsappButton.textContent = 'Enviar por WhatsApp';
whatsappButton.style.display = 'inline-block';
whatsappButton.style.marginRight = '15px';
whatsappButton.style.background = '#25D366'; // Color WhatsApp
whatsappButton.style.border = 'none';
whatsappButton.style.color = 'white';
whatsappButton.style.padding = '10px 20px';
whatsappButton.style.borderRadius = '5px';
whatsappButton.style.cursor = 'pointer';
whatsappButton.style.fontFamily = "'Montserrat', sans-serif";
whatsappButton.style.fontWeight = '600';
whatsappButton.style.textDecoration = 'none';
whatsappButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

modalContent.appendChild(whatsappButton);

   
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
});
