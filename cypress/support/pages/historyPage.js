class HistoryPage {
  openSidebar() {
    cy.get('#menu-toggle').click();
  }

  goToHistory() {
    cy.contains('History').click();
  }

  verifyNoAppointment() {
    cy.contains('No appointment').should('be.visible');
  }
}

export default new HistoryPage();