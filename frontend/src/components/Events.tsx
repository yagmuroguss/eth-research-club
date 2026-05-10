import stonksy from '../assets/stonksy.webp';
import "./events.css";
import { Link } from 'react-router-dom';

export default function Events() {
    const eventgrid = [
        {img : stonksy, name : "name-event1", date : "01/01/01", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
        {img : stonksy, name : "name-event2", date : "02/02/02", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
        {img : stonksy, name : "name-event3", date : "15/12/25", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
        {img : stonksy, name : "name-event1", date : "01/01/01", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
        {img : stonksy, name : "name-event2", date : "02/02/02", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
        {img : stonksy, name : "name-event3", date : "15/12/25", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
    ]
    return(
        <section id="events">
            <div className="events-block">
                <Link to="/events-page" className="events-link"><h2>Events {"»"}</h2></Link>
                <div className = "news-grid">
                    {eventgrid.map((eventunit) => (
                        <div className ="event-card" key = {eventunit.date}>
                            <h3 style={{textAlign: 'center'}}>{eventunit.name}</h3>
                            <img src={eventunit.img} alt={eventunit.name} />
                            <p>{eventunit.date}</p>
                            <p>{eventunit.desc}</p>
                            <button><span>View Event</span></button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}