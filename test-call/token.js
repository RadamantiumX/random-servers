import crypto from 'crypto'
import bcrypt from 'bcryptjs'

/*const randomCrypto = crypto.randomBytes(16).toString("hex")

console.log(randomCrypto)*/


/*async function hashPassword(){
    const psw = bcrypt.hash('c319b34a275b2e6dc0d9eca4246ed12d',10, (err, hash)=>{
        if(err){
            return
        }
        console.log(hash)
        return hash
    })
    return
}

hashPassword()*/

// Posible solution to replace JWT invalidation
const toTimestamp = date => Math.floor(date.getTime() / 1000);
const now = new Date()
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
const nextDay = new Date(now.getTime() + 24 * 60 * 60 * 1000)
// console.log(now)
// const dateTime = new Date().getTime()
// console.log(toTimestamp(new Date(nextDay))) // Timestamp yesterday UNIX
// console.log(new Date().getTime()) // Unix Today now

function timeCheck(unixTime) {
    const next24Hs = new Date(unixTime.getTime() + 23 * 60 * 60 * 1000).getTime() // The next 24hs, taken the param timestamp
    const todayNow = new Date().getTime()
    if (todayNow <= next24Hs){
        console.log(`Today is ${todayNow} and the next 24 hours is ${next24Hs}`)
        return
    }
    console.log(`Is valid yet... today is ${Math.trunc(todayNow / 100)} and the value provided is ${Math.trunc(next24Hs / 100)}`)
    return
}

function timeCheckLastVersion(unixTime) {
    const todayNow = new Date().getTime()
    const fixedTime = Math.trunc(todayNow / 1000)
   /* if (unixTime <= fixedTime){
        console.log(`Invalid Token: The provided time ${unixTime} is minor at today now ${fixedTime}`)
        return
    }
    console.log(`Is valid yet... value provided: ${unixTime} ---> value today: ${fixedTime}`)
    return*/
    return { isValid: unixTime > fixedTime }
}
const { isValid } = timeCheckLastVersion(1743544421)
// timeCheck(yesterday)
if(isValid){
    console.log('Valid')
}else{
    console.log('Expired')
}