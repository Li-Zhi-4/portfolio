import { Content1 } from "./Content"

export function Hero() {

    return (
        // <div className="flex justify-center w-full">
        //     <div className="flex sm:w-[80%] w-[90%] justify-center lg:px-16 sm:px-12 px-6 border-x border-b border-neutral-200">
        //         <div className="flex flex-col items-center py-32 gap-2 max-w-192 text-center">
        //             <span className="section-label">
        //                 Product Designer • Systems Engineer • UX Researcher
        //             </span>
        //             <h1 className="h1">
        //                 Part designer, part engineer, <br />
        //                 full-time <span className="sky-gradient">problem solver</span>.
        //             </h1>
        //             <p className="p">I’m a product owner and engineer combining design thinking with code to create seamless, human-centered digital products.</p>
        //         </div>
        //     </div>
        // </div>

        <Content1>
             <span className="section-label">
                Product Designer • Systems Engineer • UX Researcher
            </span>
            <h1 className="h1">
                Part designer, part engineer, <br />
                full-time <span className="sky-gradient">problem solver</span>.
            </h1>
            <p className="p">I’m a product owner and engineer combining design thinking with code to create seamless, human-centered digital products.</p>
    </Content1>
    )
}