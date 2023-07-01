'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import Input from "../(components)/Inputs/Input";
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import Link from "next/link";


interface InitialState {
    email:string,
    password:string
}
const initialState:InitialState = {
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
        signIn('credentials',{
          ...state,
          redirect:false
        })
        .then((callback)=>{
          if(callback?.ok){
            router.refresh()
          }
          if(callback?.error){
            throw new Error('Wrong Credentials');
          }
        })
        router.push('/')
    }
  return (
    <>
      <form onSubmit={onSubmitHandler} className="text-center">
        <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
            <Input placeholder="Email" id='email' name='email' type="email" onChange={handleChange} value={state.email}/>
            <Input placeholder="Password" id='password' name='password' type="password" onChange={handleChange} value={state.password}/>
            <button type="submit">Submit</button>
        </div>
    </form>

    <div>
        <p>Haven't got an account? <Link href="/register">Sign Up</Link></p>
    </div>
    </>
  

  )
}

export default page