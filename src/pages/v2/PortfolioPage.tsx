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
import { Subtitles } from "lucide-react";

const PORTFOLIO = [
    {
        subtitle: "Leavoda • present",
        title: "Designing the Identity of a Field Service Management Platform",
        description: "Leading the redesign of a startup’s FSM platform, transforming its interface and user experience into a clean, modern foundation for future innovation.",
        badges: ["Full Stack", "UX Design", "UX Research"],

        buttonTitle: "Read more",        
    },
    {
        subtitle: "Research • 2025",
        title: "Investigating Critical Decision-Making Processes Among Rural Patients",
        description: "Examined the decision-making process of rural patients seeking urgent medical care to assess disparities in access compared to urban populations.",
        badges: ["Product Management", "UX Research", "Academic Research"],

        buttonTitle: "Read more",        
    },
    {
        subtitle: "Research • 2024-2025",
        title: "Product Design and Development of a Personalized Women’s Health Tool",
        description: "Designed and developed a personalized women’s health journal through every phase of product design lifecycle, from user research to final production.",
        badges: ["Product Management", "UX Research", "UX Design"],

        buttonTitle: "Read more",        
    },
    {
        subtitle: "Bespoke Metrics • 2023",
        title: "Transforming Pre-Qualifications: From Manual Process to Digital Workflow",
        description: "Digitized the general contractor qualification process, improving efficiency, compliance, and user experience for faster approval and data management.",
        badges: ["Product Management", "UX Design"],

        buttonTitle: "Read more",        
    },
    {
        subtitle: "Capstone • 2023-2024",
        title: "Engineering the Next-Gen Biosensor for Personalized Antidepressant Therapy",
        description: "Built a novel electrochemical biosensor for the detection of genetic mutations affecting the uptake of certain antidepressant medication drugs.",
        badges: ["Product Management", "Academic Research", "Biosensors"],

        buttonTitle: "Read more", 
        linkTitle: "Capstone Team wins Esch Competition"
    },
    {
        subtitle: "Research • 2024",
        title: "Novel Carbon Quantum Dot Antifouling Coating Aiding Detection of Breast Cancer Biomarkers",
        description: "Designed a novel electrochemical biosensor utilizing a new antifouling technique to enhance sensor detection limits and ensure reliability in the realm of point-of-care (POC) health diagnostics.",
        badges: ["Academic Research", "Biosensors"],

        buttonTitle: "Read more", 
        linkTitle: "See paper",
        icon: "download"    
    },
    {
        subtitle: "Research • 2025",
        title: "Socioeconomic Analysis of Confirmed COVID-19 Cases Across Rural and Urban Regions in Ontario",
        description: "Analyzed COVID-19 incidence rates across Ontario to assess how income influences infection patterns and compared public health regions to identify key socioeconomic factors associated with outcomes.",
        badges: ["Academic Research", "Statistical Analysis"],

        buttonTitle: "Read more", 
        linkTitle: "See paper",
        icon: "download"       
    },
    {
        subtitle: "Research • 2021",
        title: "Analyzing User Perception and Consumer Decision-Making to Strategic User Interface Design Patterns in Shopping Applications",
        description: "Examined users’ (n = 1,116) susceptibility and perception of strategic design elements in shopping applications and how these design patterns influenced users’ decision-making and purchase intent.",
        badges: ["UX Research", "Academic Research", "Statistical Analysis"],

        buttonTitle: "Read more", 
        linkTitle: "See paper",
        icon: "download"        
    },
    // {
    //     subtitle: "",
    //     title: "",
    //     description: "",
    //     badges: [""],

    //     buttonTitle: "Read more",        
    // },

]

export function PortfolioPage() {

    return (
        <>
            <NavigationBar />

            <Hero
                useBadge={true}
                sectionLabel="Leavoda case study currently in progress"
                title={
                    <>
                        Portfolio
                    </>
                }
                description="From startups to corporations, and from personal projects to academic research, this collection showcases my latest work."
            />

            <SectionHeader title="All Work" />

            <SectionGrid borderB={false} dividey={true} styles="[&>*:nth-last-child(2)]:border-b-0">
                {PORTFOLIO.map((item, idx) => (
                    <InfoBlock
                        key={idx}
                        subtitle={item.subtitle}
                        title={item.title}
                        description={item.description}
                        badges={item.badges}

                        buttonTitle={item.buttonTitle}
                        linkTitle={item.linkTitle}
                        icon={item.icon === "download" || item.icon === "arrow" ? item.icon : undefined}
                        spacing="mt-8"

                        padding={true}
                    />
                ))}
            </SectionGrid>

            <ContactMe />
            
            <Footer />
        </>
    )
}