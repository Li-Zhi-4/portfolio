
// components
import { Hero } from "@/components/v2/Hero";
import { SectionHeader } from "@/components/v2/SectionHeader";
import { Section, SectionGrid } from "@/components/v2/Section";
import { InfoBlock } from "@/components/v2/InfoBlock";
import ContactMe from "@/components/v2/ContactMe";
import Footer from "@/components/v2/Footer";
import NavigationBar from "@/components/v2/NavigationBar";

// images
import profile from "/public/profile.jpeg";

export function AboutPage() {

    return (
        <>
            <NavigationBar />

            <SectionGrid py="pt-16" fullBorder={true} borderB={false}>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <InfoBlock
                        title="I’m a designer exploring the intersection where design meets engineering & people."
                        subtitle="About Me"
                        description={
                            <>
                                As an graduate from the University of Waterloo in engineering, 
                                I have a wide variety of experience from human-computer interaction research to prototyping biosensors 
                                in a wet-chemistry lab.

                                <br /> 
                                <br />

                                Outside of academics, I enjoy:
                                <ul className="list-disc list-inside pl-4">
                                    <li>searching for music to play</li>
                                    <li>creating full ensembles for music projects</li>
                                    <li>sculling and sweep rowing</li>
                                    <li>learning about people’s passions</li>
                                    <li>catching up on popular TV shows</li>
                                </ul>

                                <br />

                                Catch me {" "}
                                <a 
                                    href="https://www.linkedin.com/in/sara-thompson-s44/" 
                                    target="_blank" rel="noopener noreferrer" 
                                    style={{
                                        textDecoration: "underline",
                                        fontWeight: 500
                                    }}>
                                        LinkedIn
                                </a> {" "}
                                or {" "}
                                <a 
                                    href="mailto:s44thomp@gmail.com"
                                    style={{
                                        textDecoration: "underline",
                                        fontWeight: 500
                                    }}
                                >
                                    Email
                                </a> {" "}
                                me to connect!
                            </>
                        }
                        padding={true}
                        height="h-fit"
                    />
                </div>
                <div className="flex justify-center items-center bg-neutral-50 w-full h-full rounded-lg bg-radial from-[#FFF5EE] from-40% to-[]">
                    <img src={profile} alt="leavoda logo" style={{ borderRadius: "20px", height: "80%", filter: "brightness(70%)" }} />
                </div>
            </SectionGrid>

            <ContactMe />
                        
            <Footer />
        </>
    )
}