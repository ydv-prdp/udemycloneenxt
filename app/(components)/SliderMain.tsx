'use client'
import {useState} from 'react';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
interface CarouselProps{
    images:string[];
}
const SliderMain = ({images}:CarouselProps) => {
    const [current, setCurrent] = useState(0);
    const currentImage = images[current];
    const prevImage = () =>{
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? images.length -1 : current -1
        setCurrent(newIndex);
    }
    const nextImage = () =>{
        const isLastSlide = current === images.length -1;
        const newIndex = isLastSlide ? 0 : current + 1
        setCurrent(newIndex);
    }
  return (
    <div className='relative pb-16'>
        <div>
            <button onClick={prevImage} className='absolute left-[2%] top-[50%] z-[40]'>
                <BsArrowLeft/>
            </button>
            <img src={currentImage} className='h-[500px] object-cover w-full'/>
            {current === 1 && 
            (
                <div className='absolute top-[20%] left-[5%] bg-white p-6 max-w-[450px]'>
                    <h1 className='my-4 text-[2rem] font-bold'>Learing that gets you</h1>
                    <h3 className='text-[1.2rem]'>Skills for your present and future. Get started with us</h3>
                </div>
            )}
            {current === 0 &&
            (
                <div className='absolute top-[20%] left-[5%] bg-white p-6 max-w-[450px]'>
                    <h1 className='my-4 text-[2rem] font-bold'>Unlock the power of your people</h1>
                    <h3 className='text-[1.2rem]'>Skills for your present and future. Get started with us</h3>
                </div>
            )
            }
            <button onClick={nextImage} className='absolute right-[2%] top-[50%] z-[40]'>
                <BsArrowRight/>
            </button>
        </div>
    </div>
  )
}

export default SliderMain