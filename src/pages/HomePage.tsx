import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HomePage() {

    return (
        <div className="flex justify-center items-center px-6 py-6 sm:px-16 sm:py-16 box-border w-screen h-screen bg-[url(src/assets/hero-background.png)] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col gap-12 w-3xl">
                <div className="flex flex-col w-full h-fit">
                    <span className="text-neutral-500 tracking-widest font-semibold">HELLO, MY NAME IS</span>
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl bg-linear-to-r from-neutral-800 to-sky-600 bg-clip-text text-transparent">Sara Thompson</h1>
                    <p className="pt-3 text-neutral-500 text-xl sm:text-2xl font-light">I’m a frontend designer and UX designer blending thoughtful design with code to create intuitive, user-centered digital experiences.</p>
                </div>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="bg-linear-to-r from-sky-700 to-sky-500">See projects</Button>
                    <Button variant="link" className="text-sky-600">
                        See my resume
                        <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}