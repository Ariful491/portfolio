'use client'

import {useScrollReveal} from '@/hooks/useScrollReveal';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {AnimatePresence, easeOut, motion} from 'framer-motion'
import {Fragment} from 'react'
import {ArrowDownIcon} from "lucide-react";

export default function Experiences() {
    const {ref, isVisible} = useScrollReveal();
    return (
        <>
            <div className="px-4 z-10   mb-40 overflow-hidden">
                <div className="grid grid-cols-1 gap-2 text-center  ">
                    <h1
                        ref={ref}

                        className={`transition-all font-bold md:text-4xl text-gray-700  mb-20 duration-1000 ease-out ${
                            isVisible
                                ? 'opacity-100 translate-y-0 animate-fade-up'
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        Experiences
                    </h1>

                </div>

                <div className="text-gray-600  text-justify">

                    {/*<div
                        ref={ref}
                        className={`   text-shadow-2xs bg-white rounded-lg    z-10 align-middle my-auto p-6 duration-1 ease-out ${
                            isVisible
                                ? 'opacity-100 translate-y-0  animate-fade-left animate-ease-in-out animate-normal\n'
                                : 'opacity-0 translate-y-10'
                        }`}
                    >



                    </div>*/}

                    <div className="flex flex-row justify-center items-stretch gap-2">
                        <div className=" relative flex-1  rounded-lg p-4 flex flex-col   gap-2 ">
                            <div
                                className='absolute -top-3 right-0 text-md   font-bold  text-center bg-amber-400 shadow-lg  rounded-full px-2 py-1'

                            >
                                <p className="text-white relative">
                                    <span

                                        ref={ref}
                                        className={`${
                                            isVisible
                                                ? 'opacity-100 translate-y-0  animate-fade animate-ease-in-out animate-normal'
                                                : 'opacity-0 translate-y-10'
                                        }`}
                                    >
                                          2021-Present
                                    </span>



                                    <span className="absolute top-0 z-10 ring-2 ring-white  bg-white   -right-7 h-[20px] w-[20px] rounded-full shadow-lg border-4 border-amber-300  "></span>
                                </p>

                            </div>

                            <div  ref={ref}

                                  className={`bg-white p-4 rounded-lg  mt-5  ${
                                      isVisible
                                          ? 'opacity-100 translate-y-0  animate-fade animate-ease animate-normal'
                                          : 'opacity-0 translate-y-10'
                                  }`}
                                 >

                                <h3 className="font-bold text-gray-600 ">Freelance Web Developer</h3>
                            <p>
                                I am currently working as a freelance web developer. I have experience in building dynamic and responsive web applications.
                            </p>
                            </div>

                        </div>
                        <div
                            ref={ref}
                            className={`border-3  z-1  ring-2 ring-white   border-amber-300  rounded-lg  flex flex-col justify-center items-center gap-2`}>

                        </div>
                        <div className=" relative flex-1 mt-20 rounded-lg p-4 flex flex-col justify-center items-center gap-2 ">
                            <div
                                className='absolute -top-3 left-0 text-md   font-bold  text-center bg-amber-400 shadow-lg  rounded-full px-2 py-1'

                            >
                                <p className="text-white relative">
                                    <span

                                        ref={ref}
                                        className={`${
                                            isVisible
                                                ? 'opacity-100 translate-y-0  animate-fade animate-ease-in-out animate-normal'
                                                : 'opacity-0 translate-y-10'
                                        }`}
                                    >
                                          2021-Present
                                    </span>



                                    <span className="absolute top-0 z-10 ring-2 ring-white  bg-white   -left-7 h-[20px] w-[20px] rounded-full shadow-lg border-4 border-amber-300  "></span>
                                </p>

                            </div>

                            <div  ref={ref}

                                  className={`bg-white p-4 rounded-lg  mt-5  ${
                                      isVisible
                                          ? 'opacity-100 translate-y-0  animate-fade animate-ease animate-normal'
                                          : 'opacity-0 translate-y-10'
                                  }`}
                            >

                                <h3 className="font-bold text-gray-600 ">Freelance Web Developer</h3>
                                <p>
                                    I am currently working as a freelance web developer. I have experience in building dynamic and responsive web applications.
                                </p>
                            </div>

                        </div>

                    </div>
                     <div className="flex flex-row justify-center items-stretch gap-2">
                        <div className=" relative flex-1  rounded-lg p-4 flex flex-col   gap-2 ">
                            <div
                                className='absolute -top-3 right-0 text-md   font-bold  text-center bg-amber-400 shadow-lg  rounded-full px-2 py-1'

                            >
                                <p className="text-white relative">
                                    <span

                                        ref={ref}
                                        className={`${
                                            isVisible
                                                ? 'opacity-100 translate-y-0  animate-fade animate-ease-in-out animate-normal'
                                                : 'opacity-0 translate-y-10'
                                        }`}
                                    >
                                          2021-Present
                                    </span>



                                    <span className="absolute top-0 z-10 ring-2 ring-white  bg-white   -right-7 h-[20px] w-[20px] rounded-full shadow-lg border-4 border-amber-300  "></span>
                                </p>

                            </div>

                            <div  ref={ref}

                                  className={`bg-white p-4 rounded-lg  mt-5  ${
                                      isVisible
                                          ? 'opacity-100 translate-y-0  animate-fade animate-ease animate-normal'
                                          : 'opacity-0 translate-y-10'
                                  }`}
                                 >

                                <h3 className="font-bold text-gray-600 ">Freelance Web Developer</h3>
                            <p>
                                I am currently working as a freelance web developer. I have experience in building dynamic and responsive web applications.
                            </p>
                            </div>

                        </div>
                        <div
                            ref={ref}
                            className={`border-3  z-1  ring-2 ring-white   border-amber-300  rounded-lg  flex flex-col justify-center items-center gap-2`}>

                        </div>
                        <div className=" relative flex-1 mt-20 rounded-lg p-4 flex flex-col justify-center items-center gap-2 ">
                            <div
                                className='absolute -top-3 left-0 text-md   font-bold  text-center bg-amber-400 shadow-lg  rounded-full px-2 py-1'

                            >
                                <p className="text-white relative">
                                    <span

                                        ref={ref}
                                        className={`${
                                            isVisible
                                                ? 'opacity-100 translate-y-0  animate-fade animate-ease-in-out animate-normal'
                                                : 'opacity-0 translate-y-10'
                                        }`}
                                    >
                                          2021-Present
                                    </span>



                                    <span className="absolute top-0 z-10 ring-2 ring-white  bg-white   -left-7 h-[20px] w-[20px] rounded-full shadow-lg border-4 border-amber-300  "></span>
                                </p>

                            </div>

                            <div  ref={ref}

                                  className={`bg-white p-4 rounded-lg  mt-5  ${
                                      isVisible
                                          ? 'opacity-100 translate-y-0  animate-fade animate-ease animate-normal'
                                          : 'opacity-0 translate-y-10'
                                  }`}
                            >

                                <h3 className="font-bold text-gray-600 ">Freelance Web Developer</h3>
                                <p>
                                    I am currently working as a freelance web developer. I have experience in building dynamic and responsive web applications.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



