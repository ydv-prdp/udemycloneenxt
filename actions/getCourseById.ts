import prisma from '@/lib/prismadb'

interface IParams{
    courseId?:string;
}

export default async function getCourseById(
    params:IParams
){
    try{
        const {courseId} = params;
        const course = await prisma.course.findUnique({
            where:{
                id:courseId
            },
            include:{
                user:true
            }
        })
        if(!courseId){
            return null
        }
        return {
            ...course,
            createdAt: course?.createdAt.toISOString(),
            user:{
                ...course?.user,
                createdAt:course?.user.createdAt.toISOString(),
                updatedAt:course?.user.updatedAt.toISOString(),
            }
        }
    }catch(error:any){
        throw new Error(error)
    }
}