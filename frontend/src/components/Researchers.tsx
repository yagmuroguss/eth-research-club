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
            <h2 style={{color: 'white', textAlign: 'center', marginBottom: '3vw'}}>Members</h2>
                <div className="researchers-filter">
                    <button className="research-button"><span>All</span></button>
                    <button className="research-button"><span>Board Members</span></button>
                    <button className="research-button"><span>Education Team</span></button>
                    <button className="research-button"><span>Event Coordination Team</span></button>
                    <button className="research-button"><span>Media Team</span></button>
                    <button className="research-button"><span>Finance Team Team</span></button>
                    <button className="research-button"><span>Membership Team</span></button>
                </div>
            <div className="researchers-box">
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