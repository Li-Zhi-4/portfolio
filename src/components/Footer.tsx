import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"



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
                                <a href="">Home</a>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className="text-sky-50" asChild>
                                <a href="">Projects</a>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className="text-sky-50" asChild>
                                <a href="">About</a>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="link" className="text-sky-50" asChild>
                                <a href="">Contact</a>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}