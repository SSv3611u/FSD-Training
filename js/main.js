document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});

const searchInput = document.getElementById("studentSearch");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    document.querySelectorAll("#studentTable tbody tr").forEach((row) => {
      row.style.display = row.textContent.toLowerCase().includes(value) ? "" : "none";
    });
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("contactAlert").classList.remove("d-none");
    contactForm.reset();
  });
}
