
// =========================
// AÑO AUTOMÁTICO DEL FOOTER
// =========================

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =========================
// MENÚ RESPONSIVE
// =========================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    // Cerrar el menú al seleccionar una sección
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menú");
            menuButton.textContent = "☰";
        });
    });
}
