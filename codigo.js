const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['Anterior', 'Siguiente'];
const galleryItems = document.querySelectorAll('.gallery-item'); // Corrección del selector

class Carrusel {
    constructor(container, items, controls) {
        this.carruselContainer = container;
        this.carruselControls = controls;
        this.carruselArray = [...items]; // Convertir NodeList a Array
    }

    updateGallery() {
        this.carruselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
        });

        this.carruselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
         if (direction.classList.contains('gallery-controls-Anterior')) { 
        this.carruselArray.unshift(this.carruselArray.pop()); // Mueve el último al inicio
        } else {
            this.carruselArray.push(this.carruselArray.shift()); // Mueve el primero al final
        }   
        this.updateGallery();
    }

    setControls() {
        this.carruselControls.forEach(control => {
            const button = document.createElement('button'); // Crear botón
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            galleryControlsContainer.appendChild(button); // Agregar al contenedor
        });
    }

    useControls() {
        const triggers = galleryControlsContainer.querySelectorAll('button'); // Solo selecciona botones
        triggers.forEach(control => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                console.log("Botón presionado:", control.className);
                this.setCurrentState(control);
            });
        });
    }
}

// Instancia y ejecución del carrusel
const carrusel_nuevo = new Carrusel(galleryContainer, galleryItems, galleryControls);
carrusel_nuevo.setControls();
carrusel_nuevo.useControls();










fetch('https://potterapi-fedeperin.vercel.app/es/houses')
.then(res => res.json())
.then(res => {
    console.log(res)
})

const characters='https://potterapi-fedeperin.vercel.app/es/characters'
fetch(characters)
.then(res => res.json())
.then(res => {
    console.log(res)

    // Crear los personajes
    res.forEach(personaje => {
        // Crear el contenedor principal de la tarjeta
        const card = document.createElement("div");
        card.classList.add("card");

        // Crear la imagen del personaje
        const img = document.createElement('img');
        img.src = personaje.image; // Asegúrate que 'image' esté presente en los datos
        img.alt = "personaje";

        
        const info = document.createElement('div');
        info.classList.add('infoc');

        // Crear y añadir nombre, nacimiento y casa
        const name = document.createElement('h5');
        name.textContent = personaje.fullName || 'Nombre no disponible'; 

        const birth = document.createElement('h5');
        birth.textContent = personaje.birthdate || 'Fecha de nacimiento no disponible'; 

        const houses = document.createElement('h5');
        houses.textContent = personaje.hogwartsHouse || 'Casa no disponible'; 
        info.appendChild(name);
        info.appendChild(birth);
        info.appendChild(houses);
        card.appendChild(img);
        card.appendChild(info);

        
        document.getElementById('cards').appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error al cargar los personajes:', error);
    })


fetch('https://potterapi-fedeperin.vercel.app/es/books')
.then(res => res.json())
.then(res => {
    console.log(res)
})
fetch('https://potterapi-fedeperin.vercel.app/es/spells')
.then(res => res.json())
.then(res => {
    console.log(res)
})






