import { Badge } from "../ui/badge";    
import ButtonGroups from "./ButtonGroups";

interface InfoBlockProps {
    subtitle: string;
    title: string;
    description: string | React.ReactNode;
    badges?: string[];

    buttonTitle?: string;
    linkTitle?: string;
    icon?: "arrow" | "download";
    spacing?: string;
    href?: string;
    to?: string;

    order?: string;
    padding?: boolean;
    height?: string;
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
 * Displays styled text for sections (i.e., case studies, projects)
 * 
 * @param buttonTitle if given, displays the ButtonGroups component
 * @param linkTitle if given, displays the ButtonGroups component
 * @param spacing provide "mt-#" as the value for the top margin padding between ButtonGroups and the rest of the component
 * @param order "order-#", the ordering of the component
 */
function InfoBlock({ 
    subtitle, 
    title, 
    description, 
    badges, 
    
    buttonTitle, 
    linkTitle, 
    icon="arrow", 
    spacing, 
    href, 
    to,
    
    order, 
    padding=false,
    height="h-full"
}: InfoBlockProps) {

    return (
        <div className={`flex flex-col gap-6 ${order} ${padding ? "p-6 sm:p-12" : null} ${height} w-full`}>
            <header className="flex flex-col gap-2">
                <span className="section-label text-neutral-500">{subtitle}</span>
                <h3 className="h3">{title}</h3>
            </header>

            <div className="flex flex-col gap-4">
                <p className="p text-neutral-500">{description}</p>
                {badges && <div className="flex flex-row flex-wrap gap-1">
                    {badges.map((item, idx) => (
                        <Badge key={idx} style={{ color: BADGE[item][1], backgroundColor: BADGE[item][0] }}>{item}</Badge>
                    ))}
                </div>}
            </div>

            {(buttonTitle || linkTitle) && <ButtonGroups
                buttonTitle={buttonTitle}
                linkTitle={linkTitle}
                icon={icon}
                spacing={spacing}
                href={href}
                to={to}
            />}
        </div>
    )
}

export {
    InfoBlock
}