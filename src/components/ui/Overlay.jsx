import { cvData } from '../../data/cvData'
import Section from './Section'

const Overlay = () => {
    const { personal, education, experience, projects, skills, certifications, internships, languages } = cvData

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-y-auto text-white z-10 scroll-smooth bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80 backdrop-blur-sm">

            {/* Hero Section */}
            <Section className="items-start">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink mb-6 animate-pulse-slow">
                            {personal.name}
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-light text-gray-200 max-w-3xl tracking-wide">
                            {personal.title}
                        </h2>
                        <p className="mt-8 text-xl text-gray-400 max-w-2xl leading-relaxed">
                            {personal.summary}
                        </p>
                        <div className="mt-10 flex gap-6">
                            <a href={personal.links.github} target="_blank" rel="noopener noreferrer"
                                className="px-8 py-4 bg-secondary/80 backdrop-blur-[2px] border border-gray-700 hover:border-accent-purple hover:bg-accent-purple/10 rounded-full transition-all duration-300 transform hover:-translate-y-1 will-change-transform">
                                GitHub
                            </a>
                            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer"
                                className="px-8 py-4 bg-accent-blue hover:bg-blue-600 shadow-lg shadow-blue-500/30 rounded-full transition-all duration-300 transform hover:-translate-y-1 will-change-transform">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div className="w-64 h-64 md:w-80 md:h-80 relative shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue to-accent-purple rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
                        <img
                            src="/profile.png"
                            alt={personal.name}
                            className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 shadow-2xl"
                        />
                    </div>
                </div>
            </Section>

            {/* Experience Section */}
            <Section>
                <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Experience</h3>
                <div className="space-y-16">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative pl-10 border-l border-gray-800 hover:border-accent-purple transition-colors duration-500">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <h4 className="text-3xl font-bold text-white mb-1">{exp.role}</h4>
                            <p className="text-xl text-accent-purple font-medium mb-2">{exp.company}</p>
                            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">{exp.date} | {exp.location}</p>
                            <p className="text-gray-300 leading-relaxed text-lg">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Internships Section */}
            <Section>
                <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Internships</h3>
                <div className="space-y-16">
                    {internships.map((intern, index) => (
                        <div key={index} className="relative pl-10 border-l border-gray-800 hover:border-accent-blue transition-colors duration-500">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <h4 className="text-2xl font-bold text-white mb-1">{intern.role}</h4>
                            <p className="text-lg text-accent-blue font-medium mb-2">{intern.company}</p>
                            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">{intern.date} | {intern.location}</p>
                            {intern.description && <p className="text-gray-400 leading-relaxed">{intern.description}</p>}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Projects Section */}
            <Section>
                <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-accent-purple/50 hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-purple/10 will-change-transform">
                            <h4 className="text-2xl font-bold mb-3 group-hover:text-accent-purple transition-colors">{project.name}</h4>
                            <p className="text-sm text-accent-blue font-mono mb-4">{project.tech}</p>
                            <p className="text-gray-400 leading-relaxed">{project.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Skills Section */}
            <Section>
                <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-[2px]">
                            <h4 className="text-xl font-semibold mb-6 text-accent-pink border-b border-white/10 pb-2">{skillGroup.category}</h4>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-accent-blue hover:text-white transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Education Section */}
            <Section>
                <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Education</h3>
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-secondary/20 p-8 rounded-2xl border-l-4 border-accent-blue">
                            <h4 className="text-3xl font-bold text-white">{edu.school}</h4>
                            <p className="text-xl text-gray-300 mt-2">{edu.degree}</p>
                            <p className="text-sm text-gray-500 mt-1 mb-4">{edu.date} | {edu.location}</p>
                            {edu.details && <p className="text-gray-400 leading-relaxed">{edu.details}</p>}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Certifications Section */}
            <Section>
                <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-secondary/30 backdrop-blur-[2px] p-8 rounded-2xl border border-white/5 hover:border-accent-pink/50 transition-all duration-300">
                            <h4 className="text-2xl font-bold text-white mb-2">{cert.name}</h4>
                            <span className="inline-block px-3 py-1 bg-accent-pink/20 text-accent-pink text-xs rounded-full mb-4 border border-accent-pink/20">
                                {cert.status}
                            </span>
                            <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Languages Section */}
            <Section>
                <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Languages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {languages.map((lang, index) => (
                        <div key={index} className="bg-secondary/20 p-6 rounded-xl text-center border border-white/5 hover:bg-secondary/40 transition-colors">
                            <h4 className="text-2xl font-bold text-white mb-2">{lang.name}</h4>
                            <p className="text-accent-blue font-medium mb-2">{lang.level}</p>
                            <p className="text-sm text-gray-500">{lang.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Contact Section */}
            <Section className="items-center text-center">
                <h3 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">Get In Touch</h3>
                <p className="text-2xl text-gray-300 mb-12 max-w-2xl font-light">
                    Interested in working together? Feel free to reach out!
                </p>
                <div className="flex flex-col gap-6 items-center">
                    <a href={`mailto:${personal.email}`} className="text-3xl md:text-4xl font-bold text-white hover:text-accent-purple transition-colors duration-300">
                        {personal.email}
                    </a>
                    <div className="flex gap-8 mt-4">
                        <p className="text-lg text-gray-400">{personal.phone}</p>
                        <span className="text-gray-600">•</span>
                        <p className="text-lg text-gray-400">{personal.location}</p>
                    </div>
                </div>
                <footer className="mt-32 text-gray-600 text-sm font-mono">
                    © {new Date().getFullYear()} {personal.name}. All rights reserved.
                </footer>
            </Section>
        </div>
    )
}

export default Overlay
