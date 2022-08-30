import Page from './page';

class ConfirmationPage extends Page
{
  get okBtn() { return cy.contains('OK'); }
}

export default new ConfirmationPage();