import LoginPage from '../../pageobjects/loginPage';
import EmailinvitePage from '../../pageobjects/emailinvitePage';
import BillingPage from '../../pageobjects/billingPage';


describe('ClickUp Test', () => {
  const loginPage = new LoginPage();
  const emailInvitePage = new EmailinvitePage()
  const billingPage = new BillingPage()

  beforeEach(() => {
    cy.fixture('credential').then((credentials) => {
      cy.Login(credentials.userName, credentials.Password);
      
      
    });
    Cypress.on('uncaught:exception', () => {
      // Ignore the uncaught exception
      return false;
    });
  });
  
  it('Execution of test steps', () => {
    cy.fixture('credential').then((credentials) => {
    
    loginPage.clickProfile()

    emailInvitePage.hover();

    emailInvitePage.clickPeople();

    emailInvitePage.checkSections();

    emailInvitePage.searchEmail(credentials.email);

    emailInvitePage.inviteGuest(credentials.email2);

    emailInvitePage.cancelInvitedEmail();

  });
})
  
 it('Test case 1', () => {

    loginPage.clickProfile()

    billingPage.clickUpgradeButton()

    billingPage.verifyBillingPageUrl()

    billingPage.verifyPlanOptions()

    billingPage.verifyToggleSetToYearly()

    billingPage. verifyPlanCosts()

    billingPage.verifyMostPopularPlan()

    billingPage.clickUnlimitedUpgradeButton()

    billingPage.verifyBilledMonthlySelected()

    billingPage.selectCountryAfganistan()

    billingPage.verifyZipCodeDisabled()
    
    billingPage.clickCloseButton()
})


})