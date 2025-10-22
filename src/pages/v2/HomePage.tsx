// components
import { Hero } from "@/components/v2/Hero"

export function HomePage() {

    return (
        <Hero 
            useBadge={true}
            sectionLabel="Product Designer • Systems Engineer • UX Researcher"
            title={<>
                Part designer, part engineer, <br />
                full-time <span className="sky-gradient">problem solver</span>.
            </>}
            description="I’m a product owner and engineer combining design thinking with code to create seamless, human-centered digital products."
        />
    )
}