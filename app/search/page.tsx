import getAllCourses from "@/actions/getAllCourses"
import myUser from "@/actions/getUser";
import CourseComponent from "../(components)/CourseComponent";

interface HomeProps{
    searchParams:string
}

const page = async ({searchParams}:HomeProps) => {
    const courses = await getAllCourses(searchParams)
    const currentUser = await myUser();
  return (
    <div>
        <div className="p-12 flex gap-2 flex-wrap">
            {courses.map((item)=>(
                <CourseComponent
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    </div>
  )
}

export default page