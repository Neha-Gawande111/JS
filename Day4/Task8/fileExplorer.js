const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPath = process.cwd();

function displayMenu() {
  console.log(`Current Directory: ${currentPath}`);
  console.log('1. List Files and Folders');
  console.log('2. Change Directory');
  console.log('3. Create Folder');
  console.log('4. Delete Folder/File');
  console.log('5. Rename Folder/File');
  console.log('6. Quit');
}

function listFilesAndFolders() {
  fs.readdir(currentPath, (err, items) => {
    if (err) {
      console.error('Error:', err);
      return;
    }

    items.forEach(item => {
      const stats = fs.statSync(`${currentPath}/${item}`);
      if (stats.isDirectory()) {
        console.log(`[Folder] ${item}`);
      } else {
        console.log(`[File] ${item}`);
      }
    });

    showMenu();
  });
}

function changeDirectory() {
  rl.question('Enter the name of the directory to change to: ', (dirName) => {
    const newPath = `${currentPath}/${dirName}`;
    if (fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()) {
      currentPath = newPath;
      console.log(`Changed directory to: ${currentPath}`);
    } else {
      console.error(`Directory '${dirName}' does not exist.`);
    }
    showMenu();
  });
}

function createFolder() {
  rl.question('Enter the name of the new folder: ', (folderName) => {
    const newFolderPath = `${currentPath}/${folderName}`;
    if (!fs.existsSync(newFolderPath)) {
      fs.mkdirSync(newFolderPath);
      console.log(`Folder '${folderName}' created.`);
    } else {
      console.error(`Folder '${folderName}' already exists.`);
    }
    showMenu();
  });
}

function deleteFolderOrFile() {
  rl.question('Enter the name of the folder/file to delete: ', (itemName) => {
    const itemPath = `${currentPath}/${itemName}`;
    if (fs.existsSync(itemPath)) {
      if (fs.statSync(itemPath).isDirectory()) {
        fs.rmdirSync(itemPath, { recursive: true });
        console.log(`Folder '${itemName}' deleted.`);
      } else {
        fs.unlinkSync(itemPath);
        console.log(`File '${itemName}' deleted.`);
      }
    } else {
      console.error(`Item '${itemName}' does not exist.`);
    }
    showMenu();
  });
}

function renameFolderOrFile() {
  rl.question('Enter the current name of the folder/file: ', (currentName) => {
    rl.question('Enter the new name: ', (newName) => {
      const currentPath = `${currentPath}/${currentName}`;
      const newPath = `${currentPath}/${newName}`;
      if (fs.existsSync(currentPath)) {
        fs.renameSync(currentPath, newPath);
        console.log(`Renamed '${currentName}' to '${newName}'.`);
      } else {
        console.error(`Item '${currentName}' does not exist.`);
      }
      showMenu();
    });
  });
}

function showMenu() {
  displayMenu();
  rl.question('Select an option: ', (choice) => {
    switch (choice) {
      case '1':
        listFilesAndFolders();
        break;
      case '2':
        changeDirectory();
        break;
      case '3':
        createFolder();
        break;
      case '4':
        deleteFolderOrFile();
        break;
      case '5':
        renameFolderOrFile();
        break;
      case '6':
        rl.close();
        break;
      default:
        console.log('Invalid option. Please select a valid option.');
        showMenu();
    }
  });
}

console.log('Welcome to the Simple File Explorer');
showMenu();
