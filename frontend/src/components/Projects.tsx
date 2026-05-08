import "./projects.css"
import brain from "../assets/brain-webGL.jpeg"
import heart from "../assets/heart.jpeg";
import eye from "../assets/eye.jpeg";
import { Link } from 'react-router-dom';

const fieldslist = [
    {img : brain, alt : "brain", projectname : "Rotating Brain using WebGPU", description : "We are designing a geometric rotating brain using WebGL and tree.js. This project will be put on the website when finished."},
    {img : heart, alt : "monimg2", projectname : "Beating Heart Simulation", description : "We are designing a beating heart simulation using WebGL and shaders. "},
    {img : eye, alt : "monimg3", projectname : "Realistic Eye Simulation", description : "We are designing a realistic eye using shaders that changes states when moving the mouse."}
]

export default function Projects() {
    return(
        <section id="projects">
            <div className="projects-container">
                <Link to="/projects" className="projects-link"><h2>Projects {"»"}</h2></Link>
                    <div className = "project-box">
                        {fieldslist.map((project) =>
                        <div className="project" key = {project.alt}>
                            <img src = {project.img} alt = {project.alt}></img>
                            <h3>{project.projectname}</h3>
                            <p>{project.description}</p>
                            <button><span>See Details</span></button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}