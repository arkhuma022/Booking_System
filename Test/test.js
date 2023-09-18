const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../Booking_System/Registration/app'); // Make sure the path to your Express app is correct

const expect = chai.expect;
chai.use(chaiHttp);

describe('Doctor API', () => {
    it('should return a doctor by ID', (done) => {
        const doctorId = 1; // Replace with a valid doctor ID from your sample data

        chai.request(app)
            .get(`/api/doctors/${doctorId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('id', doctorId); // Verify that the ID matches
                expect(res.body).to.have.property('fullName');
                expect(res.body).to.have.property('specialty');
                expect(res.body).to.have.property('availability');
                expect(res.body).to.have.property('contactInfo');
                done();
            });
    });

    it('should return a 404 error for an invalid doctor ID', (done) => {
        const invalidDoctorId = 999; // An ID that does not exist in your sample data

        chai.request(app)
            .get(`/api/doctors/${invalidDoctorId}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('error', 'Doctor not found');
                done();
            });
    });
});
