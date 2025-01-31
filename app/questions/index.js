const player1 = [
    { letter: "A", title: "Empieza por A:", text: "Palabra que utilizamos antes de la declaración del nombre de una función para convertirla en asíncrona.", value: "Async"},
    { letter: "B", title: "Empieza por B:", text: "Acrónimo del dígito binario", value: "Bit"},
    { letter: "C", title: "Empieza por C:", text: "Palabra utilizada para definir una variable que no puede ser redeclarada", value: "Const"},
    { letter: "D", title: "Empieza por D:", text: "Patrones de bajo nivel específicos para un lenguaje de programación o entorno concreto", value: "Dialectos"},
    { letter: "E", title: "Empieza por E:", text: "Palabra clave para crear una subclase a partir de una clase padre", value: "Extends"},
    { letter: "F", title: "Empieza por F:", text: "Biblioteca de librerías preconstruidas que facilitan del desarrollo del software", value: "Framework"},
    { letter: "G", title: "Contiene la G:", text: "Patrón de diseño que permite devolver siempre la misma instancia única e inalterable de una clase", value: "Singleton"},
    { letter: "H", title: "Empieza por H:", text: "Identificador único generalmente alfanumérico creado a partir de un algoritmo", value: "Hash"},
    { letter: "I", title: "Empieza por I:", text: "Recorrer un mapa o array de datos", value: "Iterar"},
    { letter: "J", title: "Empieza por J:", text: "Nombre por el que se conoce generalmente a la notación de objetos de javascript", value: "JSON"},
    { letter: "L", title: "Contiene la L:", text: "Framework de Javascript creado por Rob Eisenberg", value: "Aurelia"},
    { letter: "M", title: "Empieza por M:", text: "División de SFront que se ocupa del asesoramientos de los Sngulares", value: "Mentoring"},
    { letter: "N", title: "Empieza por N:", text: "Valor de una variable para expresar la ausencia del mismo", value: "Null"},
    { letter: "O", title: "Contiene la O:", text: "Compañero de Sngular conocido por sus disfraces y looks estrafalarios", value: "Jon"},
    { letter: "P", title: "Empieza por P:", text: "Comando de git para subir los cambios confirmados a las ramas de origen", value: "Push"},
    { letter: "Q", title: "Empieza por Q:", text: "Consulta realizada contra una base de datos", value: "Query"},
    { letter: "R", title: "Empieza por R:", text: "Framework de javascript creado por Facebook", value: "React"},
    { letter: "S", title: "Empieza por S:", text: "Método de javascript para devolver una copia de un array en base a los índices deseados de principio y fin.", value: "Slice"},
    { letter: "T", title: "Contiene la T:", text: "Plato de comida elaborada a base de huevos y patatas que genera debate en la sala de SFront.", value: "Tortilla"},
    { letter: "U", title: "Empieza por U:", text: "Código identificador estándar empleado en el proceso de construcción de software.", value: "UUID"},
    { letter: "V", title: "Empieza por V:", text: "Comprobar en un formulario que se cumplen las condiciones preestablecidas para los campos que lo componen.", value: "Validar"},
    { letter: "X", title: "Contiene la X:", text: "Programa de hojas de cálculo ideado por Microsoft", value: "Excel"},
    { letter: "Y", title: "Empieza por Y:", text: "Palabra clave utilizada para continuar la ejecución de una función generadora.", value: "Yield"},
    { letter: "Z", title: "Empieza por Z:", text: "Propiedad css que permite maximizar la salida por pantalla.", value: "Zoom"}
];

const player2 = [
    { letter: "A", title: "Empieza por A:", text: "Tipo de dato estructurado que permite almacenar un conjunto de datos homogeneo.", value: "Array"},
    { letter: "B", title: "Empieza por B:", text: "Valor de la propiedad font-weight para visualizar un texto en negrita", value: "Bold"},
    { letter: "C", title: "Empieza por C:", text: "Método de clase para la creación e instanciación de objetos a partir de esta", value: "Constructor"},
    { letter: "D", title: "Contiene la D:", text: "Texto escrito que conforma los programas", value: "Código"},
    { letter: "E", title: "Empieza por E:", text: "Convención que determina la forma en que codificaremos nuestros programas en base al lenguaje de programación que utilicemos", value: "Estándar"},
    { letter: "F", title: "Empieza por F:", text: "Método del prototipo de array que permite recorrer sus elementos pero no devuelve nada", value: "ForEach"},
    { letter: "G", title: "Empieza por G:", text: "Palabra utilizada para devolver una propiedad computada dentro de una clase", value: "Get"},
    { letter: "H", title: "Contiene la H:", text: "Se dice del desarrollo personalizado para un cliente en concreto", value: "Ad-Hoc"},
    { letter: "I", title: "Empieza por I:", text: "Sentencia para importar funciones que han sido exportadas desde un módulo externo", value: "Import"},
    { letter: "J", title: "Empieza por J:", text: "Lenguaje de programación interpretado, dialecto del estándar ECMAScript", value: "Javascript"},
    { letter: "L", title: "Empieza por L:", text: "Palabra para definir una variable que podra ser sobreescrita", value: "Let"},
    { letter: "M", title: "Contiene la M:", text: "Comando de git que permite confirmar los cambios sobre una rama local.", value: "Commit"},
    { letter: "N", title: "Empieza por N:", text: "Atributo de la etiqueta script que permite englobar a un script dentro de una 'whitelist' para evitar problemas de Content Security Policy", value: "Nonce"},
    { letter: "O", title: "Empieza por O:", text: "Modelo de programación que organiza el diseño de software en torno a datos u objetos.", value: "Orientada a objetos"},
    { letter: "P", title: "Empieza por P:", text: "Metodología aceptada por la comunidad para crear elementos reutilizables con el fin de resolver problemas comunes.", value: "Patrón de diseño"},
    { letter: "Q", title: "Contiene la Q:", text: "En HTML, etiqueta obsoleta que permitía introducir texto en movimiento.", value: "Marquee"},
    { letter: "R", title: "Empieza por R:", text: "Palabra utilizada para declarar la respuesta de una función.", value: "Return"},
    { letter: "S", title: "Empieza por S:", text: "CMeO de Sngular.", value: "Sara Vidal"},
    { letter: "T", title: "Contiene la T:", text: "Función de javascript que permite programar la ejecución posterior de un bloque de código.", value: "setTimeout"},
    { letter: "U", title: "Empieza por U:", text: "Se consideran así a los operadores delete, void o typeof", value: "Unario"},
    { letter: "V", title: "Empieza por V:", text: "Framework de Javascript creado por Evan You", value: "Vue.js"},
    { letter: "X", title: "Contiene la X:", text: "Sistema operativo de Apple", value: "Mac OS X"},
    { letter: "Y", title: "Empieza por Y:", text: "Gestor de dependencias de javascript", value: "yarn"},
    { letter: "Z", title: "Empieza por Z:", text: "Propiedad css para definir el orden de un elemento posicionado respecto a sus descendientes", value: "z-index"}
];

export const questions = [ player1, player2 ]; 