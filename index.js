window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});


document.addEventListener("DOMContentLoaded", function () {
    const speakers = [
        {
            name: "Dr.Akhilesh Sharma",
            designation: "President and CMO, Alkem Laboratories Ltd, Mumbai",
            image: "images/akhilesh_sharma-removebg-preview.png"
        },
        {
            name: "Dr.Ankit Gupta",
            designation: "Senior Key Expert, Siemens Healthineers, Bangalore",
            image: "images/ankit_gupta.png"
        },
        {
            name: "Dr.Kuldeep Verma",
            designation: "Staff Scientist, CDFD, Hyderabad ",
            image: "images/kuldeep-varma.png"
        },
        {
            name: "Dr.Rohit Manchanda",
            designation: "Professor, BSBE, IIT Bombay",
            image: "images/manchanda_r.png"
        },
        {
            name: "Dr.Neeta Kanekar",
            designation: "Assistant Professor, BSBE, IIT Bombay",
            image: "images/nkanekar-300x300-removebg-preview.png"
        },
        {
            name: "Dr.Prakriti Tayalia",
            designation: "Professor, BSBE, IIT Bombay",
            image: "images/prakriti-tayalia-removebg-preview.png"
        },
        {
            name: "Prof.B.J. Rao",
            designation: "Vice Chancellor, University of Hyderabad",
            image: "images/Prof_rao.png"
        },
        {
            name: "Dr.Sourav Datta",
            designation: "Associate Professor, IISER Bhopal",
            image: "images/sourav_datta.png"
        }
    ];

    const cardContainer = document.getElementById("cardContainer");

    // Dynamically generate speaker cards
    function generateSpeakerCards() {
        speakers.forEach(speaker => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${speaker.image}" alt="${speaker.name}">
                <div class="card-content">
                    <h3>${speaker.name}</h3>
                    <p>${speaker.designation}</p>
                </div>
            `;
            cardContainer.appendChild(card);
        });
    }

    generateSpeakerCards();
});
