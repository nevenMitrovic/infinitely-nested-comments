const mainInput = document.getElementById("mainInput");
const commentButton = document.getElementById("comment");
const commentsContainer = document.getElementById("comments");

commentButton.addEventListener("click", addComment);

function addComment() {
  if (mainInput.value) {
    let id;
    let allComments = document.querySelectorAll(".replyComment");
    if (!allComments) id = 0;
    id = allComments.length;

    let container = `
            <div class="replyComment" data-id=${id}>
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
    replyButtons.forEach((button) => {
      button.addEventListener("click", addReplyInput);
    });
    editButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let inputValue = event.target.parentElement.parentElement.previousElementSibling.textContent;
        event.target.parentElement.parentElement.innerHTML += `
          <div class="editCommentAdditionalElements">
            <input type="text" class="replyInput" value=${JSON.stringify(inputValue)} />
            <button class="save">Save</button>
            <button class="cancel">Cancel</button>
          </div>
        `;
      });
    });
  }
}
function addReplyInput(event) {
  event.target.parentElement.parentElement.innerHTML += `
    <div class="replyCommentAdditionalElements">
      <input type="text" class="replyInput" placeholder="Reply to this comment" />
      <button class="replyToComment">Reply</button>
      <button class="cancel">Cancel</button>
    </div>
    `;
}
