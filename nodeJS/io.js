const process = require  ('process');

process.stdin.on('data' , (keyboard) => {
    process.stdout.write (`Texto do usuario: ${keyboard}`);
    process.exit();
})
