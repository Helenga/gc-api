const fs = require('fs');

function ensureFileExists(filePath) {

  //TODO: recursively create directories
  // from file path if path does not exist

  const isExists = fs.existsSync(filePath)
  if (!isExists)
    fs.writeFileSync(
      filePath,
      '',
      {options: 'w'}
    )
  return filePath
}

module.exports = {
  ensureFileExists
}