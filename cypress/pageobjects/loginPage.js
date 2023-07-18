export default class LoginPage {
    elements = {
      usernameInput: () => cy.findByLabelText('Email'),
  
      passwordInput: () => cy.findByLabelText('Password'),
  
      loginBtn: () => cy.findByRole('button', { name: 'Log In' }),
  
      Profile:()=>cy.get('[data-test="team-avatar_Tester\'s Workspace"]'),
  
      Apps:()=> cy.findByRole('link', {name:'Apps'}),
  
      Sidebar:()=>cy.findByRole('navigation', {name:'Settings'}),
  
         Settings:()=>cy.findByRole('link', {name:'Settings'}),
  
         Teams:()=>cy.findByRole('link', {name:'Teams'}),
  
         Spaces:()=>cy.findByRole('link', {name:'Spaces'}),
  
         ImportExport:()=>cy.findByRole('link', {name:'Import/Export'}),
  
         ClickApps:()=>cy.findByRole('link', {name:'ClickApps'}),
  
         Integrations:()=>cy.findByRole('link', {name:'Integrations'}),
  
         EmailIntegration:()=>cy.findByRole('link', {name:'Email Integration'}),
  
         ClickUpAPI:()=>cy.findByRole('link', {name:'ClickUp API'}),
  
         Trash:()=>cy.findByRole('link', {name:'Trash'}),
      
       Spaces:()=>cy.findByRole('link', {name:'Spaces'}),
  
       NewSpace:()=>cy.findAllByText('+ New Space').should('exist'),
  
       
       CreatenewSpace:()=>cy.findAllByText('Create new Space'),
  
       Templates:()=>cy.findAllByText('Templates'),
  
       EnterSpacename:()=>cy.get('input[data-test="create-project-modal__form-input"]')
       ,
  
       Next:()=>cy.findByRole('button', {name:'Next'}),
  
       
  
      spacecolor:()=>cy.get('div[data-test="project-avatar__item-icon"]'),
      
      uploadicon:()=>cy.get('div[data-test="avatar-picker__icons-add-body"]'),
  
      uploadmodal:()=>cy.findAllByText('Upload your image'),
  
      uploadbutton:()=>cy.findByTestId('custom-input')
  
      
    }
  
  
    // Test steps
  
    // Click on Profile available at the bottom of the left side.
    clickProfile() {
      this.elements.Profile().click();
    }
  
    clickApps() {
      this.elements.Apps().click();
    }
  
  
    ExistSidebar() {
      this.elements.Sidebar().should('exist');
    }
  
    ExistSettings() {
      this.elements.Settings().should('exist');
    }
  
    ExistTeams() {
      this.elements.Teams().should('exist');
    }
  
    ExistSpaces() {
      this.elements.Spaces().should('exist');
    }
  
    ExistImportExport() {
      this.elements.ImportExport().should('exist');
    }
  
    ExistClickApps() {
      this.elements.ClickApps().should('exist');
    }
  
    ExistIntegrations() {
      this.elements.Integrations().should('exist');
    }
  
    ExistEmailIntegration() {
      this.elements.EmailIntegration().should('exist');
    }
  
    ExistClickUpAPI() {
      this.elements.ClickUpAPI().should('exist');
    }
  
    ExistTrash() {
      this.elements.Trash().should('exist');
  }
  
    clickSpaces() {
      this.elements.Spaces().click();
    }
  
    // clickTeamSpace() {
    //   this.elements.TeamSpace().should('exist');;
    // }
  
  
    clickNewSpace() {
      this.elements.NewSpace().click();
    }
  
    clickCreatenewSpace() {
      this.elements.CreatenewSpace().should('exist');
    }
  
    clickTemplates() {
      this.elements.Templates().should('exist');
    }
  
    enterSpaceName(name) {
      this.elements.EnterSpacename().click().type(name);
    }
  
    clickNext() {
      this.elements.Next().should('be.enabled').click();
    }
  
    clickspacecolor() {
      this.elements.spacecolor().should('have.css', 'background-color')
      .and('eq', 'rgb(124, 130, 141)');
    }
  
    uploadicon(){
      this.elements.uploadicon().should('exist').click()
    }
    uploadmodal() {
      this.elements.uploadmodal().should('exist');
    }
    uploadbutton() {
      this.elements.uploadbutton.click();
    }
  
  }
  
  
  