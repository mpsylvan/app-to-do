function newItem() {
  // adding a new item to the ol.
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  let text = document.createTextNode(inputValue);
  li.append(text);

  // validating that the input field has text input.
  if (inputValue === "") {
    alert("you must type something.");
  } else {
    let list = $("#list");
    list.append(li);
  }
  // helper function to toggle strike through decoration class.
  function crossOut() {
    li.toggleClass("strike");
  }
  // adds event handler to all added li elements.
  li.on("dblclick", crossOut);

  // adding the delete button "X" and click handler.
  function deleteListItem() {
    li.addClass("delete");
  }

  let crossOutButton = $("<crossoutbutton></crossoutbutton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);
  // Modal functions and events.
  $("#modal-container").on("click", (e) => {
    if (e.target === $("#modal-container").get(0)) {
      closeModal();
    }
  });

  // creating an edit button and a click handler.
  let editButton = $(`<button class ="editButton">Edit</button>`);
  li.append(editButton);
  editButton.on("click", () => {
    showModal(text);
  });

  function showModal(li) {
    $("#modal-container").addClass("visible");
    let modal = $(`<div class="modal"></div>`);
    let input = $("<input type=text class=edit id=edit>");
    let editTask = $("<button class=edit-task>Submit Edit</button>");
    editTask.on("click", editListItem);
    let closeModalButton = $(
      "<crossoutbutton class=modal-cross></crossoutbutton>"
    );
    closeModalButton.append(document.createTextNode("X"));
    closeModalButton.on("click", closeModal);
    modal.append(input);
    modal.append(`<h2> Edit: '${text.textContent}' </h2>`);
    modal.append(editTask);
    modal.append(closeModalButton);
    $("#modal-container").append(modal);
  }
  // removes any/all modal divs and then removes the visible class.
  function closeModal() {
    $("#modal-container").empty();
    $("#modal-container").removeClass("visible");
  }
  // targets the modal input field value, if it has content, it changes the li text content and closes modal.
  function editListItem() {
    let inputValue = $("#edit").val();
    if (inputValue === "") {
      alert("You must enter text to edit a task. ");
    } else {
      text.textContent = inputValue;
      closeModal();
    }
  }

  $("#list").sortable();
}

$("#button").on("click", newItem);
