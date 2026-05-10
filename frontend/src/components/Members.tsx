import "./members.css"
import stonksy from '../assets/stonksy.webp';

export default function Researchers() {
    const fields = [
        {field: "Field 1"},
        {field: "Field 2"}
    ]

    const members = [
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
        <section id="members">
            <h2 style={{color: 'white', textAlign: 'center', marginBottom: '3vw'}}>Members</h2>
                <div className="members-filter">
                    <button className="filter-button"><span>All</span></button>
                    <button className="filter-button"><span>Board Members</span></button>
                    <button className="filter-button"><span>Education Team</span></button>
                    <button className="filter-button"><span>Event Team</span></button>
                    <div className = "low-phone-buttons">
                        <button className="filter-button"><span>Media Team</span></button>
                        <button className="filter-button"><span>Finance Team</span></button>
                        <button className="filter-button"><span>Membership Team</span></button>
                    </div>
                </div>
            <div className="member-box">
                <div className="team-members">
                    {members.map((students) => (
                        <div className="student-members">
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