import getCourseById from "@/actions/getCourseById"
import myUser from "@/actions/getUser"
import Individual from "./Individual"

interface IParams{
        courseId?:string
}

const page = async ({params}:{params:IParams}) => {
  const course = await getCourseById(params)
  const currentUser = await myUser();
  return (
    <Individual
      courseId={course?.id}
      currentUser={currentUser}
      price={course?.price}
      imageSrc={course?.imageSrc}
      name={course?.name}
      author={course?.author}
      description={course?.description}
    />
  )
}

export default page