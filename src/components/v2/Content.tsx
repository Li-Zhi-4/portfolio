
interface ContentProps {
    children: React.ReactNode;
}

function Content1({ children }: ContentProps) {

    return (
        <div className="flex sm:w-[80%] w-[90%] justify-center lg:px-16 sm:px-12 px-6 mx-auto border-x border-b border-neutral-200">
            <div className="flex flex-col items-center py-32 gap-2 max-w-192 text-center">
                {children}
            </div>
        </div>
    )
}

export {
    Content1
}