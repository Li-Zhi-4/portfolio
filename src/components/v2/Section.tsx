// components
import { Content } from "./Content"
import { InfoBlock } from "./InfoBlock"

interface SectionProps {
    children?: React.ReactNode;

    subtitle: string;
    title: string;
    description: string;
    badges?: string[];

    buttonTitle?: string;
    linkTitle?: string;
    icon?: "arrow" | "download";
    spacing?: string;
    href?: string;
    to?: string;

    flexDir?: "flex-col" | "flex-row";
    order?: "first" | "second";
    fullBorder?: boolean;
    borderB?: boolean;
}

function Section({ 
    children, 
    
    subtitle, 
    title, 
    description, 
    badges, 
    
    buttonTitle, 
    linkTitle, 
    icon="arrow",
    href, 
    spacing, 
    to,
    
    flexDir="flex-row",         // determines flex direction of content
    order="second",             // determines order of image and content
    fullBorder,                 // displays full y-axis borders
    borderB                     // displays bottom border of inner content
}: SectionProps) {

    return (
        <Content fullWidth={false} fullBorder={fullBorder} borderB={borderB}>
            <div className={`flex flex-col ${flexDir === "flex-col" ? "lg:flex-col" : "lg:flex-row lg:gap-16"} gap-6 w-full items-start text-start`}>
                
                {children && <div className={`w-full h-full min-h-[200px] ${order === "second" ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}>
                    {children}
                </div>}
                
                <div className={`${order === "second" ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}>
                    <InfoBlock
                        subtitle={subtitle}
                        title={title}
                        description={description}
                        badges={badges}
                        buttonTitle={buttonTitle}
                        linkTitle={linkTitle}
                        spacing={spacing}
                        href={href}
                        icon={icon}
                        to={to}
                    />
                </div>

            </div>
        </Content>
    )
}


interface SectionGridProps {
    children?: React.ReactNode;
    className?: string;
    styles?: string;

    fullBorder?: boolean;
    borderB?: boolean;
    divide?: string;
    columns?: string;
    py?: string;
}

function SectionGrid({
    children, 
    className,
    styles,
    
    fullBorder,                 // displays full y-axis borders
    borderB,                    // displays bottom border of inner content
    divide,               // displays vertical separators (should always be true)
    columns="lg:grid-cols-2",
    py=""
}: SectionGridProps) {

    return (
        <Content fullWidth={false} fullBorder={fullBorder} borderB={borderB} px="" py={py} className={className}>
            <div className={`grid ${columns} grid-cols-1 ${divide} divide-neutral-200 items-start text-start box-border ${styles}`}>
                {children}
            </div>
        </Content>
    )
}




export {
    Section,
    SectionGrid
}