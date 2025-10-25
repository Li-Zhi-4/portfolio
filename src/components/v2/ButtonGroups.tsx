// components
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

// icons
import { ArrowRight } from "lucide-react"

interface ButtonGroups {
    buttonTitle?: string;
    linkTitle?: string;
    href?: string;
    spacing?: string;
}

export default function ButtonGroups({ buttonTitle, linkTitle, href="#", spacing }: ButtonGroups) {

    return (
        <div className={`flex flex-row gap-8 ${spacing}`}>
            {buttonTitle && <Button variant="default" className="">
                <Link to="#">{buttonTitle}</Link>
            </Button>}
            {linkTitle && href && <a href={href} className="group inline-flex items-center text-neutral-500 font-light" >
                <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                    {linkTitle}
                </span>
                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>}
        </div>
    )
}