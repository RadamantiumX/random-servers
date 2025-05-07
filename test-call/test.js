const PRISMA_ERROR_CODES = {
    P1000 : {message:"Authentication failed", code:500},
    P1001 : {message: "Can't reach database", code:404}
}

function mapping(keylog){
  for (const [key, value] of Object.entries(PRISMA_ERROR_CODES)){
    if (key === keylog){
        console.log(value.code)
    }
  }

}


mapping("P1000")