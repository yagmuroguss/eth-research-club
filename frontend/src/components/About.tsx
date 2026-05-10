import space from '../assets/space.jpeg';
import "./about.css";

export default function About() {
    return(
        <section id="about">
            <div className = "about-block">
                <img className = "about-picture-class" src = {space} alt = "about-picture"/>
                <div className="inner-about-block">
                    <h2 style={{marginBottom: '2%'}}>About</h2>
                    <p style={{marginTop: '0px'}}>A student organization exploring computer graphics and visualization through collaborative projects and academic work. We host student projects advised by industry professionals and connect students with research and industry opportunities.</p>
                </div>
            </div>
        </section>
    );
}