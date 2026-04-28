import stonksy from '../assets/stonksy.webp';

export default function Events() {
    const eventgrid = [
        {img : stonksy, name : "name-event1", date : "01/01/01", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
        {img : stonksy, name : "name-event2", date : "02/02/02", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
        {img : stonksy, name : "name-event3", date : "15/12/25", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
    ]
    return(
        <section id="events">
            <h1>Events</h1>
            <div className = "news-grid">
                {eventgrid.map((eventunit) => (
                    <div className ="events" key = {eventunit.date}>
                        <h3>{eventunit.name}</h3>
                        <img src={eventunit.img} alt={eventunit.name} />
                        <p>{eventunit.date}</p>
                        <p>{eventunit.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}