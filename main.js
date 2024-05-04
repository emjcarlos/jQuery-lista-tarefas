let linhas = " ";

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoTarefaNova = $("#endereco-terefa-nova").val();

    let linha = "<tr>";
    linha += `<a>${enderecoTarefaNova.value}</a>`;
    linha += "</tr>";

    const listaTarefa = document.querySelector("a");
    listaTarefa.innerHTML = linhas;

    const novaTarefa = $("<li></li>");
    $(`
      <div class="texto-tarefa">
      <
      </div>
    `).appendTo(novaTarefa);
  });
});

/*let linha = "<tr>";
    linha += `<a>${enderecoTarefaNova.value}</a>`;
    linha += "</tr>";

    const listaTarefa = document.querySelector("a");
    listaTarefa.innerHTML = linhas;*/

/*function adicionaLinha() {
  const inputTarefaNova = document.getElementById("endereco-terefa-nova");
  alert(`atividade ${inputTarefaNova.value}`);
}*/
