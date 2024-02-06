function generatePattern() {
    const character = document.getElementById("character").value;
    const size = document.getElementById("size").value;
    const [rows, columns] = size.split('x').map(Number);

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Invalid size format. Please use the format 'rowsxcolumns' (e.g., 5x5).");
        return;
    }

    let pattern = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            pattern += character;
        }
        pattern += '<br>';
    }

    document.getElementById("pattern").innerHTML = pattern;
}