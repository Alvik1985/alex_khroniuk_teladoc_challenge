import Page from './page';

class HomePage extends Page
{
  get addUser() { return cy.contains(' Add User'); }

  /**
   * Clicks remove button for specified user
   *
   * @param {string} user
   */
  clickRemoveBtn(user)
  {
    try
    {
      cy.contains(user)
      .parent('tr')
      .within(() => {
        cy.get('td').eq(10).children().children().click();
      });
    }
    catch (e)
    {
      throw new Error('User not found' + e);
    }
  }
}

export default new HomePage();
