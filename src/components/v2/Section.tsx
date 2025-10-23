// components
import { Content } from "./Content"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

function Section() {

    return (
        <Content fullWidth={false} >
            <div className="flex flex-row gap-16 w-full items-start text-start">
                
                <div className="flex flex-col gap-6">
                    <header className="flex flex-col gap-2">
                        <span className="section-label">Leavoda • present</span>
                        <h3 className="h3">Designing the Identity of a Field Service Management Platform</h3>
                    </header>

                    <div className="flex flex-col gap-4">
                        <p className="p">
                            Leading the redesign of a startup’s FSM platform, transforming its interface and 
                            user experience into a clean, modern foundation for future innovation.
                        </p>
                        <div className="flex flex-row gap-1">
                            <Badge>Full Stack</Badge>
                            <Badge>Full Stack</Badge>
                            <Badge>Full Stack</Badge>
                        </div>
                    </div>

                    <Button className="w-fit mt-8">Read more</Button>
                </div>

                <div className="bg-neutral-50 w-full h-full">
                    test
                </div>
            </div>
        </Content>
    )
}

export {
    Section
}