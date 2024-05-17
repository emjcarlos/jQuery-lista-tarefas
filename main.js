$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    let array = [];

    const enderecoTarefaNova = $("#inputAdiciona").val();

    const novaTarefa = $("<li></li>").appendTo("ul");

    $("<div class='texto-tarefa'></div>")
      .append(`<a id='teste'>${enderecoTarefaNova}</a>`)
      .appendTo(novaTarefa);

    $("#teste").click(function () {
      $("#teste").attr("class", "seletor");
    });

    $("#teste").dblclick(function () {
      $("#teste").attr("class", "seletor1");
    });

    function valorInput() {
      array.push(enderecoTarefaNova);
      console.log(valorInput());
    }

    $("#inputAdiciona").val("");
  });
});
