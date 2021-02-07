let randomString = ({title='', tlen=0}={}) => {
  if (title){
    return cy.wrap(title);
  }else{
    if(tlen==0){
      throw Error('Can not generate random string of length 0');
    }
    let result = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < tlen; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return cy.wrap(result);
  }

}

Cypress.Commands.add("randomString", randomString);

let createToDo = ({title='', tlen=0}={}) => {
  cy.randomString({title:title, tlen:tlen}).then(value => {
    title = value;
    cy.get('.new-todo')
      .type(value).should('have.value', value).type('{enter}')
  }).then(() => {
    cy.get('ul.todo-list li div.view input').should('have.attr', 'type', 'checkbox');
    cy.get('ul.todo-list li div.view label').last().should('have.text', title);
    cy.get('ul.todo-list li div.view button').should('have.attr', 'class', 'destroy');
  });
}

Cypress.Commands.add("createToDo", createToDo);
