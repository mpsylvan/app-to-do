function newItem() {
  let t = $("<li></li>"),
    e = $("#input").val(),
    n = document.createTextNode(e);
  (t.append(n), "" === e)
    ? alert("you must type something.")
    : $("#list").append(t),
    t.on("dblclick", function e() {
      t.toggleClass("strike");
    });
  let o = $("<crossoutbutton></crossoutbutton>");
  o.append(document.createTextNode("X")),
    t.append(o),
    o.on("click", function e() {
      t.addClass("delete");
    }),
    $("#modal-container").on("click", (t) => {
      t.target === $("#modal-container").get(0) && i();
    });
  let a = $('<button class ="editButton">Edit</button>');
  function i() {
    $("#modal-container").empty(), $("#modal-container").removeClass("visible");
  }
  function l() {
    let t = $("#edit").val();
    "" === t
      ? alert("You must enter text to edit a task. ")
      : ((n.textContent = t), i());
  }
  t.append(a),
    a.on("click", () => {
      var t;
      let e, o, a, d;
      (t = n),
        $("#modal-container").addClass("visible"),
        (e = $('<div class="modal"></div>')),
        (o = $("<input type=text class=edit id=edit>")),
        (a = $("<button class=edit-task>Submit Edit</button>")),
        a.on("click", l),
        (d = $("<crossoutbutton class=modal-cross></crossoutbutton>")),
        d.append(document.createTextNode("X")),
        d.on("click", i),
        e.append(o),
        e.append(`<h2> Edit: '${n.textContent}' </h2>`),
        e.append(a),
        e.append(d),
        $("#modal-container").append(e);
    }),
    $("#list").sortable();
}
$("#button").on("click", newItem);
