// components
import { Content } from "./Content"
import { Badge } from "../ui/badge"
import ButtonGroups from "./ButtonGroups"

interface SectionProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    badges?: string[];
    button?: string;
    link?: string;
    buttonSpacing?: string;

    orientation?: "left" | "right";
    fullBorder?: boolean;
}

const BADGE: Record<string, [string, string]> = {
    "Full Stack":               ["rgba(237, 233, 254, 1)", "rgba(127, 34, 254, 1)"],
    "UX Design":                ["rgba(223, 242, 254, 1)", "rgba(0, 132, 209, 1)"],
    "UX Research":              ["rgba(219, 234, 254, 1)", "rgba(21, 93, 252, 1)"],
    "Product Management":       ["rgba(224, 231, 255, 1)", "rgba(79, 57, 246, 1)"],
    "Academic Research":        ["rgba(220, 252, 231, 1)", "rgba(0, 166, 62, 1)"],
    "Biosensors":               ["rgba(203, 251, 241, 1)", "rgba(0, 150, 137, 1)"],
    "Statistical Analysis":     ["rgba(236, 252, 202, 1)", "rgba(94, 165, 0, 1)"]
}

/**
 * Component for sections.
 * 
 * @param children for image component
 * @param badges list of applicable skills
 * @param button name of button, if left empty no button appears
 * @param link name of link, if left empty no link appears
 * @param buttonSpacing tailwind css for ButtonGroups
 * @param orientation placement of children components
 */
function Section({ children, title, subtitle, description, badges, button, link, buttonSpacing, orientation="right", fullBorder=false }: SectionProps) {

    return (
        <Content fullWidth={false} fullBorder={fullBorder} >
            <div className="flex flex-col lg:flex-row lg:gap-16 gap-6 w-full items-start text-start">
                
                {children && <div className={`w-full h-full min-h-[200px] ${orientation === "right" ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}>
                    {children}
                </div>}
                
                <div className={`flex flex-col gap-6 ${orientation === "right" ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}>
                    <header className="flex flex-col gap-2">
                        <span className="section-label">{subtitle}</span>
                        <h3 className="h3">{title}</h3>
                    </header>

                    <div className="flex flex-col gap-4">
                        <p className="p">{description}</p>
                        <div className="flex flex-row flex-wrap gap-1">
                            {badges && badges.map((item, idx) => (
                                <Badge key={idx} style={{ color: BADGE[item][1], backgroundColor: BADGE[item][0] }}>{item}</Badge>
                            ))}
                        </div>
                    </div>

                    <ButtonGroups
                        buttonTitle={button}
                        linkTitle={link}
                        spacing={buttonSpacing}
                    />
                </div>

                {/* { orientation==="right" ? children : null} */}
            </div>
        </Content>
    )
}

export {
    Section
}