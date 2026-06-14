document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menú Hamburguesa para Móviles
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // 2. Lógica de la Herramienta "Clima x Outfit"
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const outfitResult = document.getElementById('outfitResult');

    // Base de datos simulada de recomendaciones (Contexto 2026)
    const outfitDatabase = {
        calido: {
            titulo: "Outfit para Clima Cálido / Tropical",
            descripcion: "Opta por telas transpirables como el lino o el algodón orgánico. Colores claros (blanco, beige, azul atlántico claro) para reflejar el sol. No olvides gafas de sol y un sombrero de paja como accesorio statement.",
            icono: "☀️"
        },
        frio: {
            titulo: "Outfit para Clima Frío",
            descripcion: "La clave está en las capas (layering). Usa una base térmica, un suéter de lana o cashmere, y un abrigo largo estructurado. Botas de cuero y una bufanda en tonos neutros o gris plateado completarán el look con elegancia.",
            icono: "❄️"
        },
        templado: {
            titulo: "Outfit para Clima Templado",
            descripcion: "Un clima perfecto para la chaqueta de denim o un blazer ligero sobre una camiseta básica. Pantalones de corte recto y zapatillas blancas minimalistas o mocasines. Versatilidad y estilo urbano.",
            icono: "⛅"
        },
        lluvia: {
            titulo: "Outfit para Día de Lluvia",
            descripcion: "Funcionalidad sin perder el estilo. Un trench coat impermeable en color beige o azul atlántico, botas de agua (wellingtons) modernas y un paraguas transparente. Evita telas que se arruguen con la humedad.",
            icono: "🌧️"
        }
    };

    searchBtn.addEventListener('click', () => {
        const input = cityInput.value.toLowerCase().trim();
        
        if (input === "") {
            alert("Por favor, ingresa una ciudad o condición climática.");
            return;
        }

        let recomendacion = outfitDatabase.templado; // Default

        // Lógica simple de palabras clave
        if (input.includes("calor") || input.includes("sol") || input.includes("caracas") || input.includes("verano")) {
            recomendacion = outfitDatabase.calido;
        } else if (input.includes("frio") || input.includes("nieve") || input.includes("invierno") || input.includes("bariloche")) {
            recomendacion = outfitDatabase.frio;
        } else if (input.includes("lluvia") || input.includes("lluvioso") || input.includes("tormenta")) {
            recomendacion = outfitDatabase.lluvia;
        }

        // Mostrar resultado con animación
        outfitResult.classList.remove('hidden');
        outfitResult.innerHTML = `
            <h4>${recomendacion.icono} ${recomendacion.titulo}</h4>
            <p>${recomendacion.descripcion}</p>
            <br>
            <small><em>💡 Tip de Moda Nexus: Recuerda que la actitud es el mejor accesorio.</em></small>
        `;
    });

    // Permitir buscar presionando "Enter"
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // 3. Smooth Scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            mainNav.classList.remove('active'); // Cerrar menú móvil al hacer click
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
