const dialog = document.querySelector("dialog");
const button1 = document.getElementById("dialog-button1");
const button2 = document.getElementById("dialog-button2");
const dialogOpener = document.getElementById("footer-third-rules");
const dialogBody = document.getElementById("dialog-body");

const closeDialog = () => {
  dialog.close();
};

const openDialog = () => {
  dialog.showModal();
};

dialog.onclick = (event) => {
  if (dialogBody.contains(event.target)) return;
  closeDialog();
};

const closeModalButtonEventListener = () => {
  closeDialog();
};

dialogOpener.onclick = () => openDialog();

button1.onclick = closeModalButtonEventListener;
button2.onclick = closeModalButtonEventListener;
