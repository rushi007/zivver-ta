describe('Todo App test with negative scenarios', () => {
  beforeEach('Visit the todo web app', () => {
    cy.visit('https://todomvc.com/examples/angular2/')
  })
  it('should not be able to create a todo task with only spaces', () => {
    cy.get('.new-todo')
      .type('   ').should('have.value', '   ').type('{enter}').then(() => {
        cy.get('ul.todo-list').should('not.exist');
      });
  });
  it('should not be able to feed blank spaces while todo edit', () => {
    cy.createToDo({tlen:7});
    cy.get('ul.todo-list li').dblclick().then(() => {
      cy.get('input.edit').focus().clear()
      cy.get('input.edit').type('   ').should('have.value', '   ').type('{enter}').then(() => {
        cy.get('ul.todo-list').should('not.exist');
      })
    });
  });
  it('should not be able to create multiple todos of same title', () => {
    cy.createToDo({title:'rushi'});
    cy.createToDo({title:'rushi'});
    cy.get('ul.todo-list li div.view label').eq(0).then((ftodo) => {
      cy.get('ul.todo-list li div.view label').eq(1).then((stodo) => {
        expect(ftodo.text()).not.to.eq(stodo.text());
      })
    })
  });
  it('should not be able to create a todo with same title as a completed todo task', () => {
    cy.createToDo({title:'rushi'});
    cy.get('ul.todo-list li div.view input.toggle').last().click();
    cy.createToDo({title:'rushi'});
    cy.get('ul.todo-list li div.view label').last().then((rtodo) => {
      cy.get('ul.todo-list li div.view label').each((etodo) => {
        expect(rtodo.text()).not.to.eq(etodo.text());
      })
    })
  });
});
