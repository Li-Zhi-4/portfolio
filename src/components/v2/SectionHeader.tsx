// components
import { Content } from "./Content"
import { Button } from "../ui/button"

// icons
import { ArrowRight } from "lucide-react"


function SectionHeader() {

    return (
        <Content fullBorder={true} fullWidth={false} >
            <div className="flex flex-row justify-between items-center w-full">
                <h2 className="section-label">Case Studies</h2>
                
                <a href="" className="group inline-flex items-center text-neutral-500" >
                    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                        See all
                    </span>
                    <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
        </Content>
    )
}

export {
    SectionHeader
}