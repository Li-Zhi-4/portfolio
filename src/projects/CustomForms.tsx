import { TitleSection } from "@/components/TitleSection"
import { FloatingNavigationBar } from "@/components/NavigationBar"
import { ContentSection } from "@/components/ContentSection"
import { Footer } from "@/components/Footer"

import divider from '/src/assets/divider.png'
import customForms from '/src/assets/CF-custom-form-builder.svg'
import initialIntegration from '/src/assets/CF-initial-design.webp'
import initialFormManagement from '/src/assets/CF-initial-form-management.webp'
import highFidelity from '/src/assets/CF-high-fidelity-form-builder.svg'
import generalContractor from '/src/assets/CF-general-contractor-form-builder.svg'
import subcontractor from '/src/assets/CF-subcontractor-form-builder.svg'
import formManagementAppearance from '/src/assets/CF-management-appearance.svg'
import questions from '/src/assets/CF-question-appearance.svg'


export function CustomForms() {
    const IMGLIST1 = {
        "Custom Forms Management for General Contractors": generalContractor,
        "Custom Forms Management for Subcontractors": subcontractor
    }

    const IMGLIST2 = {
        "Custom Forms Management Appearance": formManagementAppearance,
        "Examples of Custom Form Builder UI and Displaying Questions in Form Review": questions
    }

    return (
        <div className="w-screen">
            <FloatingNavigationBar />

            {/* Title Section */}
            <div className="flex flex-col gap-16 justify-center items-center py-6 px-6 sm:py-16 sm:px-16 w-screen h-[480px] bg-linear-to-b from-sky-50 to-white">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor="Bespoke Metrics"
                        title="Custom Forms"
                        description="Designed initial form builder application for general contractors to streamline project workflows and form management."/>
                </div>
            </div>

            {/* Divider Section */}
            <div className="w-screen overflow-hidden">
                <img src={divider} alt="divider" className="w-[1920px] max-w-none"/>
            </div>

            {/* Case Study Section */}
            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 justify-center items-center lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Problem Statement"
                        description={["General Contractors (GC) use their own custom forms to qualify subcontractors for projects. These forms request sensitive information and cannot be outsourced to general form builder platforms. We designed a secure, on-platform custom form builder to streamline project workflows and form management in one central place."]}
                    />
                    <div className="flex flex-col sm:flex-row gap-6 lg:w-3xl justify-between w-full">
                        <ContentSection
                            title="Role"
                            description={["UX/UI Designer"]}
                        />
                        <ContentSection
                            title="Responsibilities"
                            description={[
                                "Translate GC request into initial UI wireframes for Custom Form Builder.",
                                "Design management of forms on GC and subcontractor side of qualification platform.",
                            ]}
                            list={true}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16 bg-neutral-100">
                <img src={customForms} alt="custom forms window" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    Custom Form Builder design for General Contractors.
                </figcaption>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Responsibilities"
                        description={["I handled the task of the initial design for the custom form builder application on the platform. Considering that this feature was still in the ideation phase, I was able to integration feedback from members of the Product team into my designs before hand off."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Initial Design Research"
                        description={["This initial phase involved looking at other existing form builder sites (Qualtrics, SurveyMonkey, etc.) to get a general idea of the form builder UI. Additionally, I also looked at existing forms (Q score form) on the platform to get an idea of what functionality already existed."]}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-6 lg:w-3xl justify-between w-full">
                    <div className="flex flex-col gap-6 w-full">
                        <img src={initialIntegration} alt="qualification" className="h-[250px] max-w-full object-contain" />
                        <ContentSection
                            title="Initial Integration"
                            description={["I created the initial plans where custom forms would interface with the users. This included the navigation bar, flyouts, notifications, and table management."]}
                        />
                    </div>
                    <div className="flex flex-col gap-6 w-full">
                        <img src={initialFormManagement} alt="workflow" className="h-[250px] max-w-full object-contain"/>
                        <ContentSection
                            title="Initial Form Management"
                            description={["To align with the style of content management features on the site, a table format was used the GC and subcontractor side of the platform."]}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Initial Wireframe"
                        description={["The initial low-fidelity wireframe designs were informed by my initial research for placement and functionality. After sharing my reasoning for the designs, I produced a high-fidelity version and passed the design on for refinement."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16 bg-neutral-100">
                <img src={highFidelity} alt="high-fidelity custom form builder" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    High-fidelity Custom Forms Builder
                </figcaption>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Integrating Custom Forms"
                        description={["The initial details of integrating custom forms into the qualification platform were further expanded by designing a management system and accompanying flyouts and notifications. These designs were selected to match with the existing style of the platform."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-16 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16 bg-neutral-100">
                {Object.entries(IMGLIST1).map( ([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                        <img src={value} alt="reviewer replacement flyouts" className="max-h-full max-w-full object-contain"/>
                        <figcaption className="mt-4 text-sm text-neutral-500">
                            {key}
                        </figcaption>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Form Appearance"
                        description={["Form appearance was taken into consideration at a later stage in the project. This enabled the incorporation of lighter themes and colourful UI to incorporate the feedback given by senior PMs from design refinement."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-16 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16 bg-neutral-100">
                {Object.entries(IMGLIST2).map( ([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                        <img src={value} alt="reviewer replacement flyouts" className="max-h-full max-w-full object-contain"/>
                        <figcaption className="mt-4 text-sm text-neutral-500">
                            {key}
                        </figcaption>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor=""
                        title="Concluding Statement"
                        description="This project provided an excellent opportunity to design a new feature with the creative freedoms to extend beyond the current style guide of the platform. While it didn't cover the entire product lifecycle,  it enabled the ability to ideate on a newer, lighter theme for the platform while also producing designs for a requested feature by clients."/>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}