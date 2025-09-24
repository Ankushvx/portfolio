import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Software Developer"
                        icon="/icons/code.svg"
                        description="I create innovative and reliable software products with unique ideas that solve real-world problems and add value to businesses."
                        projects={4} />
                    <AboutCard
                        title="Web Design"
                        icon="/icons/design.svg"
                        description="I craft responsive, user-friendly, and visually engaging websites with smooth front-end coding, ensuring a seamless user experience."
                        projects={6} />
                    <AboutCard
                        title="Mobile"
                        icon="/icons/phone.svg"
                        description="I develop high-performance cross-platform mobile applications using Flutter, delivering consistent functionality and design across iOS and Android."
                        projects={3} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Ankush Verma</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">I am a passionate Web & Mobile Application Developer with 4.5+ years of experience in C#, .NET Core, and Web Application Development, along with 2 years of expertise in Flutter for mobile apps.<br/><br/>
                    My expertise lies in designing and developing scalable solutions, combining Front-End Development, UI/UX design principles, and back-end logic to deliver complete applications. Over the years, I’ve collaborated with companies and clients, creating products that enhance business efficiency and improve user experiences.
                  <br/>  <br/>I am naturally perseverant, confident, curious, and innovative — constantly challenging myself to learn new technologies and push the limits of what I can create</p>
                </div>
            </div>

            <div className="flex partners justify-space">  
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" /> 
                <Image src="/images/partners/subharti.png" height={45} width={200} alt="subharti" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}