import stonksy from '../assets/stonksy.webp';
import "./about.css";

export default function About() {
    return(
        <section id="about">
            <div className = "about-block">
                <img src = {stonksy} alt = "about-picture"/>
                <div className="inner-about-block">
                    <h2>About</h2>
                    <p>ABOUT US - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </section>
    );
}