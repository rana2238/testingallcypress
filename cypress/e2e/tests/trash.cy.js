import LoginPage from '../../pageobjects/loginPage';
import TrashPage from '../../pageobjects/TrashPage';
describe('ClickUp Test', () => {
  const loginPage = new LoginPage();
  const trashPage = new TrashPage()

  before(() => {
    cy.fixture('credential').then((credentials) => {
      cy.Login(credentials.userName, credentials.Password);
    });
    Cypress.on('uncaught:exception', () => {
      // Ignore the uncaught exception
      return false;
    });
  });
  it('Test case 1', () => {

    loginPage.clickProfile()

    trashPage.clickTrashButton()

    trashPage.urlAssertion();

    trashPage.Filterassertion();

    trashPage.clearallassertion();

    trashPage.clickfilter();

    trashPage.clickspaceName();

    trashPage.clickcrossicon();
    
    trashPage.clickitems();

    trashPage.openfilter();

    trashPage.assertionfilter();

    trashPage.clickType();

    trashPage.Typelist()

    trashPage.clicktask()

    trashPage.check()

    trashPage. outsideclick()

    trashPage.typecheck()

    trashPage.clickType();

    trashPage.clicktask()

   
    trashPage. outsideclick()

    trashPage. delteby()

    trashPage. searchBar()

    trashPage. allcollaborators()

    trashPage. collaboratorclick()

    trashPage.selected()

    trashPage. collaboratorclick()

    trashPage. notselected()

    // trashPage.hover()
    
    // trashPage. offlinetext()
    // trashPage. email()
    // trashPage.viewprofile()
    trashPage.dbloutsideclick()

    trashPage.dbloutsideclick()

    trashPage.threedots()

    trashPage.Restore()
    
    trashPage.Deleteforeever()
})
})