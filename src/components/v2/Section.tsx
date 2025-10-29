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
                    />
                </div>

            </div>
        </Content>
    )
}


interface SectionGridProps {
    children?: React.ReactNode;

    fullBorder?: boolean;
    borderB?: boolean;
    dividex?: boolean;
    dividey?: boolean;
}

function SectionGrid({
    children, 
    
    fullBorder,                 // displays full y-axis borders
    borderB,                    // displays bottom border of inner content
    dividex=true,               // displays vertical separators (should always be true)
    dividey=false               // displays horizontal separators (only true for >2 items)
}: SectionGridProps) {

    return (
        <Content fullWidth={false} fullBorder={fullBorder} borderB={borderB} px="" py="">
            <div className={`grid lg:grid-cols-2 grid-cols-1 ${dividex ? "divide-x" : null} ${dividey ? "divide-y" : null} divide-neutral-200 items-start text-start box-border`}>
                {children}
            </div>
        </Content>
    )
}




export {
    Section,
    SectionGrid
}