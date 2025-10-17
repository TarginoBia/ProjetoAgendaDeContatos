const form = document.getElementById("form-contato");
const lista = document.getElementById("lista-contatos");

let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

function salvarContatos() {
  localStorage.setItem("contatos", JSON.stringify(contatos));
}

function exibirContatos() {
  lista.innerHTML = ""; 
  contatos.forEach((contato, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${contato.nome}</strong> - ${contato.telefone} - ${contato.email}
      <button onclick="removerContato(${index})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  const novoContato = { nome, telefone, email };
  contatos.push(novoContato);
  salvarContatos();
  exibirContatos();

  form.reset();
});

function removerContato(index) {
  contatos.splice(index, 1);
  salvarContatos();
  exibirContatos();
}

exibirContatos();
