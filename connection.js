import mongoose from "mongoose"

async function connect(url){
    return mongoose.connect(url)
}

export default connect