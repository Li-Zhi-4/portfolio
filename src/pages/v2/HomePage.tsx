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

// data
import { PROJECTS } from "@/data/projects";


export function HomePage() {

    return (
        <>
            <NavigationBar />

            <Hero
                useBadge={true}
                sectionLabel="Currently updating my portfolio. Some case studies still have the previous design."
                // sectionLabel="Product Designer • Systems Engineer • UX Researcher"
                title={
                    <>
                        Part designer, part engineer, <br />
                        full-time <span className="sky-gradient">problem solver</span>.
                    </>
                }
                description="I’m a product owner and engineer combining design thinking with code to create seamless, human-centered digital products."
            />

            <SectionHeader title="Case Studies" linkTitle="See all" href="/portfolio" />

            <Section
                subtitle={PROJECTS["leavoda"].subtitle}
                title={PROJECTS["leavoda"].title}
                description={PROJECTS["leavoda"].description}
                badges={PROJECTS["leavoda"].badges}

                buttonTitle={PROJECTS["leavoda"].buttonTitle}
                spacing="mt-8"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#FFF5EE] from-40% to-[]">
                    <img src={leavoda} alt="leavoda logo" />
                </div>
            </Section>

            <Section
                subtitle={PROJECTS["uwaterloo-rural-health"].subtitle}
                title={PROJECTS["uwaterloo-rural-health"].title}
                description={PROJECTS["uwaterloo-rural-health"].description}
                badges={PROJECTS["uwaterloo-rural-health"].badges}

                linkTitle={PROJECTS["uwaterloo-rural-health"].linkTitle}
                href={PROJECTS["uwaterloo-rural-health"].href}
                icon={PROJECTS["uwaterloo-rural-health"].icon as "download" | "arrow"}
                spacing="mt-8"

                order="first"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#F5EEDC] from-40% to-[]">
                    <img src={waterloo} alt="" />
                </div>
            </Section>

            <Section
                title={PROJECTS["uwaterloo-womens-health"].title}
                subtitle={PROJECTS["uwaterloo-womens-health"].subtitle}
                description={PROJECTS["uwaterloo-womens-health"].description}
                badges={PROJECTS["uwaterloo-womens-health"].badges}
                
                buttonTitle={PROJECTS["uwaterloo-womens-health"].buttonTitle}
                to={PROJECTS["uwaterloo-womens-health"].to}
                linkTitle={PROJECTS["uwaterloo-womens-health"].linkTitle}
                href={PROJECTS["uwaterloo-womens-health"].href}
                spacing="mt-8"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#F5F3FF] from-40% to-[]">
                    <img src={waterloo} alt="" className="w-[80%]"/>
                </div>
            </Section>

            <Section
                title={PROJECTS["bespoke-metrics-qualifications"].title}
                subtitle={PROJECTS["bespoke-metrics-qualifications"].subtitle}
                description={PROJECTS["bespoke-metrics-qualifications"].description}
                badges={PROJECTS["bespoke-metrics-qualifications"].badges}
                
                buttonTitle={PROJECTS["bespoke-metrics-qualifications"].buttonTitle}
                to={PROJECTS["bespoke-metrics-qualifications"].to}
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
                title={PROJECTS["capstone"].title}
                subtitle={PROJECTS["capstone"].subtitle}
                description={PROJECTS["capstone"].description}
                badges={PROJECTS["capstone"].badges}
                
                buttonTitle={PROJECTS["capstone"].buttonTitle}
                to={PROJECTS["capstone"].to}
                linkTitle={PROJECTS["capstone"].linkTitle}
                href={PROJECTS["capstone"].href}
                spacing="mt-8"

                order="first"
                flexDir="flex-col"
            >
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#F5F3FF] from-40% to-[]">
                    <img src={waterloo} alt="" className="w-[80%]"/>
                </div>
            </Section>

            <SectionGrid borderB={true} divide="divide-y lg:divide-y-0 lg:divide-x" >
                <InfoBlock
                    title={PROJECTS["uwaterloo-qd-biosensor"].title}
                    subtitle={PROJECTS["uwaterloo-qd-biosensor"].subtitle}
                    description={PROJECTS["uwaterloo-qd-biosensor"].description}
                    badges={PROJECTS["uwaterloo-qd-biosensor"].badges}

                    linkTitle={PROJECTS["uwaterloo-qd-biosensor"].linkTitle}
                    href={PROJECTS["uwaterloo-qd-biosensor"].href}
                    icon={PROJECTS["uwaterloo-qd-biosensor"].icon as "download" | "arrow"}
                    spacing="mt-8"

                    padding={true}
                />
                <InfoBlock
                    title={PROJECTS["uwaterloo-covid"].title}
                    subtitle={PROJECTS["uwaterloo-covid"].subtitle}
                    description={PROJECTS["uwaterloo-covid"].description}
                    badges={PROJECTS["uwaterloo-covid"].badges}

                    linkTitle={PROJECTS["uwaterloo-covid"].linkTitle}
                    href={PROJECTS["uwaterloo-covid"].href}
                    icon={PROJECTS["uwaterloo-covid"].icon as "download" | "arrow"}
                    spacing="mt-8"

                    padding={true}
                />
            </SectionGrid>

            <Section
                title={PROJECTS["uwaterloo-ux"].title}
                subtitle={PROJECTS["uwaterloo-ux"].subtitle}
                description={PROJECTS["uwaterloo-ux"].description}
                badges={PROJECTS["uwaterloo-ux"].badges}
                
                linkTitle={PROJECTS["uwaterloo-ux"].linkTitle}
                href={PROJECTS["uwaterloo-ux"].href}
                icon={PROJECTS["uwaterloo-ux"].icon as "download" | "arrow"}
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