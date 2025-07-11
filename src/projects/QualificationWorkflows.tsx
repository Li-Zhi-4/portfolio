
import { TitleSection } from "@/components/TitleSection"
import { FloatingNavigationBar } from "@/components/NavigationBar"
import { ContentSection } from "@/components/ContentSection"
import { Footer } from "@/components/Footer"

import divider from '/src/assets/divider.png'
import flowChart from '/src/assets/QW-flow-chart.svg'
import qualification from '/src/assets/QW-qualification.svg'
import workflow from '/src/assets/QW-workflow.svg'
import reviewerReplacement from '/src/assets/QW-reviewer-replacement.svg'
import qualificationManagement from '/src/assets/QW-workflow-groups-management.svg'
import flyoutNotification from '/src/assets/QW-flyout-notification.svg'
import concurrentWorkflowOptions from '/src/assets/QW-concurrent-workflow-options.svg'
import annualQualsPrototype from '/src/assets/QW-annual-quals-prototype.avif'
import annualQualsFlowChart from '/src/assets/QW-annual-quals-flowchart.svg'
import passFailModals from '/src/assets/QW-pass-fail-modals.svg'
import qualificationModals from '/src/assets/QW-qualification-modals.svg'


export function QualificationWorkflows() {
    const IMGLIST1 = {
        "Flyouts for Reviewer Replacement and Creating Review Groups": reviewerReplacement,
        "Workflow Groups Management": qualificationManagement,
        "Flyout for Workflow Notifications Redesign": flyoutNotification,
        "Create New Workflow Page with New Concurrent and Workflow Group Options": concurrentWorkflowOptions,
        "Prototype of Replacing Reviewers and Creating a Workflow": annualQualsPrototype,
    }
    const IMGLIST2 = {
        "Pass/Fail Modals": passFailModals,
        "Qualification Modals": qualificationModals
    }

    return (
        <div className="w-screen">
            <FloatingNavigationBar />

            {/* Title Section */}
            <div className="flex flex-col gap-16 justify-center items-center py-6 px-6 sm:py-16 sm:px-16 w-screen h-[480px] bg-linear-to-b from-sky-50 to-white">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor="Bespoke Metrics"
                        title="Qualification Workflows"
                        description="Led the design and delivery of a qualification workflow feature for Bespoke Metrics’ GC platform, transforming a client’s high-level request into a production-ready solution."/>
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
                    <div className="flex flex-row gap-6 lg:w-3xl justify-between w-full">
                        <ContentSection
                            title="Role"
                            description={["Product Owner", "UX/UI Designer"]}
                        />
                        <ContentSection
                            title="Responsibilities"
                            description={[
                                "Met with clients and stakeholders to gather key requirements",
                                "Designed iterations of workflows and modals",
                                "Translated features to Jira Epic and led development team through Agile process to production"
                            ]}
                            list={true}
                        />
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16 bg-neutral-100">
                <img src={flowChart} alt="qualification flow chart" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    Qualification Flowchart for General Contractors
                </figcaption>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Responsibilities"
                        description={["These Qualification Workflow features were requested by our general contractor clients and were added to the product roadmap for implementation. My role was to handle the workflow/design of the feature and ensure that it met the requirements of our client and the standards of the company. I led my team through the product development life cycle from initial research to production."]}
                            orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Initial Design Research"
                        description={["The initial phase included meeting with our main general contractor client requestor (EllisDon) on key features required for workflows and qualification. Then we met with our internal team (PMs, developers, and CEO) to discuss the best order in which to introduce these features onto the platform."]}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-6 lg:w-3xl justify-between w-full">
                    <div className="flex flex-col gap-6 w-full">
                        <img src={qualification} alt="qualification" className="h-[250px] max-w-full object-contain" />
                        <ContentSection
                            title="What are qualifications? "
                            description={["Qualifications are a type of review that general contractors use to assess subcontractors for projects. Typically, subcontractors require an annual review and may require specific reviews for certain projects."]}
                        />
                    </div>
                    <div className="flex flex-col gap-6 w-full">
                        <img src={workflow} alt="workflow" className="h-[250px] max-w-full object-contain"/>
                        <ContentSection
                            title="What are workflows?"
                            description={["Workflows are the digitization of qualification reviews. They enable general contractors to qualify subcontractors for for projects directly on our qualification platform. This typically involves a series of reviewers submitting their individual assessment of subcontractors on our platform."]}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Initial Key Features"
                        description={[
                            "The following were initial key features that were implemented first:",
                        ]}
                        orientation="horizontal"
                    />
                    <ContentSection
                        title=""
                        description={[
                            "Ability to replace a reviewer in all selected workflows",
                            "Ability to group reviewers in workflows (Finance, Health and Safety, etc.)",
                            "Ability to have concurrent groups of reviewers",
                        ]}
                        orientation="horizontal"
                        list={true}
                    />
                    <ContentSection
                        title=""
                        description={[
                            "In this stage, I mapped out user flows and created an initial prototype. The designs went through several reviews where I refined them from feedback. Additionally, I was able to demonstrate a prototype to our internal team and the client."
                        ]}
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
                <div className="flex flex-col gap-16 justify-center items-center lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Designs to Production"
                        description={["After presenting the prototype, I assigned the feature to my dev team (Arrow team) and we organized the Jira Epic into our Kanban. My team estimated the amount of time it would take to implement the feature to production and set off on our sprint! Additionally, work on implementing annual workflows occurred concurrently with this stage."]}
                    />
                    <div className="flex flex-row gap-6 lg:w-3xl justify-between w-full">
                        <ContentSection
                            title="Product Documentation"
                            description={["I wrote the product documentation and client facing documentation for these features. Additionally, I also demoed the prototype to our client success team so they were prepared for any questions from clients."]}
                        />
                        <ContentSection
                            title="What are annual workflows?"
                            description={["Annual workflows are qualifications that have a yearly expiry date. General contractors use these to easily qualify subcontractors for new projects (without having to redo the qualification process)."]}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Annual Workflows"
                        description={["The next major feature to implement was annual workflows. This involved expanding the logic of assigning qualifications from a simple 1-step modal to incorporating multi-stage review processes."]}
                        orientation="horizontal"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-fit px-6 py-16 sm:p-16 bg-neutral-100">
                <img src={annualQualsFlowChart} alt="qualification flow chart" className="max-h-full max-w-full object-contain"/>
                <figcaption className="mt-4 text-sm text-neutral-500">
                    Logic flowchart for Annual Workflow Modals
                </figcaption>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="flex flex-col gap-6 lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Modal Redesign"
                        description={["After the logic flowchart was approved, I redesigned the 1-step Assign Qualification modal to incorporate the logic detailed in the flow chart above. This included creating a new pass/fail modal and enabling the users to view prior recommendations made by other reviewers."]}
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
                <div className="flex flex-col gap-6 justify-center items-center lg:w-3xl w-full h-fit">
                    <ContentSection
                        title="Design Handoff"
                        description={["Since my co-op placement was scheduled to end before the development process began, I enabled a smooth transition of my work to another product owner through documenting my designs and logic workflow. Additionally, I was able to do a low-fidelity demonstration of how the modals should work for the team. I also wrote product documentation for this feature that covered logic and next steps."]}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen px-6 py-16 sm:p-16">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor=""
                        title="Concluding Statement"
                        description="This project covered the entire product lifecycle from initial research to production. I was able to translate a client request into key features, implement those key features into designs, iterate on those designs from feedback, product high-fidelity designs for development, and ultimately work with my development team to push those features to production."/>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}