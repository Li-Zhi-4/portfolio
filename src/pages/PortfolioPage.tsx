import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { TitleSection } from "@/components/TitleSection"
import { Footer } from "@/components/Footer"
import divider from '/src/assets/divider.png'

import geneDetek from '/src/assets/genedetek.jpg'

const PROJECTS = [
    {
        image: "",
        descriptor: "Capstone Project",
        title: "GeneDetek: Biosensor",
        link: ""
    },
    {
        image: "",
        descriptor: "Product & UX Design",
        title: "Qualification Workflows",
        link: ""
    },
    {
        image: "",
        descriptor: "UX Design",
        title: "Custom Form Builder",
        link: ""
    },
]

export function PortfolioPage() {

    return (
      <div className="w-screen">
        {/* Title Section */}
        <div className="flex flex-col gap-16 justify-center items-center py-6 px-6 sm:py-16 sm:px-16 w-screen h-[480px] bg-linear-to-b from-sky-50 to-white">
            <div className="max-w-[768px]">
                <TitleSection
                    descriptor="Portfolio"
                    title="Projects"
                    description="Explore my work, a collection of projects where I’ve applied design thinking, frontend development, and user research to solve real problems and create meaningful experiences."/>
            </div>
        </div>

        {/* Divider Section */}
        <div className="w-screen">
            <img src={divider} alt="divider" className="w-screen"/>
        </div>

        {/* Project Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 box-border justify-center items-center w-full p-6 sm:p-16">
            {Object.entries(PROJECTS).map( ([key, value]) => (
                <Link to="/" className="h-full w-full rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl">
                    <Card key={key} className="gap-0 p-0 h-full w-full cursor-pointer">
                        <img src={geneDetek} alt="genedetek poster" className="object-contain object-cover rounded-[13px] h-[250px]" />
                        <div className="py-6">
                            <CardHeader className="gap-0">
                                <span className="text-neutral-500 tracking-widest font-semibold text-xs">{value.descriptor.toUpperCase()}</span>
                                <CardTitle className="text-neutral-800 font-semibold text-2xl">{value.title}</CardTitle>
                            </CardHeader>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>

        {/* Footer Section */}
        <Footer />
    </div>
)
}