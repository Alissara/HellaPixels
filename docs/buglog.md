### Bugs

**#1 Bug**
bind.this - don't forget to bind this



**#2 Bug**
nesting components - don't do if there's conditional logic involved



**#3 Bug**
index photo page keeps deleting its own photos after rendering

solution: needed to e.preventDefault on the delete buttons

**#4 Bug**
The Create Photo Modal would automatically close if I hit Save with
blank fields. The createPhoto errors would not render because the Modal
closed too soon.

Thought about how the modal would close at all. The modal would only
close if the this.state.modalOpen was false. I noticed I had reset the
State incorrectly in the uploadPhoto function. I wrote this.state instead
of this.setState.

**#5 Bug**
Cloudinary upload function was not calling the callback method.

Needed to bind.this
