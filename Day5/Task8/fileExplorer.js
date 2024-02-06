const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentDirectory = process.cwd(); // Start in the current working directory

function listFilesAndFolders() {
  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    console.log('\nCurrent Directory: ' + currentDirectory);
    console.log('====================================');
    console.log('Folders:');
    files
      .filter(file => fs.statSync(path.join(currentDirectory, file)).isDirectory())
      .forEach(folder => console.log('   [Folder] ' + folder));
    
    console.log('Files:');
    files
      .filter(file => !fs.statSync(path.join(currentDirectory, file)).isDirectory())
      .forEach(file => console.log('   [File] ' + file));
    console.log('====================================\n');
    promptUser();
  });
}

function createFileOrFolder() {
  rl.question('Enter a name for the new file/folder: ', (name) => {
    const newItemPath = path.join(currentDirectory, name);
    fs.access(newItemPath, fs.constants.F_OK, (err) => {
      if (!err) {
        console.log(`File/Folder '${name}' already exists.`);
        promptUser();
      } else {
        fs.writeFileSync(newItemPath, ''); // Create an empty file or folder
        console.log(`File/Folder '${name}' created successfully.`);
        listFilesAndFolders();
      }
    });
  });
}

function deleteFileOrFolder() {
  rl.question('Enter the name of the file/folder to delete: ', (name) => {
    const itemPath = path.join(currentDirectory, name);
    fs.access(itemPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`File/Folder '${name}' does not exist.`);
        promptUser();
      } else {
        if (fs.statSync(itemPath).isDirectory()) {
          fs.rmdirSync(itemPath, { recursive: true });
        } else {
          fs.unlinkSync(itemPath);
        }
        console.log(`File/Folder '${name}' deleted successfully.`);
        listFilesAndFolders();
      }
    });
  });
}

function renameFileOrFolder() {
  rl.question('Enter the name of the file/folder to rename: ', (oldName) => {
    const oldPath = path.join(currentDirectory, oldName);
    fs.access(oldPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`File/Folder '${oldName}' does not exist.`);
        promptUser();
      } else {
        rl.question('Enter the new name: ', (newName) => {
          const newPath = path.join(currentDirectory, newName);
          fs.renameSync(oldPath, newPath);
          console.log(`File/Folder '${oldName}' renamed to '${newName}' successfully.`);
          listFilesAndFolders();
        });
      }
    });
  });
}

function navigateToFolder() {
  rl.question('Enter the name of the folder to navigate to (or ".." to go up): ', (folderName) => {
    if (folderName === '..') {
      const parentDir = path.resolve(currentDirectory, '..');
      currentDirectory = parentDir;
      listFilesAndFolders();
    } else {
      const folderPath = path.join(currentDirectory, folderName);
      fs.access(folderPath, fs.constants.F_OK, (err) => {
        if (err) {
          console.log(`Folder '${folderName}' does not exist.`);
          promptUser();
        } else if (!fs.statSync(folderPath).isDirectory()) {
          console.log(`'${folderName}' is not a directory.`);
          promptUser();
        } else {
          currentDirectory = folderPath;
          listFilesAndFolders();
        }
      });
    }
  });
}

function promptUser() {
  rl.question('Enter an action (list, create, delete, rename, navigate, exit): ', (action) => {
    switch (action) {
      case 'list':
        listFilesAndFolders();
        break;
      case 'create':
        createFileOrFolder();
        break;
      case 'delete':
        deleteFileOrFolder();
        break;
      case 'rename':
        renameFileOrFolder();
        break;
      case 'navigate':
        navigateToFolder();
        break;
      case 'exit':
        rl.close();
        break;
      default:
        console.log('Invalid action. Please enter a valid action.');
        promptUser();
        break;
    }
  });
}

console.log('Welcome to the Simple File Explorer!');
promptUser();