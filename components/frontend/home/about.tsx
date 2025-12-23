'use client'

import {Animation} from "@/components/frontend/home/animation";
import { useScrollReveal } from '@/hooks/useScrollReveal';
export default function About() {
    const { ref, isVisible } = useScrollReveal();
    return (
        <>
            <div className="px-4 z-10 mb-40 overflow-hidden">
                <div className="grid grid-cols-1 gap-2 text-center  ">
                    <h1
                        ref={ref}

                        className={`transition-all font-bold md:text-4xl text-gray-700  mb-20 duration-1000 ease-out ${
                            isVisible
                                ? 'opacity-100 translate-y-0 animate-fade-up'
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        About Me
                    </h1>

                </div>

              <div className=" grid grid-cols-2 relative text-gray-600  text-justify">

                  <div
                      ref={ref}
                      className={`bg-white/60  backdrop-blur-md rounded-lg text-shadow-2xs -mr-15 z-10 align-middle my-auto p-6 duration-2000 ease-out ${
                          isVisible
                              ? 'opacity-100 translate-y-0  animate-fade animate-ease-in-out animate-normal\n'
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

                  <div
                      ref={ref}
                      className={` bg-gray-50 rounded-lg m-4  justify-center align-middle  my-auto p-6  duration-2500 ease-out ${
                          isVisible
                              ? 'opacity-100 translate-y-0  animate-fade animate-ease-in-out animate-normal\n'
                              : 'opacity-0 translate-y-10'
                      }`}
                  >
                      <Animation></Animation>
                  </div>
              </div>

            </div>
        </>
    )
}