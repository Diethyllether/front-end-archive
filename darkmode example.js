addEventListener("DOMContentLoaded", () => {
    (sessionStorage.getItem("tema") == "escuro") ? trocarTema("claro") : trocarTema("escuro");
})

function trocarTema() {
    const button = document.getElementById("switch");
    (localStorage.getItem("tema") == "claro")
        ? (document.documentElement.classList.remove("claro"), localStorage.setItem("tema", "escuro")) : (document.documentElement.classList.add("claro"), localStorage.setItem("tema", "claro"));
}
