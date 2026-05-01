import shrek from '../assets/shrekBath.avif';
import "./about.css";

export default function About() {
    return(
        <section id="about">
            <div className = "about-block">
                <img src = {shrek} alt = "about-picture" style={{width: '50%', marginRight: 'auto'}}/>
                <div className="inner-about-block">
                    <h2 style={{marginBottom: '2%'}}>About</h2>
                    <p style={{marginTop: '0px'}}>A student-led research community driven by transforming curiosity into evidence-based work.</p>
                </div>
            </div>
        </section>
    );
}