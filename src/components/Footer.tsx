import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import footerImg from '/src/assets/footer.png'

export function Footer() {

    return (
        <div className='flex flex-col w-full h-fit bg-sky-800'>
            <img src={footerImg} alt="Footer divider image" className="w-full"/>
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center px-16 py-6 h-fit w-full bg-sky-800">
                <span className="text-sky-50 text-sm self-center">© 2025 Sara Thompson </span>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button variant="link" className="text-sky-50" asChild>
                                <Link to="/">Home</Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className="text-sky-50" asChild>
                                <Link to="/portfolio">Projects</Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className="text-sky-50" asChild>
                                <Link to="/about">About</Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className="text-sky-50" asChild>
                                <Link to="/">Contact</Link>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}