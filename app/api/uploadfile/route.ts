// import   { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse  , NextRequest } from 'next/server'
import {readFile , writeFile} from 'fs/promises'
import {join} from 'path'


export async function POST(req:NextRequest){ 
      let form =  req.formData();
    let filecollection:File = (await form).get("files") as unknown as File

    let filename =   filecollection?.name ;

     let realfile =  filecollection.arrayBuffer();
    let absolutePath = join("/images/" ,filename )
       
     let fileBinary = Buffer.from(realfile as any) ;

     writeFile(absolutePath , fileBinary);
               
  return  NextResponse.json({"message":"sent"})
}