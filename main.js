$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const enderecoTarefaNova = $("#inputAdiciona").val();

    const novaTarefa = $("<li></li>").appendTo("ul");

    $("<div class='texto-tarefa'></div>")
      .append(`<a >${enderecoTarefaNova}</a>`)
      .appendTo(novaTarefa);

    $("#inputAdiciona").val("");

    $("ul").on("click", "li", function (e) {
      $(this).toggleClass("seletor");
    });
  });
});
