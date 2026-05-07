import "./projects.css"
import stonksy from "../assets/stonksy.webp"
import brain from "../assets/brain.jpeg"

const fieldslist = [
    {img : brain, alt : "brain", projectname : "Rotating Brain using WebGPU", description : "We design a rotating brain for our website using WebGPU."},
    {img : stonksy, alt : "monimg2", projectname : "fieldname2", description : "hello"},
    {img : stonksy, alt : "monimg3", projectname : "fieldname3", description : "hello"}
]

export default function Projects() {
    return(
        <section id="projects">
            <h2>Projects</h2>
            <div className = "project-box">
                {fieldslist.map((project) =>
                    <div key = {project.alt}>
                        <img src = {project.img} alt = {project.alt}></img>
                        <h3>{project.projectname}</h3>
                        <p>{project.description}</p>
                        <button><span>See Details</span></button>
                    </div>
                )}
            </div>
        </section>
    );
}