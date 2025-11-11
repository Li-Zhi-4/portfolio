// components
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Content } from "./Content"
import { Separator } from "../ui/separator"

// icons
import logo from "/public/Benzene.svg"
import { Github, Linkedin, Menu, ExternalLink } from "lucide-react"


const LINKS = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About", link: "/about" },
    // { name: "Blog", link: "#" },
    // { name: "Resume", link: "#" }
]

export default function NavigationBar() {

            

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
            <Content fullBorder={true} borderB={false} fullWidth={false} py=""> 
                
                {/* Mobile Navigation Bar */}
                <div className="lg:hidden flex flex-row justify-between items-center w-full h-16">
                    <div className="flex flex-row gap-4 items-center">
                        <img src={logo} alt="portfolio logo" className="w-[32px] h-[32px]" />
                        <span>Sara Thompson</span>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                        <SheetHeader className="flex items-center">
                            <SheetTitle>Menu</SheetTitle>
                            <NavigationMenu>
                                <NavigationMenuList className="flex flex-col py-6">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className="bg-none px-4 py2 text-neutral-600 rounded-lg font-medium hover:bg-neutral-100">
                                            <Link to="/">Home</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className="bg-none px-4 py2 text-neutral-600 rounded-lg font-medium hover:bg-neutral-100">
                                            <Link to="/portfolio">Portfolio</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className="bg-none px-4 py2 text-neutral-600 rounded-lg font-medium hover:bg-neutral-100">
                                            <Link to="/about">About</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    {/* <NavigationMenuItem>
                                        <NavigationMenuLink asChild className="bg-none px-4 py2 text-sky-600 rounded-lg font-medium hover:bg-sky-100">
                                            <Link to="/">Contact</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem> */}
                                    <Separator className="my-4"/>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className="bg-none px-4 py2 text-neutral-600 rounded-lg font-medium hover:bg-neutral-100">
                                            <Link to="https://github.com/Li-Zhi-4" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                                                GitHub
                                                <ExternalLink className="text-sky-blue" />
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className="bg-none px-4 py2 text-neutral-600 rounded-lg font-medium hover:bg-neutral-100">
                                            <Link to="https://www.linkedin.com/in/sara-thompson-s44/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                                                LinkedIn
                                                <ExternalLink className="text-sky-blue" />
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                        </NavigationMenu>
                        </SheetHeader>
                    </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Navigation Bar */}
                <div className="hidden lg:flex flex flex-row justify-between items-center w-full h-16">
                    <div className="flex flex-row gap-4 items-center">
                        <img src={logo} alt="portfolio logo" className="w-[32px] h-[32px]" />
                        <span>Sara Thompson</span>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {LINKS.map((item, idx) => (
                                <NavigationMenuItem key={idx}>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex flex-row gap-1">
                        <Button variant="ghost" size="icon" className="hover:bg-neutral-100 cursor-pointer" asChild>
                            <a href="https://github.com/Li-Zhi-4" target="_blank" rel="noopener noreferrer">
                                <Github />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-neutral-100 cursor-pointer">
                            <a href="https://www.linkedin.com/in/sara-thompson-s44/" target="_blank" rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                        </Button>
                    </div>
                </div>

            </Content>
        </nav>
    )
}