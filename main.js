$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const enderecoTarefaNova = $("#inputAdiciona").val();

    const novaTarefa = $("<li></li>").appendTo("ul");

    let arrayLista = [];

    $("<li class='texto-tarefa'></li>")
      .append(`<a id="teste">${enderecoTarefaNova}</a>`)
      .appendTo(novaTarefa);

    $("#teste").click(function () {
      $(this).attr("class", "seletor");
    });

    $("#teste").dblclick(function () {
      $(this).attr("class", "seletor1");
    });
  });

  //  function addTarefa() {
  //  arrayLista.push(input);
  // }

  $("#inputAdiciona").val(" ");
});
