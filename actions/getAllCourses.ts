import prisma from '@/lib/prismadb'

export default async function getAllCourses(params:any){
    try{
        const {result} = params
        let query: any = {};
        if(result){
            query.name = {
                contains:result
            }
        }
        const course = await prisma.course.findMany({
            where:query,
            orderBy:{
                createdAt:'desc'
            }
        })
        const safeCourse = course.map((course)=>({
            ...course,
            createdAt:course.createdAt.toISOString()
        }))
        return safeCourse
    } catch(error:any){
        throw new Error(error)
    }  
}