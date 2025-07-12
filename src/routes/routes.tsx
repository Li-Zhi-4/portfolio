import { HomePage } from "@/pages/HomePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { AboutPage } from "@/pages/AboutPage";

// Projects
import { QualificationWorkflows } from "@/projects/QualificationWorkflows";
import { CustomForms } from "@/projects/CustomForms";
import { GeneDetek } from "@/projects/GeneDetek";

export const routes = [
    { path: "/",            element: <HomePage />},
    { path: "/portfolio",    element: <PortfolioPage />},
    { path: "/about",       element: <AboutPage />},

    { path: "/portfolio/qualification-workflows",           element: <QualificationWorkflows />},
    { path: "/portfolio/custom-forms",                      element: <CustomForms />},
    { path: "/portfolio/genedetek",                         element: <GeneDetek />},
]