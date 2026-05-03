import "./publications.css"
import stonksy from "../assets/stonksy.webp"

const fieldslist = [
    {img : stonksy, alt : "monimg1", fieldname : "fieldname1"},
    {img : stonksy, alt : "monimg2", fieldname : "fieldname2"},
    {img : stonksy, alt : "monimg3", fieldname : "fieldname3"}
]

export default function Fields() {
    return(
        <section id="publications">
            <h2>Publications</h2>
            <div className = "field-box">
                {fieldslist.map((fieldunit) =>
                    <div key = {fieldunit.alt}>
                        <img src = {fieldunit.img} alt = {fieldunit.alt}></img>
                        <h3>{fieldunit.fieldname}</h3>
                    </div>
                )}
            </div>
        </section>
    );
}