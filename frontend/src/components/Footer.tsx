import "./footer.css"
import logoLinkedIn from '../assets/logo-linkedIn.png'
import logoWhatsApp from "../assets/logo-WhatsApp.png"
import logoGitHub from "../assets/logo-GitHub.webp"
import logoDiscord from "../assets/logo-Discord.webp"
import logoInstagram from "../assets/logo-Instagram.png"

const logos = [
    {img : logoLinkedIn, alt : "linkedIn", url : "myurl.fr"},
    {img : logoWhatsApp, alt : "WhatsApp", url : "myurl.fr"},
    {img : logoGitHub, alt : "GitHub", url : "myurl.fr"},
    {img : logoDiscord, alt : "Discord", url : "myurl.fr"},
    {img : logoInstagram, alt : "Instagram", url : "myurl.fr"}
]

export default function Footer() {
    return(
        <section id="contact">
            <div className = "block-contact">
                <h1>ETH Research Club</h1>
                <div className = "emails-contact">
                    <p> Contact : research-club-eth@ethz.ch </p>
                </div>
                <div className = "logos-newsletter">
                    <div className = "logos">
                        {logos.map((logounit) => (
                            <div className = "logo-unit" key = {logounit.alt}>
                                <a href={logounit.url} target="_blank" rel="noreferrer">
                                    <img src={logounit.img} alt={logounit.alt} />
                                </a>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className = "newsletter">
                <div className="newsletter-form">
                    <h2> Subscribe to our newsletter </h2>
                    <input type="email" placeholder="email@ethz.ch" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className = "legalmentions">
                <a href = "legal-disclaimer"    >
                    <h3> Legal Disclaimer </h3>
                </a>
            </div>
        </section>
    );
}