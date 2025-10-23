
interface ContentProps {
    children: React.ReactNode;
    py?: string;
    bg?: string;
    fullBorder?: boolean;
    fullWidth?: boolean;
}

/**
 * Container for components.
 * 
 * @param children components inside the container 
 * @returns 
 */
function Content({ children, py="12", bg, fullBorder=false, fullWidth=true }: ContentProps) {

    return (
        <div className={`w-[100%] bg-${bg} ${fullBorder ? `border-b border-neutral-200` : null}`}>
            {/* Outer container, screen width, screen border bottom (boolean) */}
            <div className={`flex sm:w-[80%] w-[90%] justify-center lg:px-16 sm:px-12 px-6 mx-auto border-x border-neutral-200 ${fullBorder ? null : 'border-b'}`}>
                {/* Inner container, 80-90% width, grey border on left/right, container border bottom (boolean) */}
                <div className={`flex flex-col items-center gap-2 ${fullWidth ? `max-w-192` : null} w-full text-center py-${py}`}>
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