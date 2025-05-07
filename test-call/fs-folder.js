import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'
import { format } from 'date-fns'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// const baseName = path.basename(__filename)


async function fileSyncronized(message, fileLog) {
    const formatDate = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${formatDate}\tfhhhki122-ssa111-sdsda225\t${message}\n`
    try{

        await fsPromises.appendFile(path.join(__dirname, '/logs', fileLog), logItem)

    }catch(error){
       console.error(error)
    }
}

fileSyncronized('another','index.txt')



// const pathRelativo = path.relative('/Desktop/didactic/random-servers/test-call', 'test-call/logs')

// console.log(__filename.toString())