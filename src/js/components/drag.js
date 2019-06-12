function dragstart_handler(ev) {
  console.log('dragStart');
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData('text/plain', ev.target.id);
  ev.dataTransfer.dropEffect = 'move';
}

function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = 'move';
}

function drop_handler(ev, el) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData('text/plain');
  console.log(data);
  el.appendChild(document.getElementById(data));
}

// Bind fn to the window
// window.foo = foo;

window.dragstart_handler = dragstart_handler;
window.dragover_handler = dragover_handler;
window.drop_handler = drop_handler;
