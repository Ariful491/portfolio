'use client'

 import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { Fragment } from 'react'
import {ArrowDownIcon} from "lucide-react";

export default function Experiences() {
    const { ref, isVisible } = useScrollReveal();
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

                <div className="    text-gray-600  text-justify">

                    <div
                        ref={ref}
                        className={`   text-shadow-2xs bg-white rounded-lg    z-10 align-middle my-auto p-6 duration-1 ease-out ${
                            isVisible
                                ? 'opacity-100 translate-y-0  animate-fade-left animate-ease-in-out animate-normal\n'
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <p>
                            I am a passionate Full Stack Developer with expertise in building dynamic and
                            responsive web applications. With a strong foundation in both front-end and back-end
                            technologies, I strive to create seamless user experiences and efficient server-side
                            solutions. My goal is to leverage my skills to contribute to innovative projects and
                            drive digital transformation.
                        </p>
                    </div>


                </div>

                <div className=" bg-white  w-full px-4 pt-32">
                    <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
                        <Disclosure as="div" className="w-full max-w-md">
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="w-full border-b pb-2 text-left">Is team pricing available?</DisclosureButton>
                                    <div className="overflow-hidden py-2">
                                        <AnimatePresence>
                                            {open && (
                                                <DisclosurePanel static as={Fragment}>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -24 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -24 }}
                                                        transition={{ duration: 0.2, ease: easeOut }}
                                                        className="origin-top"
                                                    >
                                                        Yes! You can purchase a license that you can share with your entire team.
                                                    </motion.div>
                                                </DisclosurePanel>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </>
                            )}
                        </Disclosure>

                    </div>
                </div>

            </div>
        </>
    )
}



