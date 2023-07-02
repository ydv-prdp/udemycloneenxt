'use client'

import Button from "@/app/(components)/Button";
import useBasket from "@/app/hooks/useBasket";
import { SafeUser } from "@/types";
import Image from "next/image";

interface Props{
    author?:string,
    price?:string,
    imageSrc?:string,
    name?:string,
    description?:string | null;
    courseId:any,
    currentUser:SafeUser | null;
}

const Individual = ({author, price, imageSrc, name, description, courseId, currentUser}:Props) => {
    const {hasBasket, toggleBasket} = useBasket({
        currentUser,courseId
    })
  return (
    <div>
        <div className="h-[60vh] bg-zinc-900 flex justify-between text-white px-14 items-center">
            <div>
                <h3 className="text-[4rem]">{name}</h3>
                <p>{author}</p>
                <p>{description}</p>
                <p>{price}</p>
            </div>
            <div className="w-[400px] bg-white p-1 text-black">
                <img src={imageSrc} alt="Image" width={200} height={200} className="w-full object-cover" />
                <div>
                    <p>Rs. {price}</p>

                    <div className="flex flex-col gap-1 mt-4">
                        <Button onClick={toggleBasket} label={`${hasBasket ? 'Remove from basket': 'Add to basket'}`} type="button"/>
                        <Button label="Buy Now" outline type="button"/>
                        <p className="text-[12px] text-gray-700 text-center border-t-2 py-2">
                            30 day money back guarantee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Individual