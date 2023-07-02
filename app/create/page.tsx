'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../(components)/Inputs/Input"
import Button from "../(components)/Button";
import ImageUpload from "../(components)/ImageUpload";
import axios from 'axios'
import { useRouter } from "next/navigation";

interface InitialState {
  name:string,
  imageSrc:string,
  author:string,
  description:string,
  price:number
}
const initialState:InitialState = {
  name:'',
  imageSrc:'',
  author:'',
  description:'',
  price:0
}
const page = () => {
  const [state, setState] = useState(initialState);
  const router= useRouter();
  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setState({...state, [e.target.name]:e.target.value})
  }
  const setCustomValue = (id:any, value:any)=>{
    setState((prevState)=>({
      ...prevState,
      [id]:value
    }))
  }
  const onSubmit = (e:FormEvent) =>{
    e.preventDefault();
    axios.post('/api/create', state)
    .then(()=>{
      router.push('/')
    })
    .catch((err)=>{
      throw new Error(err)
    })
    router.refresh();
  }
  return (
    <div className="flex justify-center"> 
      <form className="w-[600px] h-[700px] py-12 flex flex-col items-center gap-4" onSubmit={onSubmit}>
        <div className="w-[500px]">
          <ImageUpload value={state.imageSrc} onChange={(value)=>setCustomValue('imageSrc', value)}/>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <Input big placeholder="Course name" id="name" type="text" value={state.name} name="name" onChange={handleChange} />
          <Input big placeholder="Authors" id="author" type="text" value={state.author} name="author" onChange={handleChange} />
          <Input big placeholder="Description" id="description" type="text" value={state.description} name="description" onChange={handleChange} />
          <Input big placeholder="Price" id="price" type="number" value={state.price} name="price" onChange={handleChange} />
        </div>
        <div>
          <Button label="Submit" type="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default page