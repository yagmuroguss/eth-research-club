export default function Researchers() {
    const studentfield1 = [
        {name: "name1", img: "link1", role: "role1"},
        {name: "name2", img: "link2", role: "role2"},
        {name: "name3", img: "link3", role: "role3"},
        {name: "name4", img: "link4", role: "role4"},
        {name: "name5", img: "link5", role: "role5"}
    ]

    const studentfield2 = [
        {name: "name1", img: "link1", role: "role1"},
        {name: "name2", img: "link2", role: "role2"},
        {name: "name3", img: "link3", role: "role3"},
        {name: "name4", img: "link4", role: "role4"},
        {name: "name5", img: "link5", role: "role5"}
    ]

    const studentfield3 = [
        {name: "name1", img: "link1", role: "role1"},
        {name: "name2", img: "link2", role: "role2"},
        {name: "name3", img: "link3", role: "role3"},
        {name: "name4", img: "link4", role: "role4"},
        {name: "name5", img: "link5", role: "role5"}
    ]
    const studentfields = [
        {studentfield1},
        {studentfield2},
        {studentfield3}
    ]
    return(
        <section id="researchers">
            <h1>Researchers</h1>
            <p>RESEARCHERS PER FIELD</p>
            <div className = "blackbox-researchers">
                <div className = "field-unit">
                    
                </div>
            </div>
        </section>
    );
}