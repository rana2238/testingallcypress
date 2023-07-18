
import LoginPage from '../../pageobjects/loginPage';

describe('ClickUp Test', () => {
  const loginPage = new LoginPage();

  before(() => {
    cy.fixture('credential').then((credentials) => {
      cy.Login(credentials.userName, credentials.Password);
    });
  });

  it('Test case 1', () => {

    loginPage.clickProfile()

    loginPage.clickApps();

    loginPage.ExistSidebar();

    loginPage.ExistSettings();

    loginPage.ExistTeams();

    loginPage.ExistSpaces();

    loginPage.ExistImportExport();

    loginPage.ExistClickApps();

    loginPage.ExistIntegrations();

    loginPage.ExistEmailIntegration();

    loginPage.ExistClickUpAPI();

    loginPage.ExistTrash();

    loginPage.clickSpaces();

    // loginPage.clickTeamSpace();

   

    loginPage.clickNewSpace();
    cy.wait(12000)


    loginPage.clickCreatenewSpace();

    loginPage.clickTemplates();

    loginPage.enterSpaceName('Testing2');

    loginPage.clickNext();

    loginPage.clickspacecolor();

    loginPage.uploadicon()

    loginPage.uploadmodal();
    
    loginPage.uploadbutton();
  });

});
