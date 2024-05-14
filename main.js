$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const enderecoTarefaNova = $("#endereco-terefa-nova").val();

    const novaTarefa = $("<li></li>").appendTo("ul");

    $("<div class='texto-tarefa'></div>")
      .append(
        `<a onclick='concluirTeste()' id="teste">${enderecoTarefaNova}</a>`
      )

      .appendTo(novaTarefa);

    function concluirTeste() {
      let adicionar = document.getElementById("teste");
      adicionar.classList.add("seletor");
    }

    $("#endereco-terefa-nova").val("");
  });
});
