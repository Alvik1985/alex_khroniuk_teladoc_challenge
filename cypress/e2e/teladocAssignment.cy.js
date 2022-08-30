import addUserPage from '../../pages/addUser.page';
import confirmationPage from '../../pages/confirmation.page';
import homePage from '../../pages/home.page';

describe('Teladoc Assignment', () => {
  
  before(() =>
  {
    cy.visit('http://www.way2automation.com/angularjs-protractor/webtables/');
  });
  
  it('Add a new User', () => {
    const firstName = addUserPage.randomText(5);
    const lastName = addUserPage.randomText(5);
    const email = `${firstName}.${lastName}@mailinator.com`;

    cy.contains(lastName).should('not.exist');

    homePage.click(homePage.addUser);
    addUserPage.enterText(addUserPage.firstName, firstName);
    addUserPage.enterText(addUserPage.lastName, lastName);
    addUserPage.enterText(addUserPage.userName, firstName);
    addUserPage.enterText(addUserPage.password, addUserPage.randomNumber(5));
    addUserPage.click(addUserPage.customerA);
    addUserPage.role.select(addUserPage.salesTeam);
    addUserPage.enterText(addUserPage.email, email);
    addUserPage.enterText(addUserPage.cellPhone, addUserPage.randomNumber(10));
    addUserPage.click(addUserPage.saveBtn);

    cy.contains(lastName).should('exist');
  })

  it('Delete a User', () => {
    const user = 'novak';

    cy.contains(user).should('exist');

    homePage.clickRemoveBtn(user);
    confirmationPage.click(confirmationPage.okBtn);

    cy.contains(user).should('not.exist');
  })
})