const { exec } = require('child_process');
const fs = require('fs');

exec('npm run build', (error, stdout, stderr) => {
  const output = `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}\n\nERROR:\n${error ? error.message : 'No error object'}`;
  fs.writeFileSync('build_full_output.txt', output);
  console.log('Build output saved to build_full_output.txt');
  process.exit(error ? 1 : 0);
});
