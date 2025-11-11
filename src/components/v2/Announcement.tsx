// components
import { SectionGrid } from "./Section"


export default function Announcement() {

    return (
        <SectionGrid columns="lg:grid-cols-1" borderB={false} >
            <p className="text-neutral-500 text-center p-12">Currently updating my portfolio. Some page may have the previous design still implemented.</p>
        </SectionGrid>
    )
}