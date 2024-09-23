import comments from '@/app/_lib/Comment.json'
/// استفاده از متد گت
export async function GET() {
    return Response.json(comments)
}

////استفاده از متد پست 
export async function POST(request:Request) {
    const Comm =  await request.json()
    const newcomment = {
        id:String(comments.length+1),
        text: Comm.text,
    }
    comments.push(newcomment);
    return Response.json(JSON.stringify(newcomment),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201,
    });
}