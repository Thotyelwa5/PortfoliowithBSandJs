// about section
let about = document.querySelector('section#about .row:last-child');
let aboutContents =[
    "About Thotyelwa",
    "Dance with me"
]
// Loop through the content
aboutContents.forEach( (content)=>{
about.innerHTML += `
<p class='lead'>${content}</p>
`
} )
// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: 'Attending Life Choices Academy full-stack web development course',
        place: 'Lansdowne',
        type: '',
        certificate: ''
    },
    {
        id: 2,
        year: 2019,
        description: ' Attended Northlink College',
        place: 'Tygerberg',
        type: 'Incomplete',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my Metric certificates',
        place: 'Silikamva Hight School',
        type: 'certificate',
        certificate: ''
    },
    
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})