import "./researchers.css"
import stonksy from '../assets/stonksy.webp';

export default function Researchers() {
    const fields = [
        {field: "Field 1"},
        {field: "Field 2"}
    ]

    const researchers = [
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"},
        {name: "Student One", img: stonksy, position: "position", major: "major", field: "field"}
    ]

    return(
        <section id="researchers">
            <div className="researchers-box">
                <h2 style={{color: 'white', textAlign: 'center'}}>Researchers</h2>
                <div className="researchers-filter">
                    <button className="research-button"><span>All</span></button>
                    <button className="research-button"><span>Field 1</span></button>
                    <button className="research-button"><span>Field 2</span></button>
                    <button className="research-button"><span>Field 3</span></button>
                    <button className="research-button"><span>Field 4</span></button>
                </div>
                <div className="team-members">
                    {researchers.map((students) => (
                        <div className="student-researchers">
                            <img src={students.img} alt={students.name}/>
                            <h3>{students.name}</h3>
                            <h6>{students.major}</h6>
                            <h4>{students.position}</h4>
                            <h5>{students.field}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}