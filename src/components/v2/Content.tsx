
interface ContentProps {
    children: React.ReactNode;
    py?: string;
    bg?: string;
    flexDir?: "flex-col" | "flex-row";
    fullBorder?: boolean;
    fullWidth?: boolean;
    borderB?: boolean;
}

/**
 * Container for components.
 * 
 * @param children components inside the container 
 * @param fullBorder if true, horizontal borders are screen width
 * @param borderB if true, the bottom border of the inner div shows (fullBorder and borderB should not both be true)
 * @param fullWidth if true, px is 48 px
 * @returns 
 */
function Content({ children, py="12", bg, fullBorder=false, fullWidth=true, borderB=true, flexDir="flex-col" }: ContentProps) {

    return (
        <div className={`w-[100%] bg-${bg} ${fullBorder ? `border-y border-neutral-200` : null}`}>
            {/* Outer container, screen width, screen border bottom (boolean) */}
            <div className={`flex sm:w-[80%] w-[90%] justify-center lg:px-16 sm:px-12 px-6 mx-auto border-x border-neutral-200 ${borderB ? 'border-b' : null}`}>
                {/* Inner container, 80-90% width, grey border on left/right, container border bottom (boolean) */}
                <div className={`flex ${flexDir} items-center gap-2 ${fullWidth ? `max-w-192` : null} w-full text-center py-${py}`}>
                    {/* Content container, 768px max width or full width */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export {
    Content
}