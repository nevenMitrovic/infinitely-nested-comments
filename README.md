# Infinity Nested Comments

A simple vanilla javascript project that supports infinity nested comments, allowing users to add, edit, reply, and delete comments with ease. This project is implemented using plain HTML, CSS, and JavaScript, without any external libraries.

## Website

- https://infinitely-nested-comments.netlify.app

## Features

- **Add Comments**: Users can add new comments using the main input field.
- **Reply to Comments**: Users can reply to existing comments, creating a nested comment structure.
- **Edit Comments**: Users can edit any comment and save the changes.
- **Delete Comments**: Users can delete any comment.
- **Cancel Actions**: Users can cancel editing or replying actions.

## How It Works

1. **Adding Comments**:
   - Users can type a comment in the input field and click the "Comment" button.
   - The comment will be appended to the comment container.

2. **Replying to Comments**:
   - Each comment has a "Reply" button. Clicking this button adds a reply input field below the comment.
   - Users can type a reply and submit it, nesting it under the original comment.

3. **Editing Comments**:
   - Each comment has an "Edit" button. Clicking this button allows the user to edit the comment text.
   - Users can save or cancel their edits.

4. **Deleting Comments**:
   - Each comment has a "Delete" button. Clicking this button removes the comment (including any nested replies).

5. **Canceling Actions**:
   - Users can cancel edit or reply actions using the "Cancel" button.