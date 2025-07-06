
interface TitleSectionProps {
    descriptor: string,
    title: string,
    description: string
}

export function TitleSection({ descriptor, title, description }: TitleSectionProps) {

    return (
        <div className="flex flex-col items-center w-full">
            <span className="text-sky-600 tracking-widest font-semibold">{descriptor.toUpperCase()}</span>
            <h1 className="font-semibold text-4xl sm:text-5xl ">{title}</h1>
            <p className="pt-6 text-2xl text-neutral-500 font-light text-center">{description}</p>
        </div>
    )
}