// Smooth Scrolling for Navigation Links
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// // Enlarge Artwork Image
// function enlargeImage(src) {
//     const modal = document.getElementById('modal');
//     const modalImage = document.getElementById('modal-image');
//     modalImage.src = src;
//     modal.style.display = 'flex';
// }

let scale = 1;
let isPanning = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;
const modalImage = document.getElementById("modal-image");

// Open Modal Function
function enlargeImage(src) {
    const modal = document.getElementById("modal");
    modalImage.src = src;
    modal.style.display = "flex";
    scale = 1; // Reset scale and position when opening
    translateX = 0;
    translateY = 0;
    modalImage.style.transform = `scale(${scale}) translate(0px, 0px)`;
}

function openPDFModal() {
    const pdfModal = document.getElementById('pdf-modal');
    if (pdfModal) {
        pdfModal.style.display = 'flex'; // Show the modal
    }
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Zoom In Function
function zoomIn() {
    scale = Math.min(scale + 0.1, 3); // Increase scale (max 3x)
    modalImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
}

// Zoom Out Function
function zoomOut() {
    scale = Math.max(scale - 0.1, 1); // Decrease scale (min 1x)
    if (scale === 1) {
        translateX = 0;
        translateY = 0; // Reset position when zoomed out completely
    }
    modalImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
}

// Panning Functionality
modalImage.addEventListener("mousedown", (e) => {
    if (scale > 1) { // Enable panning only when zoomed in
        isPanning = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        modalImage.style.cursor = "grabbing";
    }
});

modalImage.addEventListener("mousemove", (e) => {
    if (isPanning) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        modalImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
});

modalImage.addEventListener("mouseup", () => {
    isPanning = false;
    modalImage.style.cursor = "grab";
});

modalImage.addEventListener("mouseleave", () => {
    isPanning = false;
    modalImage.style.cursor = "grab";
});

// Enlarge PDF
document.getElementById("resume-btn").addEventListener("click", function () {
    document.getElementById("pdf-modal").style.display = "flex";
});

function closePDFModal() {
    document.getElementById("pdf-modal").style.display = "none";
}

// Scroll to Contact Section
document.getElementById("contact-btn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});