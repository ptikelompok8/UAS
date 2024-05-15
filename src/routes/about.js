import React from 'r    eact';
import '../routes/aboutcss.css';
import WillbertImage from "../image/wb.png";
import RichardImage from "../image/richard.png";
import DavinImage from "../image/davin.png";
import FerdiImage from "../image/ferdi.png";
import JapImage from "../image/calvin.png";

function TeamMember({ name, role, description, links, image }) {
    return (
        <div className="member">
            <img src={image} alt={name} className={`img ${name.toLowerCase().split(' ').join('-')}`} />
            <h2>{name}</h2>
            <h5>{role}</h5>
            <p>{description}</p>
            <div className="links">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <i className={`fab ${link.icon}`} aria-hidden="true"></i>
                    </a>
                ))}
            </div>
        </div>
    );
}

function About() {
    const teamMembers = [
        {
            name: "Davin Christopher",
            role: "00000085465",
            description: "Mahasiswa Informatika Universitas Multimedia Nusantara angkatan 2023. Kelas B",
            image: DavinImage,
            links: [
                { url: "https://www.instagram.com/davin_chr369/", icon: "fa-instagram" },
                { url: "https://www.linkedin.com/in/davee-undefined-43650428a", icon: "fa-linkedin-in" },
            ]
        },
        {
            name: "Richard Wijaya",
            role: "00000087656",
            description: "Mahasiswa Informatika Universitas Multimedia Nusantara angkatan 2023. Kelas B",
            image: RichardImage,
            links: [
                { url: "https://www.instagram.com/richardwijaya._/", icon: "fa-instagram" },
            ]
        },
        {
            name: "Ferdiyanto",
            role: "00000082619",
            description: "Mahasiswa Informatika Universitas Multimedia Nusantara angkatan 2023. Kelas B",
            image: FerdiImage,
            links: [
                { url: "https://www.linkedin.com/in/ferdi-68509b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", icon: "fa-linkedin-in" },
                { url: "https://www.instagram.com/ferdi_pnd/", icon: "fa-instagram" },

            ]
        },
        {
            name: "Jap Feodrian Calvin",
            role: "00000083500",
            description: "Mahasiswa Informatika Universitas Multimedia Nusantara angkatan 2023. Kelas B",
            image: JapImage,
            links: [
                { url: "https://www.instagram.com/calvnvn/", icon: "fa-instagram" },

            ]
        },
        {
            name: "Willbert Budi Lian",
            role: "00000082864",
            description: "Mahasiswa Informatika Universitas Multimedia Nusantara angkatan 2023. Kelas B",
            image: WillbertImage,
            links: [
                { url: "https://www.instagram.com/willbertbudi/", icon: "fa-instagram" },
                { url: "https://github.com/rascalosh", icon: "fa-github" },
            ]
        }
    ];

    return (
        <section>
            <h1 className="title">Our Team</h1>
            <div className="team-row">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </section>
    );
}

export default About;
