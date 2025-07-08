import { Separator } from "@/components/ui/separator"
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
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Github, Linkedin, Menu } from "lucide-react"


function FloatingNavigationBar() {

    return (

        <header className="flex justify-center items-center fixed top-6 z-50 w-full">
            
            {/* Mobile Navigation Bar */}
            <div className="sm:hidden flex flex-row gap-4 justify-between items-center p-4 mx-6 w-full bg-sky-50/95 rounded-3xl drop-shadow-lg">
                <div className="flex flex-row gap-1 pl-3">
                    <Button variant="ghost" size="icon" className="text-sky-600 hover:bg-sky-100 cursor-pointer" asChild>
                        <a href="https://github.com/Li-Zhi-4" target="_blank" rel="noopener noreferrer">
                            <Github />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-sky-600 hover:bg-sky-100 cursor-pointer">
                        <a href="https://www.linkedin.com/in/sara-thompson-s44/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </a>
                    </Button>
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
                                The mobile navigation bar will go here once it's designed.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop/Tablet Navigation Bar */}
            <div className="hidden sm:flex flex-row gap-4 justify-center items-center sm:px-6 md:px-16 py-4 h-16 w-fit bg-sky-50/95 rounded-3xl drop-shadow-lg">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-none px-4 py2 text-sky-600 rounded-lg font-medium hover:bg-sky-100">
                                <Link to="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-none px-4 py2 text-sky-600 rounded-lg font-medium hover:bg-sky-100">
                                <Link to="/portfolio">Portfolio</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-none px-4 py2 text-sky-600 rounded-lg font-medium hover:bg-sky-100">
                                <Link to="/about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-none px-4 py2 text-sky-600 rounded-lg font-medium hover:bg-sky-100">
                                <Link to="/">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Separator orientation="vertical" />

                <div className="flex flex-row gap-1 pl-3">
                    <Button variant="ghost" size="icon" className="text-sky-600 hover:bg-sky-100 cursor-pointer" asChild>
                        <a href="https://github.com/Li-Zhi-4" target="_blank" rel="noopener noreferrer">
                            <Github />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-sky-600 hover:bg-sky-100 cursor-pointer">
                        <a href="https://www.linkedin.com/in/sara-thompson-s44/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </a>
                    </Button>
                </div>
            </div>

        </header>
    )
}

function NavigationBar() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            {/* Mobile Navigation Bar */}
            <div className="md:hidden flex flex-row justify-between items-center px-16 w-full h-[56px] shadow-sm">
                <Github />
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
                                The mobile navigation bar will go here once it's designed.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Navigation Bar */}
            <div className="hidden md:flex flex flex-row justify-between items-center px-16 w-full h-[56px] shadow-sm">
                <Github />
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Games</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink className="w-[300px]" asChild>
                                    <Link to='/ticket-to-ride-calculator'>Ticket to Ride</Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/error'>Features</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/error'>About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/error'>Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div>{/* Log in content will go here */}</div>
            </div>
        </header>
    )
}

export {
    FloatingNavigationBar,
    NavigationBar
}