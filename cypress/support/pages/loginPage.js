class LoginPage {
  visit() {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  }

  clickMakeAppointment() {
    cy.contains('Make Appointment').click();
  }

  login(username, password) {
    cy.get('#txt-username').type(username);
    cy.get('#txt-password').type(password);
    cy.get('#btn-login').click();
  }
}

export default new LoginPage();