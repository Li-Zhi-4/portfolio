// components
import { Hero } from "@/components/v2/Hero";
import { SectionHeader } from "@/components/v2/SectionHeader";
import { Section, SectionGrid } from "@/components/v2/Section";
import { InfoBlock } from "@/components/v2/InfoBlock";
import { Content } from "@radix-ui/react-navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ButtonGroups from "@/components/v2/ButtonGroups";

// images
import leavoda from "/public/leavoda-logo.svg";
import waterloo from "/public/university-of-waterloo.png";
import compass from "/public/compass.svg";


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

            <SectionHeader title="Case Studies" linkTitle="See all" />

            <Section
                subtitle="Leavoda • present"
                title="Designing the Identity of a Field Service Management Platform"
                description="Leading the redesign of a startup’s FSM platform, transforming its interface and user experience into a clean, modern foundation for future innovation."
                badges={["Full Stack", "UX Design", "UX Research"]}

                buttonTitle="Read more"
                spacing="mt-8"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#FFF5EE] from-40% to-[]">
                    <img src={leavoda} alt="leavoda logo" />
                </div>
            </Section>

            <Section
                subtitle="Research • 2025"
                title="Investigating Critical Decision-Making Processes Among Rural Patients"
                description="Examined the decision-making process of rural patients seeking urgent medical care to assess disparities in access compared to urban populations."
                badges={["Product Management", "UX Research", "Academic Research"]}

                buttonTitle="Read more"
                spacing="mt-8"

                order="first"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#FFF5EE] from-40% to-[]">
                    <img src={leavoda} alt="" />
                </div>
            </Section>

            <Section
                title="Product Design and Development of a Personalized Women’s Health Tool"
                subtitle="Research • 2024-2025"
                description="Designed and developed a personalized women’s health journal through every phase of product design lifecycle, from user research to final production."
                badges={["Product Management", "UX Design", "UX Research"]}
                
                buttonTitle="Read more"
                spacing="mt-8"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#F5F3FF] from-40% to-[]">
                    <img src={waterloo} alt="" className="w-[80%]"/>
                </div>
            </Section>

            <Section
                title="Transforming Pre-Qualifications: From Manual Process to Digital Workflow"
                subtitle="Bespoke Metrics • 2023"
                description="Digitized the general contractor qualification process, improving efficiency, compliance, and user experience for faster approval and data management."
                badges={["Product Management", "UX Design"]}
                
                buttonTitle="Read more"
                spacing="mt-8"

                order="first"
                borderB={false}
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#DEDFE1] from-40% to-[]">
                    <img src={compass} alt="" className="w-[80%]"/>
                </div>
            </Section>
            
            <SectionHeader title="Engineering" />

            <Section
                title="Engineering the Next-Gen Biosensor for Personalized Antidepressant Therapy"
                subtitle="Capstone • 2023-2024"
                description="Built a novel electrochemical biosensor for the detection of genetic mutations affecting the uptake of certain antidepressant medication drugs."
                badges={["Product Management", "Academic Research", "Biosensors"]}
                
                buttonTitle="Read more"
                linkTitle="Capstone Team wins Esch Compeition"
                spacing="mt-8"

                order="first"
                flexDir="flex-col"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#F5F3FF] from-40% to-[]">
                    <img src={waterloo} alt="" className="w-[80%]"/>
                </div>
            </Section>

            <SectionGrid>
                <InfoBlock
                    title="Engineering the Next-Gen Biosensor for Personalized Antidepressant Therapy"
                    subtitle="Capstone • 2023-2024"
                    description="Built a novel electrochemical biosensor for the detection of genetic mutations affecting the uptake of certain antidepressant medication drugs."
                    badges={["Product Management", "Academic Research", "Biosensors"]}

                    buttonTitle="Read more"
                    spacing="mt-8"

                    padding={true}
                />
                <InfoBlock
                    title="Engineering the Next-Gen Biosensor for Personalized Antidepressant Therapy"
                    subtitle="Capstone • 2023-2024"
                    description="Built a novel electrochemical biosensor for the detection of genetic mutations affecting the uptake of certain antidepressant medication drugs."
                    badges={["Product Management", "Academic Research", "Biosensors"]}

                    buttonTitle="Read more"
                    spacing="mt-8"

                    padding={true}
                />
                <InfoBlock
                    title="Engineering the Next-Gen Biosensor for Personalized Antidepressant Therapy"
                    subtitle="Capstone • 2023-2024"
                    description="Built a novel electrochemical biosensor for the detection of genetic mutations affecting the uptake of certain antidepressant medication drugs."
                    badges={["Product Management", "Academic Research", "Biosensors"]}

                    buttonTitle="Read more"
                    spacing="mt-8"

                    padding={true}
                />
                <InfoBlock
                    title="Engineering the Next-Gen Biosensor for Personalized Antidepressant Therapy"
                    subtitle="Capstone • 2023-2024"
                    description="Built a novel electrochemical biosensor for the detection of genetic mutations affecting the uptake of certain antidepressant medication drugs."
                    badges={["Product Management", "Academic Research", "Biosensors"]}

                    buttonTitle="Read more"
                    spacing="mt-8"

                    padding={true}
                />
            </SectionGrid>

        </>
    )
}