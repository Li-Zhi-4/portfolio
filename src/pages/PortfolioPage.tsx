import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { FloatingNavigationBar } from "@/components/NavigationBar"
import { TitleSection } from "@/components/TitleSection"
import { Footer } from "@/components/Footer"
import divider from '/src/assets/divider.png'

import geneDetek from '/src/assets/genedetek.jpg'
import customFormBuilder from '/src/assets/custom-form-builder.svg'
import qualificationWorkflows from '/src/assets/qualification-workflows.avif'

const PROJECTS = [
    {
        image: qualificationWorkflows,
        descriptor: "Product & UX Design",
        title: "Qualification Workflows",
        link: "/portfolio/qualification-workflows"
    },
    {
        image: customFormBuilder,
        descriptor: "UX Design",
        title: "Custom Form Builder",
        link: "/portfolio/custom-forms"
    },
    {
        image: geneDetek,
        descriptor: "Capstone Project",
        title: "GeneDetek: Biosensor",
        link: "/portfolio/genedetek"
    },
]

export function PortfolioPage() {

    return (
      <div className="w-screen">
        <FloatingNavigationBar />

        {/* Title Section */}
        <div className="flex flex-col gap-16 justify-center items-center py-6 px-6 sm:py-16 sm:px-16 w-screen h-[480px] bg-linear-to-b from-sky-50 to-white">
            <div className="max-w-[768px]">
                <TitleSection
                    descriptor="A Collection of Work"
                    title="My Projects"
                    description="Explore my work, a collection of projects where I’ve applied design thinking, frontend development, and user research to solve real problems and create meaningful experiences."/>
            </div>
        </div>

        {/* Divider Section */}
        <div className="w-screen overflow-hidden">
            <img src={divider} alt="divider" className="w-[1920px] max-w-none"/>
        </div>

        {/* Project Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 box-border justify-center items-center w-full p-6 sm:p-16">
            {Object.entries(PROJECTS).map( ([key, value]) => (
                <Link to={value.link} key={key} className="h-full w-full rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl">
                    <Card className="gap-0 p-0 h-full w-full cursor-pointer">
                        <img src={value.image} alt="genedetek poster" className="object-contain object-cover rounded-[13px] h-[250px]" />
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