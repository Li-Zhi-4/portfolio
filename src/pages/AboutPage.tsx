
import { TitleSection } from "@/components/TitleSection"
import { Footer } from "@/components/Footer"
import divider from '/src/assets/divider.png'

const EDUCATION = [
    {
        descriptor: "University of Waterloo",
        title: "Systems Design Engineering | Master of Engineering",
        date: "September 2024 - present",
        notes: ["Graduated with Honours"]
    },
    {
        descriptor: "University of Waterloo",
        title: "Nanotechnology Engineering | Bachelor of Applied Science",
        date: "September 2019 - April 2024",
        notes: []
    }
]

const ACTIVITIES = [
    {
        descriptor: "University of Waterloo",
        title: "Varsity Rowing Team",
        date: "September 2023 - present",
        notes: []
    },
    {
        descriptor: "University of Waterloo",
        title: "Dragon Boat Club",
        date: "May 2023 - August 2023",
        notes: []
    },
    {
        descriptor: "University of Waterloo",
        title: "Animusic Ensembles Club",
        date: "May 2022 - May 2025",
        notes: []
    },
    {
        descriptor: "Lord of the Rings: Rise to War",
        title: "Content & UX Designer for Game Community Platform",
        date: "January 2022 - August 2022",
        notes: []
    },
]

const AWARDS = [
    {
        descriptor: "University of Waterloo",
        title: "The President’s Athlete – Academic Honour Roll",
        date: "2023, 2024",
        notes: []
    },
    {
        descriptor: "Competition",
        title: "Linda Carson Memorial Interdisciplinary Award",
        date: "December 2024",
        notes: []
    },
    {
        descriptor: "Competition",
        title: "Norman Esch Entrepreneurship Award Finalist",
        date: "April 2024",
        notes: []
    },
    {
        descriptor: "Music",
        title: "The Royal Conservatory of Music: Grade 9 (piano)",
        date: "April 2019",
        notes: []
    },
    {
        descriptor: "Honours",
        title: "Duke of Edinburgh: Bronze, Silver, Gold",
        date: "2015, 2016, 2018",
        notes: []
    }
]


export function AboutPage() {

    return (
        <div className="w-screen">
            {/* Title Section */}
            <div className="flex flex-col gap-16 justify-center items-center py-6 px-6 sm:py-16 sm:px-16 w-screen h-[480px] bg-linear-to-b from-sky-50 to-white">
                <div className="max-w-[768px]">
                    <TitleSection
                        descriptor="About"
                        title="Profile"
                        description="This page highlights my educational background, the activities and organizations I’ve been involved with, and some of the awards I’ve received along the way."/>
                </div>
            </div>

            {/* Divider Section */}
            <div className="w-screen">
                <img src={divider} alt="divider" className="w-screen"/>
            </div>

            {/* Information Section */}
            <div className="flex flex-col gap-6 justify-center items-center w-full px-6 py-16 sm:p-16">
                {/* Education Section */}
                <div className="w-full max-w-3xl">
                    <h2 className="text-4xl font-bold text-neutral-800">Education</h2>
                    <div className="flex flex-col gap-6 p-6">
                        {Object.entries(EDUCATION).map( ([key, value]) => (
                            <div className="flex flex-col w-full" key={key}>
                                <span className="text-neutral-500 text-xs tracking-widest font-semibold">{value.descriptor.toUpperCase()}</span>
                                <h1 className="font-semibold text-2xl">{value.title}</h1>
                                <span className="text-neutral-500 pt-1">{value.date}</span>
                                <ul  className="list-disc pl-6 pt-2">
                                    {value.notes.length === 0 ? "" : value.notes.map( (note, idx) => (
                                        <li className="text-xl text-neutral-500" key={idx}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activities Section */}
                <div className="w-full max-w-3xl">
                    <h2 className="text-4xl font-bold text-neutral-800">Activities & Involvement</h2>
                    <div className="flex flex-col gap-6 p-6">
                        {Object.entries(ACTIVITIES).map( ([key, value]) => (
                            <div className="flex flex-col w-full" key={key}>
                                <span className="text-neutral-500 text-xs tracking-widest font-semibold">{value.descriptor.toUpperCase()}</span>
                                <h1 className="font-semibold text-2xl">{value.title}</h1>
                                <span className="text-neutral-500 pt-1">{value.date}</span>
                                <ul  className="list-disc pl-6 pt-2">
                                    {value.notes.length === 0 ? "" : value.notes.map( (note, idx) => (
                                        <li className="text-xl text-neutral-500" key={idx}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Award Section */}
                <div className="w-full max-w-3xl">
                    <h2 className="text-4xl font-bold text-neutral-800">Awards</h2>
                    <div className="flex flex-col gap-6 p-6">
                        {Object.entries(AWARDS).map( ([key, value]) => (
                            <div className="flex flex-col w-full" key={key}>
                                <span className="text-neutral-500 text-xs tracking-widest font-semibold">{value.descriptor.toUpperCase()}</span>
                                <h1 className="font-semibold text-2xl">{value.title}</h1>
                                <span className="text-neutral-500 pt-1">{value.date}</span>
                                <ul  className="list-disc pl-6 pt-2">
                                    {value.notes.length === 0 ? "" : value.notes.map( (note, idx) => (
                                        <li className="text-xl text-neutral-500" key={idx}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}