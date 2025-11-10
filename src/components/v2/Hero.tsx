// components
import { Badge } from "../ui/badge";
import { Content } from "./Content"

interface HeroProps {
    useBadge?: boolean
    sectionLabel: string;
    title: React.ReactNode;
    description: string;
}

/**
 * Hero component
 * 
 * @param sectionLabel if useBadge is false, displays section label text format  
 */
export function Hero({ useBadge=false, sectionLabel, title, description }: HeroProps) {

    return (
        <Content py="pb-32 pt-48" borderB={false} >
            {useBadge ? 
                <Badge className="flex flex-row gap-2 bg-neutral-100 text-neutral-500 font-light">
                    <span className="bg-sky-500 rounded-full w-1 h-1" />
                    {sectionLabel}
                </Badge>
            :
                <span className="section-label text-neutral-500">
                    {sectionLabel}
                </span>
            }
            <h1 className="h1">{title}</h1>
            <p className="p text-neutral-500">{description}</p>
        </Content>
    )
}