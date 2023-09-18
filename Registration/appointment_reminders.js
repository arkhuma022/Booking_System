const nodemailer = require('nodemailer');

// Configure nodemailer with your email service provider settings
const transporter = nodemailer.createTransport({
    service: 'YourEmailService',
    auth: {
        user: 'your@email.com',
        pass: 'yourpassword',
    },
});

// Function to send appointment reminders via email
function sendEmailReminder(appointmentData) {
    const mailOptions = {
        from: 'your@email.com',
        to: appointmentData.patientEmail,
        subject: 'Appointment Reminder',
        text: `Dear ${appointmentData.patientName},\n\nThis is a reminder for your appointment with Dr. ${appointmentData.doctor.fullName} at ${appointmentData.timeSlot}.\n\nPlease arrive on time for your appointment.\n\nSincerely, Your Doctor's Office`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Example usage:
const appointmentData = {
    doctor: { fullName: 'Dr. Z Hlongwa' },
    timeSlot: 'Monday 15:00 PM - 17:00 PM',
    patientName: 'John Doe',
    patientEmail: 'johndoe@email.com',
};

sendEmailReminder(appointmentData);
