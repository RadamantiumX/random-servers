// Este codigo es solo para visualizar el orden de ejecución de cada CALLBACK...
console.log('first')

setTimeout(()=>{
    console.log('delayed call')
},3000)

setTimeout(()=>{
    console.log('second')
})

console.log('third (or maybe second 😏)')
process.nextTick(()=>{ // Invocamos inmediatamente despues de la ejecución normal, o antes de los CALLBACK
    console.log('Running at the next tick...')
})

setImmediate(()=>{
    console.log('Is inmediate')
})