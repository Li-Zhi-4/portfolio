import { HomePage } from "@/pages/HomePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { AboutPage } from "@/pages/AboutPage";

// Projects
import { QualificationWorkflows } from "@/projects/QualificationWorkflows";

export const routes = [
    { path: "/",            element: <HomePage />},
    { path: "/portfolio",    element: <PortfolioPage />},
    { path: "/about",       element: <AboutPage />},

    { path: "/portfolio/qualification-workflows",            element: <QualificationWorkflows />},
]