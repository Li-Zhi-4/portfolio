// components
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
import {
    Sheet,
    SheetContent,
    SheetDescription,
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
// import { GitH } from "lucide-react"
// import { Linkedin } from "lucide-react"
// import { Sun } from "lucide-react"
import { Github, Linkedin, Menu, ExternalLink, Home } from "lucide-react"


const LINKS = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/portfolio" },
    { name: "Fun", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Resume", link: "#" }
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
                            <SheetHeader>
                                <SheetTitle>The Mobile Navigation Bar</SheetTitle>
                                <SheetDescription>
                                    test
                                </SheetDescription>
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