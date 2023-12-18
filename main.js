function adicionarContato() {
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;

  var table = document.getElementById('agenda');
  var row = table.insertRow(-1); // Insere uma linha no final da tabela
  var cell1 = row.insertCell(0); // Insere uma célula na coluna de nome
  var cell2 = row.insertCell(1); // Insere uma célula na coluna de telefone
  cell1.innerHTML = nome; 
  cell2.innerHTML = telefone; 
}