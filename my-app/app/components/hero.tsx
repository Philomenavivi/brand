import React from 'react'
import Image from 'next/image';
import logo from '../images/logo.png';
import curkur from '../images/curkur.png';
import berbaumesia from '../images/berbaumesia.png';
import berkendara from '../images/berkendara.png';



export default function Hero() {
    return (




<div className="grid grid-cols-1fr 1fr mx-auto sm:grid-cols-2 gap-0 p-0 w-3/4 max-w-4xl bg-gray-300 ">




            <div className=" flex flex-col-1 w-1/2 mt-0  max-w-md mb-0 md:flex-col items p-0 -mx-px  gap-0 mx-auto jusfify-left bg-gray-300 flex-column ">

                    <Image src={logo} alt="logo.png " />

                    <h1 className="text-4xl font-bold-40px space-y-2 text-center">I'M Albert flores</h1>
                    <p className="text-lg flex flex-col space-y-2 text-center">Digital product Designer based in Tegal, Indonesia</p>
                    <button className="bg-gray-500 text-black border radius-25px px-2 py-1 gap-8 my-4 mx-auto  rounded sm-4px">see my work</button>
                </div>



                <div className="grid  sm:grid-cols-1 gap-0 w-full justify-right px-4 py-2 bg-gray-300">

                    <div className="flex flex-col gap-0 w-full  justify-right px-4 py-2 bg-gray-300">

                        <h1 className="text-3xl font-bold text-center">Passionate creating great experience for digital product</h1>
                        <button className="bg-black text-white border radius-35px px-2 py-1 gap-8 my-5 mx-auto rounded sm-4px">talk with me</button>
                        <button className="bg-gray-300 text-black border radius-35px px-2 py-1 gap-8 my-5 mx-auto rounded sm-4px">see my work</button>
                    </div>

                    <div className="flex flex-cols-1 gap-8 w-full justify-between justify-right px-4 py-2 bg-gray-300">
                        <h1 className="text-3xl font-size-15px text-center">working experience</h1>
                    </div>

                    <div className=" rounded-2xl overflow-hidden p-3 my-4 bg-gray-300">
                        <Image src={berbaumesia} alt="berbaumesia.png" />
                        <h1 className="text-3xl font-bold text-center">part time  product design</h1>
                        <p className="text-lg text-center">Berbaumesia</p>
                        <p className="text-md text-center"> feb2020 - present</p>
                    </div>

                    <div className="flex flex-col gap-8 w-full justify-between justify-right
                 px-4 py-2 bg-gray-300">
                        <Image src={berkendara} alt="berkendara.png" />
                        <h1 className="text-3xl font-bold text-center">senior  product design</h1>
                        <p className="text-lg text-center">Berkendara</p>
                        <p className="text-md text-center"> feb2020 - feb 2023</p>
                    </div>

                    <div className="flex flex-col gap-8 w-full justify-between justify-right
                 px-4 py-2 bg-gray-300">
                        <Image src={curkur} alt="curkur.png" />
                        <h1 className="text-3xl font-bold text-center"> product design</h1>
                        <p className="text-lg text-center">cukurkuy</p>
                        <p className="text-md text-center"> feb2018 - feb 2020</p>
                    </div>








                </div>






        
   
   </div>
   
);

}