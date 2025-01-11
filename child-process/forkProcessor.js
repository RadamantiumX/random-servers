// Este es el HIJO
// Va a estar esperando el mensaje
process.on('message', (msg) => {
    console.log('Message from parent process:', msg);
});
  
let counter = 0;
setInterval(() => {
    process.send({ counter: counter++ }); // Enviamos el contador al proceso PADRE
}, 1000);