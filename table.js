function makeEditable(e) {
  var cell = e.target;
  if (cell.dataset.editing !== 'true') {
    cell.dataset.editing = true;
    var text = cell.innerHTML;
    cell.innerHTML = '';
    var input = document.createElement('input');
    input.addEventListener('blur', makeNonEditable);
    input.type = "text";
    input.value = text;
    cell.appendChild(input);
  }
}

function makeNonEditable(e) {
  var input = e.target;
  var text = input.value;
  var cell = input.parentElement;
  if (cell.dataset.editing === 'true') {
    cell.dataset.editing = false;
    cell.innerHTML = text;
  }
}

var rows = 20;
var cols = 4;

var table = document.createElement('table');
table.classList.add('table');

var thead = document.createElement('thead');
var headRow = document.createElement('tr');
var columnNames = ["Premise", "no.", "______statement_________", "reference"];



for (var i = 0; i < 4; i++) {
  var th = document.createElement('th');
  th.appendChild(document.createTextNode(columnNames[i]));
  headRow.appendChild(th);
}

thead.appendChild(headRow);

var tbody = document.createElement('tbody');

for (var i = 0; i < rows; i++) {
  var tr = document.createElement('tr');

  for (var j = 0; j < cols; j++) {
    var td = document.createElement('td');

    if (j == 0) {
      td.addEventListener('mousedown', makeEditable); // Add mousedown listener.
      td.innerHTML = "[" + (1) + "]";               // Add a value?
      tr.appendChild(td);
      continue;
    }
    
    if (j == 2) {
      td.addEventListener('mousedown', makeEditable); // Add mousedown listener.
      td.innerHTML = ("");               // Add a value?
      tr.appendChild(td);
      continue;
    }

    if (j == 3) {
      td.addEventListener('mousedown', makeEditable); // Add mousedown listener.
      td.innerHTML = ("");               // Add a value?
      tr.appendChild(td);
      continue;
    }
    
    td.appendChild(document.createTextNode(i+1));
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
