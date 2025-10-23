// components
import { Content } from "./Content"
import ButtonGroups from "./ButtonGroups"

interface SectionHeaderProps {
    title: string
}

function SectionHeader({ title }: SectionHeaderProps) {

    return (
        <Content fullBorder={true} fullWidth={false} bg="neutral-50">
            <div className="flex flex-row justify-between items-center w-full">
                <h2 className="section-label">{title}</h2>

                <ButtonGroups 
                    linkTitle="See all"
                />
            </div>
        </Content>
    )
}

export {
    SectionHeader
}