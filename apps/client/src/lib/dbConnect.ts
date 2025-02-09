
import mongoose from "mongoose"
let alreadyDone=false;
export async function ensureDBconnect(){
    if(alreadyDone){
        return
    }
    await mongoose.connect('mongodb+srv://arijitkaran240:codeforinterview@cluster0.ylaan.mongodb.net/polygon')
    alreadyDone=true;
}