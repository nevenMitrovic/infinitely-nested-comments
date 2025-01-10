const mainInput = document.getElementById("mainInput");
const commentButton = document.getElementById("comment");
const commentsContainer = document.getElementById("comments");

commentButton.addEventListener("click", addComment);

function initializeListeners() {
  const replyButtons = document.querySelectorAll(".reply");
  const editButtons = document.querySelectorAll(".edit");
  const deleteButtons = document.querySelectorAll(".delete");

  replyButtons.forEach((button) => {
    button.removeEventListener("click", addReplyInput);
    button.addEventListener("click", addReplyInput);
  });
  editButtons.forEach((button) => {
    button.removeEventListener("click", handleEdit);
    button.addEventListener("click", handleEdit);
  });
  deleteButtons.forEach((button) => {
    button.removeEventListener("click", deleteReply);
    button.addEventListener("click", deleteReply);
  });
}

function addComment() {
  if (mainInput.value) {
    let container = `
            <div class="replyComment">
              <div class="textComment">${mainInput.value}</div>
              <div class="commentAdditionalElements">
                <div class="buttons">
                  <button class="reply">Reply</button>
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
                </div>
              </div>
            </div>
    `;
    commentsContainer.innerHTML += container;
    mainInput.value = "";

    const replyButtons = document.querySelectorAll(".reply");
    const editButtons = document.querySelectorAll(".edit");
    const deleteButtons = document.querySelectorAll(".delete");
    replyButtons.forEach((button) => {
      button.addEventListener("click", addReplyInput);
    });
    editButtons.forEach((button) => {
      button.addEventListener("click", handleEdit);
    });
    deleteButtons.forEach((button) => {
      button.addEventListener("click", deleteReply);
    });
    initializeListeners();
  }
}
function handleEdit(event) {
  let inputValue =
    event.target.parentElement.parentElement.previousElementSibling.textContent;
  event.target.parentElement.parentElement.innerHTML += `
    <div class="editCommentAdditionalElements">
      <input type="text" class="editInput" value=${JSON.stringify(
        inputValue
      )} />
      <button class="save">Save</button>
      <button class="cancel">Cancel</button>
    </div>
  `;
  const saveButton = document.querySelectorAll(".save");
  const cancelButton = document.querySelectorAll(".cancel");
  saveButton.forEach((button) => {
    button.addEventListener("click", saveEdit);
  });
  cancelButton.forEach((button) => {
    button.addEventListener("click", cancelEdit);
  });
}
function addReplyInput(event) {
  event.target.parentElement.parentElement.innerHTML += `
    <div class="replyCommentAdditionalElements">
      <input type="text" class="replyInput" placeholder="Reply to this comment" />
      <button class="replyToComment">Reply</button>
      <button class="cancel">Cancel</button>
    </div>
    `;
  const cancelButton = document.querySelectorAll(".cancel");
  cancelButton.forEach((button) => {
    button.addEventListener("click", cancelSubReply);
  });
}
function saveEdit(event) {
  const editInputValue = event.target.previousElementSibling.value;
  event.target.parentElement.parentElement.previousElementSibling.textContent =
    editInputValue;
  document.querySelector(".editCommentAdditionalElements").remove();
  initializeListeners();
}
function cancelEdit() {
  document.querySelector(".editCommentAdditionalElements").remove();
  initializeListeners();
}
function cancelSubReply() {
  document.querySelector(".replyCommentAdditionalElements").remove();
  initializeListeners();
}
function deleteReply(event) {
  event.target.parentElement.parentElement.parentElement.remove();
  initializeListeners();
}
