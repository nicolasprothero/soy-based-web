// testJson.js
import fs from 'fs';
import path from 'path';

const jsonFilePath = path.join(process.cwd(), 'public/json/archive.json');

function testJsonReading() {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const archiveData = JSON.parse(jsonData);
    console.log('Parsed JSON data:', archiveData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }
}

testJsonReading();