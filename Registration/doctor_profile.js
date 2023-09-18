document.addEventListener('DOMContentLoaded', function () {
    const doctorList = document.getElementById('doctorList');
    const doctorDetails = document.getElementById('doctorDetails');

    // Sample doctor data (for demonstration purposes)
    const doctors = [
        {
            id: 1,
            fullName: 'Dr. John Smith',
            specialty: 'Cardiologist',
            bio: 'Dr. John Smith is an experienced cardiologist...',
            availability: 'Monday to Friday, 9:00 AM - 5:00 PM',
        },
        // Add more doctor profiles here
    ];

    // Function to render the list of doctors
    function renderDoctorList() {
        doctorList.innerHTML = '';
        doctors.forEach((doctor) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" data-doctor-id="${doctor.id}">${doctor.fullName}</a>`;
            doctorList.appendChild(listItem);
        });
    }

    // Function to display doctor details when a doctor is selected
    function displayDoctorDetails(doctorId) {
        const doctor = doctors.find((doc) => doc.id === doctorId);
        if (doctor) {
            const detailsHtml = `
                <h2>${doctor.fullName}</h2>
                <p>Specialty: ${doctor.specialty}</p>
                <p>Bio: ${doctor.bio}</p>
                <p>Availability: ${doctor.availability}</p>
            `;
            doctorDetails.innerHTML = detailsHtml;
        } else {
            doctorDetails.innerHTML = 'Doctor not found.';
        }
    }

    // Event listener for clicking on a doctor's name
    doctorList.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.tagName === 'A') {
            const doctorId = parseInt(event.target.getAttribute('data-doctor-id'));
            displayDoctorDetails(doctorId);
        }
    });

    // Initial rendering of the doctor list
    renderDoctorList();
});
