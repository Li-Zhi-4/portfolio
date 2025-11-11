// components
import { Content } from "./Content"
import { Link } from "react-router-dom"

const NAVIGATION = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/portfolio" },
    { name: "About", link: "/about" },
    // { name: "Blog", link: "#" },
    // { name: "Resume", link: "/resume.pdf" }
];

const PROJECTS = [
    { name: "Free ShadCN Figma Kit (coming soon)", link: "#" }
]

const CONTACT = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sara-thompson-s44/" },
    { name: "GitHub", link: "https://github.com/Li-Zhi-4" },
]

export default function Footer() {

    return (
        <>
            <Content fullWidth={false} borderB={false}>
                <div className="flex flex-row justify-between w-full text-start text-neutral-500">
                    <div className="flex md:flex-row flex-col gap-16">
                        <ul className="flex flex-col gap-3">
                            <span className="mb-3 font-semibold text-neutral-800">Navigation</span>
                            {NAVIGATION.map((item, idx) => (
                                <li key={idx}>
                                    <Link to={item.link} className="font-light">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-3">
                            <span className="mb-3 font-semibold text-neutral-800">Products</span>
                            {PROJECTS.map((item, idx) => (
                                <li key={idx}>
                                    <Link to={item.link} className="font-light">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul className="flex flex-col gap-3">
                        <span className="mb-3 font-semibold text-neutral-800">Contact</span>
                        {CONTACT.map((item, idx) => (
                            <li key={idx}>
                                <Link to={item.link} className="font-light" target="_blank" rel="noopener noreferrer">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Content>
            <Content fullBorder={true} fullWidth={false}>
                <div className="flex flex-row justify-between w-full text-neutral-500">
                    <span className="section-label">Sara Thompson</span>
                    <span className="section-label">Product Designer • Engineer</span>
                </div>
            </Content>
        </>
    )
}