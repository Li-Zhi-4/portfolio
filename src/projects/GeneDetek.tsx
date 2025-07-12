import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ExternalLink } from "lucide-react"

import { TitleSection } from "@/components/TitleSection"
import { FloatingNavigationBar } from "@/components/NavigationBar"
import { ContentSection } from "@/components/ContentSection"
import { Footer } from "@/components/Footer"

import divider from '/src/assets/divider.png'
import solutionInfo from '/src/assets/GD-solution-infographic.svg'
import prototype from '/src/assets/GD-prototype-example.avif'
import implementation from '/src/assets/GD-implementation.svg'
import hairpinProbe from '/src/assets/GD-hairpinprobe.png'
import CYP2C19 from '/src/assets/GD-wildtype.png'
import HPP1 from '/src/assets/GD-HPP-secondary.png'
import HPP2 from '/src/assets/GD-HPP-potential.png'
import HPP3 from '/src/assets/GD-HPP-potential-2.png'
import finalHPP from '/src/assets/GD-finalHPP.png'
import selectivity from '/src/assets/GD-specificity.svg'
import calibration from '/src/assets/GD-calibration.svg'
import future from '/src/assets/GD-future.svg'
import genedetek from '/src/assets/genedetek.jpg'

export function GeneDetek() {
    const IMGLIST1 = {
        "The wild-type allele (above) and its complementary sequence (below).": CYP2C19,
        "Potential HPP secondary structures. Secondary structures are outlined in red with the SNP and flanking base pair on either side highlighted in yellow. 50 flanking nucleotides on either side of the SNP are displayed and retrieved from the NCBI SNP databank.": HPP1,
        "Potential secondary structures within the yellow highlighted portion of the complementary strand to the target CYP2C19*2 wild-type allele sequence.": HPP2,
        "Three potential hairpin-loop probe formations are highlighted in gray, green, and blue. The respective location of the green probe is displayed in the longer sequence of the CYP2C19*2 allele and the yellow highlighted portion displays the section of the allele that was examined for secondary structures.": HPP3
    }

    return (
        <div className="w-screen">
            <FloatingNavigationBar />

            {/* Title Section */}
            <div className="flex flex-col gap-16 justify-center items-center py-6 px-6 sm:py-16 sm:px-16 w-screen h-[480px] bg-linear-to-b from-sky-50 to-white">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor="Capstone Project"
                        title="GeneDetek: Biosensor"
                        description="Built an electrochemical biosensor, utilising a hairpin-probe bioreceptor, for the detection of genetic mutations that affect the uptake of certain antidepressant medication drugs. "/>
                </div>
            </div>

            {/* Divider Section */}
            <div className="w-screen overflow-hidden">
                <img src={divider} alt="divider" className="w-[1920px] max-w-none"/>
            </div>

            {/* Case Study Section */}
            <div className="flex flex-col gap-6 justify-center items-center w-screen h-fit sm:h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 justify-center items-center lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Motivation"
                        description={["The rising prevalence of mental health issues underscores the complexity of prescribing drugs when individual responses differ widely. In Canada, 11% of men and 16% of women experience major depression. Additionally, 50% of antidepressant users discontinue therapy due to adverse effects. There is a need to identify who is at risk for these adverse effects to reduce the rate of discontinued drug therapy."]}
                    /> 
                    <ContentSection
                        title=""
                        description={["My capstone team placed as finalists in the Norman Esch Entrepreneurship Pitch Competition and won the Linda Carson Memorial Interdisciplinary Award."]}
                    /> 
                    {/* <Button variant="link" className="text-sky-600 hover:bg-sky-100 cursor-pointer"> */}
                    <a href="https://uwaterloo.ca/nanotechnology-engineering/news/capstone-team-wins-esch-competition-and-advances" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-1 items-center justify-center text-sky-600 hover:bg-sky-100 cursor-pointer px-4 py-2 rounded-lg">
                        Capstone Team wins Esch Competition and advances personalized medicine for depression treatment <ExternalLink />                         
                    </a>
                    {/* </Button> */}

                    <div className="flex flex-col sm:flex-row gap-6 lg:w-3xl justify-between w-full">
                        <ContentSection
                            title="Capstone Team"
                            description={[
                                "Andrea Parra",
                                "Nube Torres",
                                "Karla Castro",
                                "Sara Thompson"
                            ]}
                        />
                        <ContentSection
                            title="My Responsibilities"
                            description={[
                                "Design of aptamer-based hairpin-probe bioreceptor",
                                "Validation of biosensor sensitivity and selectivity",
                                "Conducted electrical performance testing of the biosensor",
                                "Biosensor materials aquisition"
                            ]}
                            list={true}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16 bg-neutral-100">
                <img src={prototype} alt="qualification flow chart" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    GeneDetek prototype
                </figcaption>
                <span className="text-center">
                    See our full report here: <a href="/src/docs/final-report.pdf" target="_blank" rel="noopener noreferrer" className=" hover:bg-sky-100 text-sky-500 font-semibold py-2 px-4 rounded-lg transition">Download Report PDF</a>
                </span>
            </div>

             <div className="flex flex-col gap-6 justify-center items-center w-screen h-fit sm:h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 justify-center items-center lg:w-3xl w-full h-fit">                
                    <div className="flex flex-col sm:flex-row gap-6 lg:w-3xl justify-between w-full">
                        <ContentSection
                            title="Current Solution"
                            description={["The current solution is Pharmacogenetics, a field which investigates genetic mutations that influence the response to medications."]}
                        />
                        <ContentSection
                            title="Current Challenges"
                            description={[
                                "Invasive sample collection (i.e., blood)",
                                "Turnaround time to acquire results can be days to weeks",
                                "Pharmacogenetics is expensive"
                            ]}
                            list={true}
                        />
                    </div>
                    <ContentSection
                        title="Our Solution"
                        description={["Our solution involves a biosensor that is point-of-care, non-invasive, rapid, and cost-effective. This required the use of an electrochemical biosensor design for the detection of genetic mutations linked to poor responses in antidepressants."]}
                        orientation="vertical"
                    />
                    <img src={solutionInfo} alt="solution infographic" className="h-[300px] max-w-full object-contain"/>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16">
                <img src={implementation} alt="qualification flow chart" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    Implementation of biosensor
                </figcaption>
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Functionality"
                        description={["Saliva samples are collected using the Oragene Saliva Collection kit. The samples are placed on the surface of a modified electrode that enables target detection. A portable potentiostat can be utilised to detect if the target analyte is contained within the sample. Consequently, the results are loaded onto the GeneDetek app which generates an report of the analysis."]}
                        orientation="horizontal"
                    />
                    <ContentSection
                        title=""
                        description={["The electrode is modified with a self-assembled monolayer composed of 6-mercaptohexanol with thi-C6 modified HPPs. The alkanethiol chain length was selected to match the chain length of the thiol modification on the HPP. This enabled the probes to sit above the monolayer where they could interact with target sequences and hybridize. When in their loop conformation, the probe’s biotin was hidden within the SAM layer to prevent binding of HRP-streptavidin. However, when hybridization occurred, the biotin was exposed allowing the binding of HRP-streptavidin as seen."]}
                        orientation="horizontal"
                    />
                    <ContentSection
                        title=""
                        description={["The redox reaction involving the use of HRP, TMB, and hydrogen peroxide is used to generate the necessary change in charge on the electrode surface to produce a signal. This is employed through the oxidation of TMB. Ideally, HRP’s redox site centrally located within the macromolecule and the TMB redox molecule is utilised as an electron shuttle that can penetrate both HRP and the SAM. This enables exchange of electrons at the electrode surface. Through the reduction of hydrogen peroxide with TMB on the electrode surface, a signal can be generated."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16 bg-neutral-100">
                <img src={hairpinProbe} alt="qualification flow chart" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    Formation #1 of hairpin-loop probe (the optimal formation)
                </figcaption>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Design Specifications"
                        description={["I was responsible for the design of the biosensor’s bioreceptor, which included engineering a single-stranded DNA hairpin probe specific to our target genetic mutation (CYP2C19*2). This design enabled selective hybridization and signal generation, forming the core of the sensor’s detection mechanism."]}
                        orientation="horizontal"
                    />
                    <ContentSection
                        title=""
                        description={["This involved using NCBI's databank (https://www.ncbi.nlm.nih.gov/snp/) for single-nucleotide polymorphisms (SNPs) and other oligo calculator tools to determine the most optimal hairpin-probe formation. Main factors accounted for in the design included (1) secondary structures; (2) loop length; (3) stem design; (4) melting temperature."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-16 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16 bg-neutral-100">
                {Object.entries(IMGLIST1).map( ([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                        <img src={value} alt={key} className="max-h-full max-w-full object-contain"/>
                        <figcaption className="mt-4 text-sm text-neutral-500 text-center">
                            {key}
                        </figcaption>
                    </div>
                ))}
                <div className="w-full lg:w-3xl">
                    <Table className="">
                        <TableCaption>Characteristics of melting temperature, GC content, and length for all three probes.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Hairpin-probe</TableHead>
                                <TableHead className="text-center">Melting Temp (°C)</TableHead>
                                <TableHead className="text-center">GC Content (%)</TableHead>
                                <TableHead className="text-center">Length (bp)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Gray</TableCell>
                                <TableCell className="text-center">68.2</TableCell>
                                <TableCell className="text-center">59</TableCell>
                                <TableCell className="text-center">32</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Green</TableCell>
                                <TableCell className="text-center">70.8</TableCell>
                                <TableCell className="text-center">66</TableCell>
                                <TableCell className="text-center">32</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Blue</TableCell>
                                <TableCell className="text-center">70.8</TableCell>
                                <TableCell className="text-center">66</TableCell>
                                <TableCell className="text-center">32</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div className="flex flex-col gap-16 justify-center items-center w-screen h-fit sm:h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Final Hairpin-probe Design"
                        description={["With the prior characteristics mentioned taken into account, the best probe option from the available selection is the blue hairpin-loop probe. A virtual meeting with Professor Juewen Liu (University of Waterloo) was organized to verify the final design of our probe and acquire feedback on how to improve it. One change to our final design based on feedback included the shortening of the loop portion to 17 bp to increase the specificity of the design towards the single nucleotide substitution. This led to a 68.8 °C melting temperature, 65.5% GC content, and 29 bp length."]}
                    />
                    <ContentSection
                        title=""
                        description={["The final hairpin-loop design will require functionalization of both ends of the probe with biotin at the 5’ ends and thiol-linker on the 3’ end to enable detection of the HRP-streptavidin complex and to allow formation of the SAM on the electrode surface, respectively. "]}
                    />
                </div>
                <div className="flex flex-col items-center justify-cener">
                    <img src={finalHPP} alt="final HPP" className="max-h-full max-w-full object-contain"/>
                    <figcaption className="mt-4 text-sm text-neutral-500">
                        Final hairpin-probe design with thiol and biotin functionalization.
                    </figcaption>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Results"
                        description={["The following test results are presented with respect to selectivity to polymorphism CYP2C19*2 and the calibration curve:"]}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-6 lg:w-3xl justify-between w-full">
                    <div className="flex flex-col gap-6 w-full">
                        <img src={calibration} alt="qualification" className="h-[250px] max-w-full object-contain" />
                        <ContentSection
                            title="What is a calibration curve? "
                            description={["A calibration curve is used to quantify the relationship between the biosensor’s signal output and known concentrations of a target analyte. By plotting sensor responses against these known values, the curve enables accurate determination of unknown sample concentrations based on their signal readings."]}
                        />
                    </div>
                    <div className="flex flex-col gap-6 w-full">
                        <img src={selectivity} alt="workflow" className="h-[250px] max-w-full object-contain"/>
                        <ContentSection
                            title="What is selectivity?"
                            description={["Selectivity refers to a biosensor’s ability to specifically detect a target molecule in the presence of other similar or potentially interfering substances. A highly selective biosensor responds only to the intended analyte, ensuring accurate results even in complex sample environments like blood, saliva, or wastewater."]}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <img src={future} alt="future outlook" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    Implementation of biosensor
                </figcaption>
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Future Outlook"
                        description={["Additional work was spent on further testing with saliva, modular probe multiplexing, and sensor design optimization."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor=""
                        title="Concluding Statement"
                        description="Special thanks to our consultants Dr. Shirley Tang, as well as Dr. Juewen Liu, PhD. Pramod Kalambate, PhD student Pei Li, Prof. Hany Aziz, Prof. Ahmad Ghavami, Prof. Howard Siu and Prof. Mishi Groh for their invaluable support, guidance, and advice."/>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <img src={genedetek} alt="GeneDetek poster" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    GeneDetek conference poster
                </figcaption>
                <span className="text-center">
                    See our full report here: <a href="/src/docs/final-report.pdf" target="_blank" rel="noopener noreferrer" className=" hover:bg-sky-100 text-sky-500 font-semibold py-2 px-4 rounded-lg transition">Download Report PDF</a>
                </span>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}