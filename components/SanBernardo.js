function AlSol() {
  // Property data remains the same
  const property = {
    id: 1,
    title: "Casas Modernas en Urbanización Residencial",
    price: "$204,900",
    location: "Vía Samborondón, Ciudad Celeste – Sector Batán",
    description:
      "Vive en una urbanización privada con casas de diseño contemporáneo, amplios espacios y acceso a exclusivas amenidades. Seguridad 24/7, club social y financiamiento flexible. 4 Modelos disponibles: 3 dormitorios - 135m² desde $204.900,00 | 3 dormitorios - 154m² desde $206.900,00 | 4 dormitorios - 174m² desde 224.000 | 3 dormitorios - 186m² desde 234.900. Todos los modelos incluyen 2 Parqueos. Reserva con solo $500 y personaliza tu plan de pago",
    features: [
      "3 y 4 habitaciones disponibles",
      "3 y 4 baños",
      "2 parqueos",
      "1 y 2 plantas",
      "Desde 135 m²",
      "Estacionamiento privado",
      "Piscina y jacuzzi",
      "Gimnasio equipado",
      "Guardianía 24/7",
      "Áreas verdes y juegos infantiles"
    ],
    images: ["images/casas-modernas-proyecto-residencial-al-sol.jpg", "images/casas-modernas-modelo-3-urbanizacion-residencial.jpg", "images/casas-modernas-modelo-urbanizacion-residencial.jpg", "images/casas-modernas-urbanizacion-residencial.jpg"],
    agent: {
      name: "Janneth Aguirre",
      phone: "+593 98 716 7782",
      email: "janneth@jannethaguirre.com",
    },
    status: "Pre Venta",
    type: "Casas",
  }

  const template = `
    <main class="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div class="container mx-auto px-4">
        <nav class="flex items-center space-x-2 text-sm mb-8">
          <a href="index.html" class="text-gray-600 hover:text-primary transition-colors duration-300">Inicio</a>
          <span class="text-gray-400">/</span>
          <a href="property-listing.html" class="text-gray-600 hover:text-primary transition-colors duration-300">Propiedades</a>
          <span class="text-gray-400">/</span>
          <span class="text-primary">${property.title}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div class="relative">
                <div class="aspect-w-16 aspect-h-9">
                  <img src="${property.images[0]}" 
                       alt="${property.title}" 
                       id="mainImage"
                       class="w-full h-full object-cover cursor-pointer"
                       onclick="openImageModal(this.src)">
                </div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                    ${property.status}
                  </span>
                  <span class="bg-white/90 text-primary px-3 py-1 rounded-full text-sm">
                    ${property.type}
                  </span>
                </div>
              </div>

              <div class="p-6">
                <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h1 class="text-2xl md:text-3xl font-bold mb-2">${property.title}</h1>
                    <p class="flex items-center text-gray-600">
                      <i class="fas fa-map-marker-alt text-primary mr-2"></i>
                      ${property.location}
                    </p>
                  </div>
                  <div class="text-right">
                    <div class="text-3xl font-bold text-primary mb-2">${property.price}</div>
                    <div class="text-sm text-gray-600">Precio de Venta</div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-100">
                  <div class="text-center">
                    <i class="fas fa-bed text-primary text-2xl mb-2"></i>
                    <p class="text-sm text-gray-600">3 Dormitorios</p>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-bath text-primary text-2xl mb-2"></i>
                    <p class="text-sm text-gray-600">3 Baños</p>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-vector-square text-primary text-2xl mb-2"></i>
                    <p class="text-sm text-gray-600">135 m²</p>
                  </div>
                </div>

                <div class="mt-6">
                  <h2 class="text-xl font-bold mb-4">Descripción</h2>
                  <p class="text-gray-600 leading-relaxed mb-6">${property.description}</p>
                  
                  <h2 class="text-xl font-bold mb-4">Características</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${property.features
                      .map(
                        (feature) => `
                      <div class="flex items-center">
                        <i class="fas fa-check-circle text-primary mr-2"></i>
                        <span class="text-gray-600">${feature}</span>
                      </div>
                    `,
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-4">
              ${property.images
                .map(
                  (img, index) => `
                <div class="relative rounded-lg overflow-hidden cursor-pointer group" 
                     onclick="openImageModal('${img}')">
                  <img src="${img}" 
                       alt="Imagen ${index + 1}" 
                       class="w-full h-24 object-cover">
                  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
              <div class="p-6">
                <div class="flex items-center gap-4 mb-6">
                  <img src="images/premio-janneth.png" 
                       alt="${property.agent.name}" 
                       class="w-16 h-16 rounded-full object-cover">
                  <div>
                    <h3 class="font-bold text-lg">${property.agent.name}</h3>
                    <p class="text-gray-600 text-sm">14+ años de experiencia</p>
                  </div>
                </div>

                <div class="space-y-4 mb-6">
                  <div class="flex items-center gap-2 text-gray-600">
                    <i class="fas fa-award text-primary"></i>
                    <span>500+ propiedades vendidas</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600">
                    <i class="fas fa-phone text-primary"></i>
                    <span>${property.agent.phone}</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600">
                    <i class="fas fa-envelope text-primary"></i>
                    <span>${property.agent.email}</span>
                  </div>
                </div>

                <form id="contact-agent-form" class="space-y-4" data-property-title="${property.title}" data-property-price="${property.price}" data-property-location="${property.location}">
                  <input type="text" 
                         name="name"
                         placeholder="Nombre" 
                         class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                         required>
                  <input type="email" 
                         name="email"
                         placeholder="Email" 
                         class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                         required>
                  <input type="tel" 
                         name="phone"
                         placeholder="Teléfono" 
                         class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                         required>
                  <textarea name="message"
                          placeholder="Mensaje" 
                          rows="4" 
                          class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                          required></textarea>
                  <button type="submit" 
                          class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <i class="fas fa-paper-plane"></i>
                    Enviar Mensaje
                  </button>
                </form>

                <div class="flex justify-center space-x-4 mt-6">
                  <button onclick="window.open('https://wa.me/593987167782', '_blank')"
                          class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <i class="fab fa-whatsapp"></i>
                    WhatsApp
                  </button>
                  <button id="shareButton"
                          class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <i class="fas fa-share-alt"></i>
                    Compartir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal para ver imágenes en tamaño completo -->
      <div id="imageModal" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden">
        <div class="max-w-4xl w-full mx-4">
          <img id="modalImage" src="/placeholder.svg" alt="Imagen en tamaño completo" class="w-full h-auto rounded-lg">
          <button onclick="closeImageModal()" 
                  class="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </main>
  `

  return template
}

// Helper functions
function openImageModal(src) {
  const modal = document.getElementById("imageModal")
  const modalImage = document.getElementById("modalImage")
  if (modal && modalImage) {
    modalImage.src = src
    modal.classList.remove("hidden")
  }
}

function closeImageModal() {
  const modal = document.getElementById("imageModal")
  if (modal) {
    modal.classList.add("hidden")
  }
}

function fallbackShare() {
  const tempInput = document.createElement("input")
  tempInput.value = window.location.href
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand("copy")
  document.body.removeChild(tempInput)

  const toast = document.createElement("div")
  toast.className =
    "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  toast.textContent = "¡Enlace copiado al portapapeles!"
  document.body.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 3000)
}

// Initialize all functionality
function initializeAlSol() {
  console.log("Initializing property details...")

  // Form submission handler
  const form = document.getElementById("contact-agent-form")
  if (form) {
    console.log("Form found, attaching submit handler...")
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      console.log("Form submitted")

      const formData = new FormData(this)
      const propertyTitle = this.dataset.propertyTitle
      const propertyPrice = this.dataset.propertyPrice
      const propertyLocation = this.dataset.propertyLocation

      const message = `*Consulta sobre propiedad*%0A%0A*Propiedad:* ${propertyTitle}%0A*Precio:* ${propertyPrice}%0A*Ubicación:* ${propertyLocation}%0A%0A*Datos del interesado:*%0A*Nombre:* ${formData.get("name")}%0A*Email:* ${formData.get("email")}%0A*Teléfono:* ${formData.get("phone")}%0A*Mensaje:* ${formData.get("message")}`

      window.open(`https://wa.me/593987167782?text=${message}`, "_blank")
      form.reset()
    })
  }

  // Share button handler
  const shareButton = document.getElementById("shareButton")
  if (shareButton) {
    console.log("Share button found, attaching click handler...")
    shareButton.addEventListener("click", () => {
      console.log("Share button clicked")

      if (navigator.share) {
        navigator
          .share({
            title: document.title,
            text: document.querySelector("h1").textContent,
            url: window.location.href,
          })
          .then(() => console.log("Contenido compartido exitosamente"))
          .catch((error) => {
            console.log("Error compartiendo:", error)
            fallbackShare()
          })
      } else {
        fallbackShare()
      }
    })
  }

  // Image modal handlers
  const images = document.querySelectorAll('[onclick*="openImageModal"]')
  images.forEach((img) => {
    img.addEventListener("click", function (e) {
      e.preventDefault()
      const src = this.src || this.querySelector("img").src
      openImageModal(src)
    })
  })

  // Close modal button
  const closeModalBtn = document.querySelector('[onclick*="closeImageModal"]')
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", (e) => {
      e.preventDefault()
      closeImageModal()
    })
  }
}

// Export functions to window object
window.PropertyDetails = PropertyDetails
window.initializePropertyDetails = initializePropertyDetails
window.openImageModal = openImageModal
window.closeImageModal = closeImageModal

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, checking for property details...")
  if (document.getElementById("contact-agent-form")) {
    initializeAlSol()
  }
})