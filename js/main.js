$(function () {
  $("#slider").slider({
    range: "min",
    value: 75,
    min: 1,
    max: 100,
    slide: function (event, ui) {
      $("#amount").val(ui.value + "%");
    },
  });

  $("#amount").val($("#slider").slider("value") + "%");

  $("#number").selectmenu().selectmenu("menuWidget");
});
