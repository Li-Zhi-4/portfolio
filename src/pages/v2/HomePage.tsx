// components
import { Hero } from "@/components/v2/Hero";
import { SectionHeader } from "@/components/v2/SectionHeader";
import { Section, SectionGrid } from "@/components/v2/Section";
import { InfoBlock } from "@/components/v2/InfoBlock";
import ContactMe from "@/components/v2/ContactMe";
import Footer from "@/components/v2/Footer";
import NavigationBar from "@/components/v2/NavigationBar";

// images
import leavoda from "/public/leavoda-logo.svg";
import waterloo from "/public/university-of-waterloo.png";
import compass from "/public/compass.svg";


export function HomePage() {

    return (
        <>
            <NavigationBar />

            <Hero
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
            
            <SectionHeader title="Engineering" linkTitle="See all" />

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

            <SectionGrid borderB={true}>
                <InfoBlock
                    title="Novel Carbon Quantum Dot Antifouling Coating Aiding Detection of Breast Cancer Biomarkers"
                    subtitle="Research • 2024"
                    description="Designed a novel electrochemical biosensor utilizing a new antifouling technique to enhance sensor detection limits and ensure reliability in the realm of point-of-care (POC) health diagnostics."
                    badges={["Academic Research", "Biosensors"]}

                    buttonTitle="Read more"
                    linkTitle="See paper"
                    icon="download"
                    spacing="mt-8"

                    padding={true}
                />
                <InfoBlock
                    title="Socioeconomic Analysis of Confirmed COVID-19 Cases Across Rural and Urban Regions in Ontario"
                    subtitle="Research • 2025"
                    description="Analyzed COVID-19 incidence rates across Ontario to assess how income influences infection patterns and compared public health regions to identify key socioeconomic factors associated with outcomes."
                    badges={["Academic Research", "Statistical Analysis"]}

                    buttonTitle="Read more"
                    linkTitle="See paper"
                    icon="download"
                    spacing="mt-8"

                    padding={true}
                />
            </SectionGrid>

            <Section
                title="Analyzing User Perception and Consumer Decision-Making to Strategic User Interface Design Patterns in Shopping Applications"
                subtitle="Research • 2021"
                description="Examined users’ (n = 1,116) susceptibility and perception of strategic design elements in shopping applications and how these design patterns influenced users’ decision-making and purchase intent."
                badges={["UX Research", "Academic Research", "Statistical Analysis"]}
                
                buttonTitle="Read more"
                linkTitle="See paper"
                icon="download"
                spacing="mt-8"

                order="first"
                flexDir="flex-col"
                borderB={false}
            />

            <ContactMe />

            <Footer />
        </>
    )
}