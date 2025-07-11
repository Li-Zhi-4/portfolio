import { HomePage } from "@/pages/HomePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { AboutPage } from "@/pages/AboutPage";

// Projects
import { QualificationWorkflows } from "@/projects/QualificationWorkflows";
import { CustomForms } from "@/projects/CustomForms";

export const routes = [
    { path: "/",            element: <HomePage />},
    { path: "/portfolio",    element: <PortfolioPage />},
    { path: "/about",       element: <AboutPage />},

    { path: "/portfolio/qualification-workflows",           element: <QualificationWorkflows />},
    { path: "/portfolio/custom-forms",                      element: <CustomForms />},
]