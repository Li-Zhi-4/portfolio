// components
import { Hero } from "@/components/v2/Hero";
import { SectionHeader } from "@/components/v2/SectionHeader";
import { Section } from "@/components/v2/Section";

// images
import leavoda from "/public/leavoda-logo.svg";
import waterloo from "/public/university-of-waterloo.png";


export function HomePage() {

    return (
        <>
            <Hero
                useBadge={true}
                sectionLabel="Product Designer • Systems Engineer • UX Researcher"
                title={
                    <>
                        Part designer, part engineer, <br />
                        full-time <span className="sky-gradient">problem solver</span>.
                    </>
                }
                description="I’m a product owner and engineer combining design thinking with code to create seamless, human-centered digital products."
            />

            <SectionHeader title="Potatoes" />

            <Section
                title="Designing the Identity of a Field Service Management Platform"
                subtitle="Leavoda • present"
                description="Leading the redesign of a startup’s FSM platform, transforming its interface and 
                            user experience into a clean, modern foundation for future innovation."
                badges={["Full Stack", "UX Design", "UX Research"]}
                button="Read more"
                buttonSpacing="mt-8"
                orientation="left"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#FFF5EE] from-40% to-[]">
                    <img src={leavoda} alt="" />
                </div>
            </Section>

            <Section
                title="Investigating Critical Decision-Making Processes Among Rural Patients"
                subtitle="Research • 2025"
                description="Examined the decision-making process of rural patients seeking urgent medical care to assess disparities in access compared to urban populations."
                badges={["Product Management", "UX Research", "Academic Research"]}
                button="Read more"
                buttonSpacing="mt-8"
                orientation="right"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#F3EEE0] from-40% to-[]">
                    <img src={waterloo} alt="" className="w-[80%]"/>
                </div>
            </Section>
            
        </>
    )
}