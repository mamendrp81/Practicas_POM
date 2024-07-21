import PaginaToDo from '../pageobject/paginatodo';

describe('Tests pagina todo', () => {
  var paginatodo = new PaginaToDo();

  beforeEach(() => {
    paginatodo.visit();
  });

  it('Agregar una nueva tarea', () => {
    paginatodo.agregarTarea('Comprar pan');
  });

  it('Marcar tarea como completada', () => {
    paginatodo.agregarTarea('Comprar leche');
    paginatodo.marcarTareaCompletada(1);
  });
  
  it('Añadir varias tareas y completar una', () => {
    paginatodo.agregarTarea('Comprar pan');
    paginatodo.agregarTarea('Comprar leche');
    paginatodo.agregarTarea('Comprar agua');
    paginatodo.marcarTareaCompletada(1); //marco como completada la tercera opción de la lista: agua
  });

  it('Eliminr una tarea de una lista', () => {
    paginatodo.agregarTarea('Comprar pan');
    paginatodo.agregarTarea('Comprar leche');
    paginatodo.agregarTarea('Comprar agua');
    paginatodo.eliminarTarea(2); //elimino la segunda opción de la lista: leche
  });

});
