import { Content } from "./Content"

interface HeroProps {
    useBadge?: boolean
    sectionLabel: string;
    title: React.ReactNode;
    description: string;
}

export function Hero({ useBadge=false, sectionLabel, title, description }: HeroProps) {

    return (
        <Content py="32" fullBorder={true} >
             <span className="section-label">
                {sectionLabel}
            </span>
            <h1 className="h1">
                {title}
            </h1>
            <p className="p">{description}</p>
        </Content>
    )
}