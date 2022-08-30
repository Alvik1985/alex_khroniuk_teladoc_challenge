class Helpers
{
  /**
     * Click on any UI element after it is displayed
     * - link
     * - button
     * - etc
     *
     * @param {string} elementLocator
     */
  click(elementLocator)
  {
    elementLocator.should('be.visible');
    elementLocator.click();
  }

  /**
   * Returns random text based on defined length
   *
   * @param {number} length
   */
  randomText(length)
  {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++)
    {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Returns random number based on defined length
   *
   * @param {number} length
   */
  randomNumber(length)
  {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++)
    {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Type anything after the text box is displayed
   *
   * @param {string} elementLocator
   * @param {string} text
   */
  enterText(elementLocator, text)
  {
    try
    {
      elementLocator.should('be.visible');
      elementLocator.clear();
      elementLocator.type(text);
    }
    catch (e)
    {
      throw new Error('Unable to enter text \n' + e);
    }
  }
}
export default Helpers;
