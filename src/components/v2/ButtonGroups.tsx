// components
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

// icons
import { ArrowRight, Download } from "lucide-react"

interface ButtonGroups {
    buttonTitle?: string;
    linkTitle?: string;
    icon?: "arrow" | "download";
    href?: string;
    to?: string;
    spacing?: string;
}

const ICONS = {
    "arrow": <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />,
    "download": <Download className="ml-1 size-4 transition-transform duration-300 group-hover:translate-y-1" />
}

export default function ButtonGroups({ buttonTitle, to="", linkTitle, icon="arrow", href, spacing }: ButtonGroups) {
    const Icon = ICONS[icon];

    return (
        <div className={`flex flex-row gap-8 items-center ${spacing}`}>
            {buttonTitle && <Button variant="default" className="">
                <Link to={to}>{buttonTitle}</Link>
            </Button>}
            {linkTitle && href && <a href={href} className="group inline-flex items-center text-neutral-500 font-light" target="_blank" rel="noopener noreferrer"  >
                <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                    {linkTitle}
                </span>
                {Icon}
            </a>}
        </div>
    )
}