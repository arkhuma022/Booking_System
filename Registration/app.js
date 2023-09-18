const express = require('express');
const app = express();
const port = 3000;

// Sample doctor data (for demonstration purposes)
const doctors = [
    {
        id: 1,
        fullName: 'Dr. Z Hlongwa',
        specialty: 'Cardiologist',
        availability: 'Monday to Friday, 15:00 PM - 20:00 PM',
        contactInfo: 'Email: drzhlongwa.com | Phone: (061) 018-7577',
    },
    // Add more doctor profiles here
];

// Route to get a doctor's profile by ID
app.get('/api/doctors/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    const doctor = doctors.find((doc) => doc.id === doctorId);

    if (!doctor) {
        res.status(404).json({ error: 'Doctor not found' });
    } else {
        res.json(doctor);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
