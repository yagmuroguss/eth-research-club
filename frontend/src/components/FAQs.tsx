import "./faqs.css"

const faq = [
    {question : "Are there any prerequisites I should have before applying to the research club ?", 
    answer : "None except motivation. Everything is provided by the club."},
    {question : "Which research fields does the club cover ?", 
    answer : "The different fields are listed above on this page. Depending on the effective, it is possible to propose your own project."},
    {question : "What if I don't like the research project I'm working in ?", 
    answer : "If possible, first finish the project. Otherwise, you can contact the administration of the club per mail : MAILCLUB."},
    {question : "How much time should I invest in the club ?", 
    answer : " We expect you to invest between 6 and 10 hours a week if you are taking part in a project. Each project will take 6 to 12 months. Concerning the different activity fields, you can consider these weekly approximations : "}
]

export default function FAQs() {
    return(
        <section id="faqs">
            <h2>FAQs</h2>
            <div className = "q-and-a">
                {faq.map((faqunit) => (
                    <div className ="faq-unit" key ={faqunit.question}>
                        <p style = {{fontSize: '2vw'}}> {faqunit.question} </p>
                        <p> {faqunit.answer} </p>
                    </div>
                ))}
                <div className = "approximations">
                    <p> - Media : 3 hours </p>
                    <p> - Membership : 3 hours </p>
                    <p> - Education : 4 hours </p>
                    <p> - Finances : 4 hours </p>
                    <p> - Event coordination : 5 hours </p>
                </div>
            </div>
        </section>
    );
}