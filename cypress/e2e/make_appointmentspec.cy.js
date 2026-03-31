// Import page objects
import loginPage from '../support/pages/loginPage';
import appointmentPage from '../support/pages/appointmentPage';
import historyPage from '../support/pages/historyPage';

describe('CURA Healthcare MD#2 Tests', () => {
  // Demo account credentials
  const username = 'John Doe'; // replace if different
  const password = 'ThisIsNotAPassword'; // replace if different

  it('Scenario 1 - Make an Appointment', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    loginPage.login(username, password);

    // Fill appointment form
    appointmentPage.selectFacility('Seoul CURA Healthcare Center');
    appointmentPage.checkHospitalReadmission();
    appointmentPage.selectHealthcareProgram('Medicaid');
    appointmentPage.setVisitDate(30);
    appointmentPage.setComment('CURA Healthcare Service');

    // Submit appointment
    appointmentPage.bookAppointment();

    // Verify appointment details
    // Note: adjust date format depending on the calendar widget (e.g., '30/03/2026')
    appointmentPage.verifyAppointmentDetails({
      facility: 'Seoul CURA Healthcare Center',
      readmission: 'Yes',
      program: 'Medicaid',
      date: '30/03/2026',
      comment: 'CURA Healthcare Service'
    });
  });

  it('Scenario 2 - Appointment history empty', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    loginPage.login(username, password);

    // Open sidebar menu
    historyPage.openSidebar();

    // Go to appointment history
    historyPage.goToHistory();

    // Verify no appointments
    historyPage.verifyNoAppointment();
  });
});