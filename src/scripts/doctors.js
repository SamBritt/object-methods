const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

// officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate

let doctorBill = {
    officeName: "Saint Thomas Medical Plaza",
    streetAddress: "300 21st Ave South",
    doctorName: "Dr. Bruce Richards",
    patientName: "Samuel James Britt",
    visitDate: "June 4th, 2019",
    amountBilled: 5,
    dueDate: "August 19th, 2019"
}
console.log("Patient:", doctorBill[patient], "Visited:", doctorBill[dateVisited], "Owed:", doctorBill[owed]);
//values
console.log(Object.values(doctorBill))
//keys
for(let i of Object.keys(doctorBill)){
    console.log(i)
}
const buildDoctorDOM = () => {
    const docFrag = document.createDocumentFragment();
    const section = document.createElement('section');
    for(let i of Object.keys(doctorBill)){
        const span = document.createElement('span');
        span.textContent = i;
        section.appendChild(span);
    }
    docFrag.appendChild(section);
    document.getElementById('app').appendChild(docFrag);
}
buildDoctorDOM();

const dinner = {
    name: "Spaghetti",
    type: "italian",
    servings: 2,
    ingredients: ["spaghetti", "tomato sauce", "ground beef", "onions"],
    vegetarian: false
}

const buildFoodDOM = () => {
    let docFrag = document.createDocumentFragment();
    for(let item of Object.entries(dinner)){
        let p = document.createElement('p');
        p.textContent = item[0] + ': ';
        p.textContent += item[1];
        docFrag.appendChild(p)
        let ingredients = dinner.ingredients;
        
    }
    document.querySelector('.food').appendChild(docFrag);
}
buildFoodDOM();