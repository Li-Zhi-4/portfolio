// components
import { Content } from "./Content"
import { Link } from "react-router-dom"

const NAVIGATION = [
    { name: "Home", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Fun", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Resume", link: "#" }
];

const PROJECTS = [
    { name: "ShadCN Figma Kit", link: "#" }
]

const CONTACT = [
    { name: "LinkedIn", link: "#" },
    { name: "GitHub", link: "#" },
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
                                <Link to={item.link} className="font-light">{item.name}</Link>
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