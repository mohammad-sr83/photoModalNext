import comments from '@/app/_lib/Comment.json'
import { redirect } from 'next/navigation'
///استفاده از متد گت داینامیک استفاده می شود  
export async function GET(request:Request,{params}:{params:{id:string}}) {
    if (parseInt(params.id)>comments.length) {///متد پاری اینیت یک عدد صحیح درست میکند 
        redirect('/api')
    }
    const theComment = comments.find((item)=>item.id === params.id)
    return Response.json(theComment)
}

//// استفاده از متد دلیت که به طور به صورت داینامیک میشود 
export async function DELETE(request:Request,{params}:{params:{id:string}}) {
    const index = comments.findIndex((item)=>item.id === params.id)
    const deletacomment = comments[index]
    comments.splice(index,1)
    return Response.json(deletacomment)
}