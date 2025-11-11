import { useState } from "react";

// components
import { Hero } from "@/components/v2/Hero";
import { SectionHeader } from "@/components/v2/SectionHeader";
import { SectionGrid } from "@/components/v2/Section";
import { InfoBlock } from "@/components/v2/InfoBlock";
import ContactMe from "@/components/v2/ContactMe";
import Footer from "@/components/v2/Footer";
import NavigationBar from "@/components/v2/NavigationBar";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

// icons
import { Search } from "lucide-react";

// data
import { PROJECTS_LIST } from "@/data/projects";

export function PortfolioPage() {
    const [query, setQuery] = useState("");

    const filtered = PROJECTS_LIST.filter((item) => {
        const q = query.toLowerCase();

        return (
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.subtitle.toLowerCase().includes(q) ||
            item.badges.some((b) => b.toLowerCase().includes(q))
        );
    });

    // console.log("Query: ", query)
    // console.log("Filtered ", filtered)

    return (
        <>
            <NavigationBar />

            <Hero
                useBadge={true}
                sectionLabel="Leavoda case study currently in progress"
                title={<>Portfolio</>}
                description="From startups to corporations, and from personal projects to academic research, this collection showcases my latest work."
            />

            <SectionHeader title="All Work">
                <div>
                    <InputGroup className="bg-white">
                        <InputGroupInput
                            type="text"
                            placeholder="Search projects..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">{filtered.length} results</InputGroupAddon>
                    </InputGroup>
                </div>
            </SectionHeader>

            {filtered.length > 0 ?
                (
                    <SectionGrid borderB={false} divide="divide-y divide-x" styles="[&>*:nth-child(2n)]:border-r-0 [&>*:nth-last-child(-n+2)]:border-b-0" >
                        {filtered.map((item, idx) => (
                            <InfoBlock
                                key={idx}
                                subtitle={item.subtitle}
                                title={item.title}
                                description={item.description}
                                badges={item.badges}

                                buttonTitle={item.buttonTitle}
                                to={item.to}
                                linkTitle={item.linkTitle}
                                href={item.href}
                                icon={item.icon === "download" || item.icon === "arrow" ? item.icon : undefined}
                                spacing="mt-8"

                                padding={true}
                            />
                        ))}
                    </SectionGrid>
                ) 
            :
                (
                    <SectionGrid columns="lg:grid-cols-1" borderB={false} >
                        <p className="text-neutral-500 text-center p-12">No results found.</p>
                    </SectionGrid>
                )

            }

            <ContactMe />
            
            <Footer />
        </>
    );
};