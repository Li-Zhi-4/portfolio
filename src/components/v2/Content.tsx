
interface ContentProps {
    children: React.ReactNode;
    py: string;
    bg?: string;
    fullBorder?: boolean;
}

/**
 * Container for components.
 * 
 * @param children components inside the container 
 * @returns 
 */
function Content({ children, py="12", bg, fullBorder=false }: ContentProps) {

    return (
        <div className={`w-[100%] bg-${bg} ${fullBorder ? `border-y border-neutral-200` : null}`}>
            <div className={`flex sm:w-[80%] w-[90%] justify-center lg:px-16 sm:px-12 px-6 mx-auto border-x border-neutral-200 ${fullBorder ? null : 'border-b'}`}>
                <div className={`flex flex-col items-center gap-2 max-w-192 text-center py-${py}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export {
    Content
}