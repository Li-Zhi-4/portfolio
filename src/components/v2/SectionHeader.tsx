// components
import { Content } from "./Content"
import ButtonGroups from "./ButtonGroups"

interface SectionHeaderProps {
    children?: React.ReactNode;

    title: string;
    linkTitle?: string;
    href?: string;
}

function SectionHeader({ children, title, linkTitle, href="#" }: SectionHeaderProps) {

    return (
        <Content fullBorder={true} borderB={false} fullWidth={false} bg="bg-neutral-50">
            <div className="flex sm:flex-row flex-col gap-4 justify-between items-center w-full">
                <h2 className="section-label text-neutral-500">{title}</h2>

                <ButtonGroups 
                    linkTitle={linkTitle}
                    href={href}
                />

                {children}
            </div>
        </Content>
    )
}

export {
    SectionHeader
}