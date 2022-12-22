const exec = require('child_process').exec;  
exec('cls', (err, stdout, stderr) => {   //execute ipconfig dans le terminal
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  