
interface ContentSectionProps {
    title: string,
    description: string[],
    list?: boolean
    orientation?: "horizontal" | "vertical"
}

export function ContentSection({ title, description, list=false, orientation="vertical" }: ContentSectionProps) {
    const LISTSTYLE = list ? "list-disc pl-6 flex-1" : "";
    const ORIENTATION = orientation === "vertical" ? "" : "sm:flex-row justify-between";    // controls flex layout
    const HORIZONTAL = orientation === "vertical" ? "" : "w-[300px]";                       // Controls width h2

    return (
        <div className={`flex flex-col w-full ${ORIENTATION}`}>
            <h2 className={`font-bold text-2xl ${HORIZONTAL} flex-shrink-0 pb-2`}>{title}</h2>
            <ul className={LISTSTYLE}>
                {description.map( (paragraph, idx) => (
                    <li key={idx} className={`text-neutral-500 text-justify`}>
                        {paragraph}
                    </li>
                ))}
            </ul>
        </div>
    )
}