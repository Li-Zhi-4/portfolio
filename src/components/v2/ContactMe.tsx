// components
import { Content } from "./Content"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

// icons
import { ArrowRight } from "lucide-react"

interface ContactMeProps {
    fullBorder?: boolean;
    className?: string;
}

export default function ContactMe({ className, fullBorder=true }: ContactMeProps) {

    return (
        <Content fullBorder={fullBorder} borderB={false} bg="bg-neutral-950" className={className}>
            <div className={`flex flex-col gap-6 items-center h-full w-full`}>
                <header className="flex flex-col gap-2">
                    <span className="section-label text-neutral-200">Contact Me</span>
                    <h3 className="h3 text-neutral-50">Let's Connect!</h3>
                </header>

                <div className="flex flex-col gap-4">
                    <p className="p text-neutral-400">Let’s work together on future projects! Don’t hesitate to reach out and connect with me on project ideas.</p>
                </div>

                <div className={`flex flex-row gap-8 items-center mt-8`}>
                    <Button variant="default" className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200">
                        <Link to="#">Contact Me</Link>
                    </Button>
                    <a href="#" className="group inline-flex items-center text-neutral-50 font-light" >
                        <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                            Connect on LinkedIn
                        </span>
                        <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </Content>
    )
}