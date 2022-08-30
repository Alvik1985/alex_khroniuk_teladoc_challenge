import Page from './page';

class AddUserPage extends Page
{
  get firstName() { return cy.get('[name="FirstName"]'); }

  get lastName() { return cy.get('[name="LastName"]'); }
  
  get email() { return cy.get('[name="Email"]'); }

  get userName() { return cy.get('[name="UserName"]'); } 
  
  get password() { return cy.get('[name="Password"]'); } 

  get cellPhone() { return cy.get('[name="Mobilephone"]'); } 

  get customerA() { return cy.get('[value="15"]'); } 

  get role() { return cy.get('select'); } 

  get salesTeam() { return ('Sales Team'); }

  get saveBtn() { return cy.get('.btn-success'); }
}

export default new AddUserPage();