import crypto from "crypto"


function generatedS(length){
    return crypto.randomBytes(length).toString("hex")
}

export default generatedS