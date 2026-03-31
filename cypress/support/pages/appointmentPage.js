class AppointmentPage {
  selectFacility(facility) {
    cy.get('#combo_facility').select(facility);
  }

  checkHospitalReadmission() {
    cy.get('#chk_hospotal_readmission').check();
  }

  selectHealthcareProgram(program) {
    cy.get(`input[name="programs"][value="${program}"]`).check();
  }

  setVisitDate(date) {
    cy.get('#txt_visit_date').click();
    // Select the date in the calendar widget
    cy.get('.datepicker-days td.day:not(.old):contains("' + date + '")').click();
  }

  setComment(comment) {
    cy.get('#txt_comment').type(comment);
  }

  bookAppointment() {
    cy.get('#btn-book-appointment').click();
  }

  verifyAppointmentDetails({ facility, readmission, program, date, comment }) {
    cy.get('#facility').should('have.text', facility);
    cy.get('#hospital_readmission').should('have.text', readmission);
    cy.get('#program').should('have.text', program);
    cy.get('#visit_date').should('have.text', date);
    cy.get('#comment').should('have.text', comment);
  }
}

export default new AppointmentPage();