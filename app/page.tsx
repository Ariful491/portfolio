import HeroSections from "@/components/frontend/home/heroSections";
import AppLayout from "@/components/layouts/app";
import About from "@/components/frontend/home/about";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import Experiences from "@/components/frontend/home/experiences";

export default function Home() {


    return (
        <AppLayout>
            <SmoothCursor/>
            <HeroSections/>
            <About/>
            <Experiences/>
        </AppLayout>
    );
}
