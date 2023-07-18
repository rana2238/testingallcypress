class BillingPage {
    elements = {
      teamAvatar: () => cy.get('[data-test="team-avatar_Tester\'s Workspace"]'),
      upgradebutton: () => cy.findByRole('link', { name: 'Upgrade' }),
      billingPageUrl:()=> cy.url('/9002137880/settings/billing'),
     
      planOptions: {
        business: () => cy.get('div[data-test="plan-options__business"]'),
        unlimited: () => cy.get('div[data-test="plan-options__unlimited"]'),
        businessPlus: () => cy.get('div[data-test="plan-options__business-plus"]'),
        enterprise: () => cy.get('div[data-test="plan-options__enterprise"]'),
      },
      yearlyToggle: () => cy.get('div[data-test="pricing-switch-label-yearly"]'),
      monthlyToggle: () => cy.get('div[data-test="pricing-switch-label-monthly"]'),
      planCosts: () => cy.findAllByText('5', '12', '19'),
      mostPopularPlan: () => cy.get('div[data-test="upgrade-plans__item-badge"].upgrade-plans__item-badge_popular'),
      unlimitedUpgradeButton: () => cy.get('div[data-test="plan-options__unlimited"]')
        .find('div[data-test="upgrade-plans__item-btn-unlimited"].upgrade-plans__item-btn'),
      orderSummary: () => cy.findAllByText('Order Summary'),
      billedMonthly: () => cy.findByText('Billed Monthly'),
      billedYearly: () => cy.findByText('Billed Yearly'),
      paymentDetails: {
        creditCardNumber: () => cy.findByPlaceholderText('Credit Card Number'),
        expiryMonthYear: () => cy.findByPlaceholderText('Expiring MM/YY'),
        cvvCode: () => cy.findByTitle('Secure Credit Card Frame - CVV'),
        zipCode: () => cy.findByPlaceholderText('Zip Code (US Only)'),
      },
      upgradeButton: () => cy.findByRole('button', { name: 'Upgrade' }),
      countryDropdown: () => cy.get('select[id="country"]'),
      dropdownOptionIndia: () => cy.findByRole('menuitem', { name: 'Afganistan' }),
      closeButton: () => cy.get('div[class="ng-star-inserted"]'),
    };
  
  // - Click on Upgrade button
    clickUpgradeButton() {
      this.elements.upgradebutton().click();
    }
  // Verify the user should navigates to billing page
    verifyBillingPageUrl() {
      this.elements.billingPageUrl();
    }
  // - Verify the 4 Plans are available
    verifyPlanOptions() {
      this.elements.planOptions.business();
      this.elements.planOptions.unlimited();
      this.elements.planOptions.businessPlus();
      this.elements.planOptions.enterprise();
    }
  
    verifyToggleSetToYearly() {
      this.elements.yearlyToggle().eq(2).click();
      // this.elements.monthlyToggle().should('not.have.class', 'active');
    }
  
    // Verify the each plan's amount should update.
    verifyPlanCosts() {
      this.elements.planCosts();
    }
  // Verify the Most popular plan available in page.
    verifyMostPopularPlan() {
      this.elements.mostPopularPlan();
    }
  // Click on Upgrade button available in Unlimited plan
    clickUnlimitedUpgradeButton() {
      this.elements.unlimitedUpgradeButton().click();
    }
  // Verify the order summary should show
    verifyOrderSummary() {
      this.elements.orderSummary();
    }
  
  
    verifyBilledMonthlySelected() {
  
      // verify billing monthly
      this.elements.billedMonthly().should('exist');
  
      // Creditcard Number available
  
      this.elements.paymentDetails.creditCardNumber().should('exist');
  
      // Expiry Mon/year available
  
      this.elements.paymentDetails.expiryMonthYear().should('exist');
  
      // CvV code
      this.elements.paymentDetails.cvvCode().should('exist');
  
      // Zip Code
  
      this.elements.paymentDetails.zipCode().should('exist');
    }
    //  Select afganistan
    selectCountryAfganistan() {
      this.elements.countryDropdown().select('AF');
    }
  //  Verify the Zip code textbox should disabled
    verifyZipCodeDisabled() {
      this.elements.paymentDetails.zipCode().should('be.disabled');
    }
  // Click on "X" available at top of page
    clickCloseButton() {
      this.elements.closeButton().click();
    }
    // Verify the user should navigate to Billing page
    billingPageUrl(){
      this.elements.billingPageUrl().should('exist')
    }
  }
  
  export default BillingPage;
  