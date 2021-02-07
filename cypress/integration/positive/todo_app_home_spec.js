describe('Todo App test with positive scenarios', () => {
  beforeEach('Visit the todo web app', () => {
    cy.visit('https://todomvc.com/examples/angular2/')
    cy.createToDo({tlen:7});
  })
  it('should be able to edit a todo task', () => {
    cy.randomString({tlen:7}).then(value => {
      cy.get('ul.todo-list li').dblclick().then(() => {
        cy.get('input.edit').focus().clear()
        cy.get('input.edit').type(value).should('have.value', value).type('{enter}')
      });
      cy.get('ul.todo-list li div.view input').should('have.attr', 'type', 'checkbox');
      cy.get('ul.todo-list li div.view label').should('have.text', value);
      cy.get('ul.todo-list li div.view button').should('have.attr', 'class', 'destroy');
    })
  })
  it('should be able to complete a todo task', () => {
    cy.get('ul.todo-list li div.view input.toggle').should('have.attr', 'type', 'checkbox');
    cy.get('ul.todo-list li div.view input.toggle').click();
    cy.get('ul.todo-list li').should('have.attr', 'class', 'completed');
  });
  it('should be able to delete a todo task', () => {
    cy.get('ul.todo-list li div.view button').should('have.attr', 'class', 'destroy');
    cy.get('ul.todo-list li div.view button.destroy').invoke('show').click();
  })
})
