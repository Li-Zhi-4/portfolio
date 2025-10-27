// components
import { Content } from "./Content"
import ButtonGroups from "./ButtonGroups"

interface SectionHeaderProps {
    title: string;
    linkTitle?: string;
    href?: string;
}

function SectionHeader({ title, linkTitle, href="#" }: SectionHeaderProps) {

    return (
        <Content fullBorder={true} borderB={false} fullWidth={false} bg="bg-neutral-50">
            <div className="flex flex-row justify-between items-center w-full">
                <h2 className="section-label">{title}</h2>

                <ButtonGroups 
                    linkTitle={linkTitle}
                    href={href}
                />
            </div>
        </Content>
    )
}

export {
    SectionHeader
}