import "./faqs.css"

const faq = [
    {question : "Lorem ipsum dolor sit amet consectetur adipiscing elit ?", 
    answer : "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
    {question : "Lorem ipsum dolor sit amet consectetur adipiscing elit ?", 
    answer : "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
    {question : "Lorem ipsum dolor sit amet consectetur adipiscing elit ?", 
    answer : "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
    {question : "Lorem ipsum dolor sit amet consectetur adipiscing elit ?", 
    answer : "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
]

export default function FAQs() {
    return(
        <section id="faqs">
            <h1>FAQs</h1>
            <div className = "q-and-a">
                {faq.map((faqunit) => (
                    <div className ="faq-unit" key ={faqunit.question}>
                        <h1> {faqunit.question} </h1>
                        <p> {faqunit.answer} </p>
                    </div>
                ))}
            </div>
        </section>
    );
}