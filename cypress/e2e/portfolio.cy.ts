// import { gameList } from "../../src/Components/Interests/Gaming/GamingLibrary/GameList"
// const gameList = require( "../../src/Components/Interests/Gaming/GamingLibrary/GameList")

describe('template spec', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/');
  })
  it('should render the welcome view', () => {
    cy.get('[data-testid="welcome-div"]').should('exist');
    cy.get('[data-testid="welcome-heading"]').should('exist');
    cy.get('[data-testid="welcome-message"]').should('exist');
    cy.get('[data-testid="welcome-links"]').should('exist');
    cy.get('[data-testid="welcome-about"]').should('exist');
    cy.get('[data-testid="welcome-interests"]').should('exist');
    cy.get('[data-testid="welcome-skills"]').should('exist');
    cy.get('[data-testid="welcome-projects"]').should('exist');
  })

  it.skip('should update the welcome message after 3 seconds', () => {
    cy.get('[data-testid="welcome-message"]');
    // cy.get('[data-testid="welcome-message"]').should("be.a", "string");
    cy.get('[data-testid="welcome-message-animation"]').should('not.have.text', 'developer and a person.')
    cy.wait(3200)
    cy.get('[data-testid="welcome-message-animation"]').contains("developer and a person.");
  })

  it('Links should navigate the page', () => {
    cy.get('[data-testid="welcome-about"]').click();
    cy.window().its('scrollY').should('not.equal', 0)

    // cy.get('[data-testid=welcome-message]').should('be.visible');
    cy.get('[data-testid=about-div]').should('be.visible');
    // cy.window().its('scrollY').should('equal', cy.$$('[data-testid="about-div"]').offset().top);

    cy.scrollTo('top');
    cy.window().its('scrollY').should('equal', 0);

    cy.get('[data-testid="welcome-interests"]').click();
    cy.window().its('scrollY').should('not.equal', 0)
  })

  it('About section should exist', () => {
    cy.get('[data-testid="about-div"]');
  })

  it('Interest buttons should toggle the Interest view', () => {
    // Testing the Gaming button toggle
    cy.get('[data-testid="gaming-div"]').should('not.exist');
    cy.get('[data-testid="interests-button-gaming"]').click();
    cy.get('[data-testid="gaming-div"]').should('exist');
    cy.get('[data-testid="interests-button-gaming"]').click();
    cy.get('[data-testid="gaming-div"]').should('not.exist');

    // Testing all buttons toggle bewteen eachother
    cy.get('[data-testid="default-interest-div"]').should('exist');
    cy.get('[data-testid="gaming-div"]').should('not.exist');
    cy.get('[data-testid="movies-div"]').should('not.exist');
    cy.get('[data-testid="science-div"]').should('not.exist');

    cy.get('[data-testid="interests-button-movies"]').click();
    cy.get('[data-testid="default-interest-div"]').should('not.exist');
    cy.get('[data-testid="movies-div"]').should('exist');

    cy.get('[data-testid="interests-button-gaming"]').click();
    cy.get('[data-testid="gaming-div"]').should('exist');
    
    cy.get('[data-testid="interests-button-science"]').click();
    cy.get('[data-testid="science-div"]').should('exist');
    
    cy.get('[data-testid="interests-button-science"]').click();
    cy.get('[data-testid="default-interest-div"]').should('exist');
  })

  it('Gaming inetrest section', () => {
    cy.get('[data-testid="interests-button-gaming"]').click();
    cy.get('[data-testid="gaming-div"]').should('exist');
    cy.get('[data-testid="gaming-library-content"]').should('exist');
    cy.get('[data-testid="gaming-card"]').should('have.length.at.least', 5);
  })

  it('Movies inetrest section', () => {
    cy.get('[data-testid="interests-button-movies"]').click();
    cy.get('[data-testid="movies-div"]').should('exist');
    cy.get('[data-testid="movies-carousel-content"]').should('exist');
    cy.get('[data-testid="movie-card"]').should('have.length.at.least', 5);

    cy.get('*[class^="swiper-button-next"]').should('exist');
    cy.get('*[class^="swiper-button-next"]').first().click();
  })

  it('Skills section', () => {
    cy.get('[data-testid="skills-div"]').should('exist');
    cy.get('[data-testid="skill-button-stack"]').should('exist');
    cy.get('[data-testid="skill-button-experience"]').should('exist');
    cy.get('[data-testid="skill-button-outlook"]').should('exist');
  })

  it('Skills section toggle interactivity', () => {
    cy.get('[data-testid="stack-content"]').should('not.exist');
    cy.get('[data-testid="skill-button-stack"]').click();
    cy.get('[data-testid="stack-content"]').should('exist');

    cy.get('[data-testid="experience-content"]').should('not.exist');
    cy.get('[data-testid="skill-button-experience"]').click();
    cy.get('[data-testid="stack-content"]').should('not.exist');
    cy.get('[data-testid="experience-content"]').should('exist');

    cy.get('[data-testid="outlook-content"]').should('not.exist');
    cy.get('[data-testid="skill-button-outlook"]').click();
    cy.get('[data-testid="experience-content"]').should('not.exist');
    cy.get('[data-testid="outlook-content"]').should('exist');

    cy.get('[data-testid="skill-button-outlook"]').click();
    cy.get('[data-testid="outlook-content"]').should('not.exist');
  })

  it('Projects section', () => {
    cy.get('[data-testid="projects-div"]').should('exist');
    cy.get('[data-testid="project-card"]').should('have.length.at.least', 2);
  })

})