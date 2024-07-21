
class PaginaToDo {

  visit() {
    cy.visit('https://todomvc.com/examples/typescript-react/#/');
  }

  agregarTarea(nombreTarea) {
    //cy.get('.new-todo').type(`${nombreTarea}{enter}`);  
    cy.get('.new-todo').type(nombreTarea + `{enter}`);  
  }

  marcarTareaCompletada(indiceElemento) {
    cy.get(`.todo-list li:nth-child(${indiceElemento}) .toggle`).click();
  }

  eliminarTarea(indiceElemento){
    cy.get(`.todo-list li:nth-child(${indiceElemento}) .destroy`).click({ force: true });
  }
}

export default PaginaToDo;