// components
import { Hero } from "@/components/v2/Hero"
import { SectionHeader } from "@/components/v2/SectionHeader"
import { Section } from "@/components/v2/Section"

// images
import logo from "/public/leavoda-logo.svg";


export function HomePage() {

    return (
        <>
            <Hero
                useBadge={true}
                sectionLabel="Product Designer • Systems Engineer • UX Researcher"
                title={<>
                    Part designer, part engineer, <br />
                    full-time <span className="sky-gradient">problem solver</span>.
                </>}
                description="I’m a product owner and engineer combining design thinking with code to create seamless, human-centered digital products."
            />

            <SectionHeader title="Potatoes" />

            <Section
                title="Designing the Identity of a Field Service Management Platform"
                subtitle="Leavoda • present"
                description="Leading the redesign of a startup’s FSM platform, transforming its interface and 
                            user experience into a clean, modern foundation for future innovation."
                badges={["Full Stack", "UX Design", "UX Research"]}
                
                children={
                    <div className="
                        flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg
                        bg-radial from-[#FFF5EE] from-40% to-[]"
                    >
                        <img src={logo} alt="" />
                    </div>
                }
            >

            </Section>
            
        </>
    )
}