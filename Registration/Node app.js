// ...

// Route to add a new doctor
app.post('/api/doctors', (req, res) => {
    const newDoctor = req.body;
    newDoctor.id = doctors.length + 1; // Generate a unique ID for the new doctor
    doctors.push(newDoctor);
    res.json(newDoctor);
});

// Route to get a list of all doctors
app.get('/api/doctors', (req, res) => {
    res.json(doctors);
});

// Route to update an existing doctor's profile
app.put('/api/doctors/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    const updatedDoctor = req.body;

    const index = doctors.findIndex((doc) => doc.id === doctorId);
    if (index === -1) {
        res.status(404).json({ error: 'Doctor not found' });
    } else {
        doctors[index] = { ...doctors[index], ...updatedDoctor };
        res.json(doctors[index]);
    }
});

// Route to delete a doctor by ID
app.delete('/api/doctors/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    const index = doctors.findIndex((doc) => doc.id === doctorId);

    if (index === -1) {
        res.status(404).json({ error: 'Doctor not found' });
    } else {
        const deletedDoctor = doctors.splice(index, 1);
        res.json(deletedDoctor[0]);
    }
});

// ...
