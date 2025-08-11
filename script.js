function goToForm() {
    window.location.href = "form.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("studentForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const subject = document.getElementById("subject").value;
            window.location.href = `subject.html?subject=${subject}`;
        });
    }
});
