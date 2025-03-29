function adicionarComentario() {
    const textarea = document.getElementById("comentario");
    const lista = document.getElementById("lista-comentarios");
    
    const novoComentario = document.createElement("li");
    novoComentario.textContent = textarea.value;
    novoComentario.style.padding = "10px";
    novoComentario.style.marginBottom = "10px";
    novoComentario.style.borderBottom = "1px solid #D88A7D";
    novoComentario.style.color = "#4E3629";

    lista.appendChild(novoComentario);
    
    textarea.value = "";
}