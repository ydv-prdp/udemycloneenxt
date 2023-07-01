import { NextResponse } from "next/server";
import prisma from '@/lib/prismadb'
import myUser from "@/actions/getUser";

export async function POST(request:Request){
    const currentUser = await myUser();
    if(!currentUser){
        return console.log('Please login to continue')
    }
    const body = await request.json(); 
    const {name, author, imageSrc, description, price} = body;   

    const course = await prisma.course.create({
        data:{
            name,
            author,
            imageSrc,
            description,
            price,
            userId:currentUser.id
        }
    })
    return NextResponse.json(course);
}