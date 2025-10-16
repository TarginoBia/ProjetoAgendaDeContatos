document.getElementById("adicionar").addEventListener("click", function() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const observacao = document.getElementById("observacao").value;

  const tipoMoradia = document.querySelector('input[name="moradia"]:checked').value;

  const linguagensSelecionadas = [];
  document.querySelectorAll('.linguagens input:checked').forEach(chk => {
    linguagensSelecionadas.push(chk.value);
  });

  if (!nome || !telefone) {
    alert("Por favor, preencha pelo menos o nome e o telefone.");
    return;
  }

  const tabela = document.querySelector("#tabela-contatos tbody");
  const novaLinha = tabela.insertRow();

  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${endereco}</td>
    <td>${tipoMoradia}</td>
    <td>${telefone}</td>
    <td>${linguagensSelecionadas.join(", ")}</td>
    <td>${observacao}</td>
    <td><button class="excluir-btn">Excluir</button></td>
  `;

  novaLinha.querySelector(".excluir-btn").addEventListener("click", function() {
    tabela.deleteRow(novaLinha.rowIndex - 1);
  });

  document.querySelectorAll("input[type='text'], textarea").forEach(el => el.value = "");
  document.querySelectorAll(".linguagens input").forEach(chk => chk.checked = false);
});
