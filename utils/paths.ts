import * as fs from "fs";
import path from "path";

// Replace 'app' with 'pages' if you want to search in the '/pages' directory
const mainDirectory = 'app';

// Define the directory path
const directoryPath = path.join(process.cwd(), mainDirectory);

// Function to recursively read directory contents
function getFolderPaths(dir: string, folderList: string[] = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);

        if (fs.statSync(filePath).isDirectory()) {
            folderList.push(filePath);
            getFolderPaths(filePath, folderList);
        }
    });

    return folderList;
}

// Get all folder paths in the directory
export const folderPaths = getFolderPaths(directoryPath).map((paths) => {
    return paths;
});