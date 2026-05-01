import "./advisors.css"
import stonksy from '../assets/stonksy.webp';

export default function Advisors() {

    const researchers = [
        {name: "Advisor One", img: stonksy, position: "position", field: "field"},
        {name: "Advisor One", img: stonksy, position: "position", field: "field"},
        {name: "Advisor One", img: stonksy, position: "position", field: "field"},
        {name: "Advisor One", img: stonksy, position: "position", field: "field"},
        {name: "Advisor One", img: stonksy, position: "position", field: "field"},
        {name: "Advisor One", img: stonksy, position: "position", field: "field"},
        {name: "Advisor One", img: stonksy, position: "position", field: "field"},
        {name: "Advisor One", img: stonksy, position: "position", field: "field"}
    ]

    return(
        <section id="advisors">
            <h2 style={{color: 'white', textAlign: 'center', marginBottom : '3vw'}}>Advisors</h2>
                <div className="advisors-filter">
                    <button><span>All</span></button>
                    <button><span>Field 1</span></button>
                    <button><span>Field 2</span></button>
                    <button><span>Field 3</span></button>
                    <button><span>Field 4</span></button>
                </div>
            <div className="advisors-box">
                <div className="club-advisors">
                    {researchers.map((advisor) => (
                        <div className="advisor-container">
                            <img src={advisor.img} alt={advisor.name}/>
                            <h3>{advisor.name}</h3>
                            <h4>{advisor.position}</h4>
                            <h5>{advisor.field}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}