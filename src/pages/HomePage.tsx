import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { FloatingNavigationBar } from "@/components/NavigationBar"
import { TitleSection } from "@/components/TitleSection"
import { Footer } from "@/components/Footer"

import genedetek from '/src/assets/genedetek.jpg'
import customFormBuilder from '/src/assets/custom-form-builder.svg'
import qualificationWorkflows from '/src/assets/QW-annual-quals-prototype.avif'

const FEATURED_CARDS = [
    {
        image: qualificationWorkflows,
        descriptor: "UX Design & Product Management",
        title: "Qualification Workflows",
        description: "Designed and delivered a custom qualification workflow feature for general contractors, digitizing the pre-qualification process.",
        badges: ["Figma", "Jira"],
        button: ["See project", "/portfolio/qualification-workflows"],
        link_button: []
    },    
    {
        image: customFormBuilder,
        descriptor: "UX Design",
        title: "Custom Form Builder",
        description: "Designed initial form builder application for general contractors to streamline project workflows and form management.",
        badges: ["Figma", "Jira"],
        button: ["See project", "/portfolio/custom-forms"],
        link_button: []
    },
    {
        image: genedetek,
        descriptor: "Capstone Project",
        title: "GeneDetek: Biosensor",
        description: "Built and tested an electrochemical biosensor for detecting genetic mutations affecting SSRI drug uptake.",
        badges: ["Research", "Biosensors", "Wet Lab"],
        button: ["See project", "/portfolio/genedetek"],
        link_button: ["See article", "https://uwaterloo.ca/nanotechnology-engineering/news/capstone-team-wins-esch-competition-and-advances"]
    },
]


export function HomePage() {

    return (
        <div id="hero" className="w-screen overflow-y-scroll snap-y h-screen scroll-smooth">
            <FloatingNavigationBar />
            
            {/* Hero Section */}
            <div className="flex justify-center items-center px-6 py-6 sm:px-16 sm:py-16 box-border w-screen h-screen snap-start bg-[url(/src/assets/hero-background-1.png)] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col gap-12 w-3xl">
                    <div className="flex flex-col w-full h-fit">
                        <span className="text-neutral-500 tracking-widest font-semibold">HELLO, MY NAME IS</span>
                        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl bg-linear-to-r from-neutral-800 to-sky-600 bg-clip-text text-transparent">Sara Thompson</h1>
                        <p className="pt-6 text-neutral-500 text-xl sm:text-2xl font-light">I’m a frontend designer and UX designer blending thoughtful design with code to create intuitive, user-centered digital experiences.</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button variant="default" className="bg-linear-to-r from-sky-600 to-sky-500">
                            <Link to="/portfolio">See projects</Link>
                        </Button>
                        <Button variant="link" className="text-sky-600">
                            <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-1 items-center">
                                See my resume
                                <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div className="flex flex-col gap-16 justify-center items-center py-6 px-6 sm:py-16 sm:px-16 w-screen h-screen snap-start sm:h-screen bg-linear-to-b from-sky-50 to-white">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor="Featured"
                        title="Projects"
                        description="From biosensors to design, explore some of the projects I've recently worked on."
                    />
                </div>

                <div className="flex flex-col items-center justify-center h-full w-full">
                    <Carousel className="w-xs sm:w-md">
                        <CarouselContent className="h-fit">
                            {Object.entries(FEATURED_CARDS).map( ([key,value]) => (
                                <CarouselItem key={key}>
                                    <Card className="gap-0 p-0">
                                        <img src={value.image} alt="genedetek poster" className="hidden sm:flex object-contain object-cover rounded-[13px] sm:h-[250px]" />
                                        <div className="py-6">
                                            <CardHeader className="gap-0">
                                                <span className="text-neutral-500 tracking-widest font-semibold text-xs">{value.descriptor.toUpperCase()}</span>
                                                <CardTitle className="text-neutral-800 font-semibold text-2xl">{value.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="pt-1">
                                                <CardDescription>{value.description}</CardDescription>
                                                <div className="flex flex-row gap-2 pt-2">
                                                    {value.badges.map( (badge) => (
                                                        <Badge variant="outline" key={badge}>{badge}</Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="pt-6">
                                                <div className="flex flex-row gap-4 box-border w-full">
                                                    <Button variant="default" className="bg-linear-to-r from-sky-600 to-sky-500">
                                                        <Link to={value.button[1]}>{value.button[0]}</Link>
                                                    </Button>
                                                    {value.link_button.length === 0 ? "" :
                                                        <Button variant="link" className="text-sky-600">
                                                            <Link to={value.link_button[1]} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-1 items-center">
                                                                {value.link_button[0]}
                                                                <ArrowRight />
                                                            </Link>
                                                        </Button>
                                                    }
                                                </div>
                                            </CardFooter>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                            
                        </CarouselContent>

                        {/* Buttons for Carousel */}
                        <div className="sm:hidden flex flex-row gap-4 pt-4 justify-center items-center w-full">
                            <CarouselPrevious className="relative left-0 right-0 translate-x-0 translate-y-0"/>
                            <CarouselNext className="relative left-0 right-0 translate-x-0 translate-y-0"/>
                        </div>
                        <div className="hidden sm:flex">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
            
            {/* Footer Section */}
            <div className="h-fit snap-start">
                <Footer />
            </div>
        </div>
    )
}