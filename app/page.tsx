import HeroSections from "@/components/frontend/home/heroSections";
import AppLayout from "@/components/layouts/app";
import About from "@/components/frontend/home/about";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import Experiences from "@/components/frontend/home/experiences";
import Projects from "@/components/frontend/home/projects";
import Skills from "@/components/frontend/home/skills";
import Education from "@/components/frontend/home/education";
import Contact from "@/components/frontend/home/contact";
import { cn } from "@/lib/utils";

export default function Home() {


    return (
        <AppLayout>
            <div className=" relative    items-center justify-center   rounded-lg    ">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                    )}
                />

                <HeroSections />
            </div>
            <About />
            <Experiences />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </AppLayout>
    );
}
