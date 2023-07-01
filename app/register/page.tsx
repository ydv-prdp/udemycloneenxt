'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import Input from "../(components)/Inputs/Input";
import axios from "axios";
import {useRouter} from 'next/navigation'
import Link from "next/link";


interface InitialState {
    name:string,
    email:string,
    password:string
}
const initialState:InitialState = {
    name:'',
    email:'',
    password:''
}

const page = () => {

    const [state, setState] = useState(initialState);
    const router = useRouter();

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setState({...state, [e.target.name]:e.target.value})
    }
    const onSubmitHandler = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(state);
        axios.post('/api/register',state)
        .then(()=>router.refresh())
        .then(()=>router.push('/login'))
        .catch((error:any)=>{
            console.log(error)
        })
    }
  return (
    <>
      <form onSubmit={onSubmitHandler} className="text-center">
        <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
            <Input placeholder="Name" id='name' name='name' type="text" onChange={handleChange} value={state.name}/>
            <Input placeholder="Email" id='email' name='email' type="email" onChange={handleChange} value={state.email}/>
            <Input placeholder="Password" id='password' name='password' type="password" onChange={handleChange} value={state.password}/>
            <button type="submit">Submit</button>
        </div>
    </form>

    <div>
        <p>Do you already have an account? <Link href="/login">Sign In</Link></p>
    </div>
    </>
  

  )
}

export default page