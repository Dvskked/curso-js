# Curso Completo de JavaScript

### De Cero a Nivel Profesional

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> Curso completo y gratuito de JavaScript. Aprende desde cero hasta nivel profesional con ejemplos practicos, proyectos reales y las mejores practicas de desarrollo web moderno.

---

## Indice

1. [Caracteristicas del Curso](#caracteristicas-del-curso)
2. [Previsualizacion](#previsualizacion)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Contenido del Curso](#contenido-del-curso)
5. [Proyectos Practicos](#proyectos-practicos)
6. [Tecnologias y Conceptos Cubiertos](#tecnologias-y-conceptos-cubiertos)
7. [Como Usar Este Curso](#como-usar-este-curso)
8. [Prerrequisitos](#prerrequisitos)
9. [Recursos Adicionales](#recursos-adicionales)
10. [Licencia](#licencia)
11. [Contacto](#contacto)

---

## Caracteristicas del Curso

- **10 Modulos completos** — Cubre todo lo que necesitas saber de JavaScript
- **83 Lecciones detalladas** — Teoria y practica en cada una
- **5 Proyectos practicos** — Aplica todo lo aprendido
- **Codigo fuente de cada ejemplo** — Copia, pega y experimenta
- **Responsive Design (mobile-first)** — Disena para todos los dispositivos
- **Tema claro y oscuro** — Interfaz adaptable a preferencias
- **HTML semantico y accesible** — Sigue los estandares web
- **JavaScript vanilla** — Sin frameworks, sin dependencias
- **Sin dependencias externas** — HTML, CSS y JS puro
- **Contenido lineal y legible** — Cada leccion se muestra completa sin acordiones
- **Navegacion funcional** — Enlaces de nav que llevan a cada seccion
- **Jerarquia de encabezados correcta** — H1 > H2 > H3 > H4 para SEO y accesibilidad

---

## Previsualizacion

Este curso es una **aplicacion web interactiva** que funciona directamente en tu navegador. No necesitas instalar nada.

| Caracteristica | Descripcion |
|:---:|:---|
| **Tema Claro / Oscuro** | Alterna entre ambos temas con un solo clic. Los estilos se guardan automaticamente en localStorage. |
| **Totalmente Responsive** | Se adapta a pantallas de escritorio, tablets y moviles con un diseno mobile-first. |
| **Navegacion por Modulos** | Explora los 10 modulos del curso con sus lecciones visibles sin acordiones. |
| **Barra de Progreso** | Visualiza tu avance a medida que completas las lecciones. |
| **Copiar Codigo** | Un clic para copiar cualquier snippet de codigo a tu portapapeles. |
| **Contenido Completo** | Cada leccion muestra todo su contenido: explicacion, ejemplos, codigo y ejercicios. |

---

## Estructura del Proyecto

```
curso-js/
  index.html              Pagina principal del curso
  css/
    styles.css            Estilos completos con temas claro/oscuro
  js/
    main.js               Interactividad con JavaScript vanilla
  README.md               Este archivo
```

| Archivo | Descripcion |
|:---|:---|
| `index.html` | Estructura HTML completa con todos los modulos, lecciones y ejemplos |
| `css/styles.css` | Diseno responsive, temas, animaciones, Grid, Flexbox y mas |
| `js/main.js` | Navegacion, temas, validacion, IntersectionObserver, copiar codigo |

---

## Contenido del Curso

### Modulo 1: Fundamentos de JavaScript

| Leccion | Temas Clave |
|:---|:---|
| 1.1 Variables: var, let y const | Alcance, hoisting, reasignacion, mejores practicas |
| 1.2 Tipos de datos primitivos | string, number, boolean, null, undefined, symbol, bigint, typeof |
| 1.3 Operadores aritmeticos y de asignacion | +, -, *, /, %, **, ++, --, +=, -=, *=, /= |
| 1.4 Operadores de comparacion y logico | ==, ===, !=, !==, >, <, &&, \|\|, !, ??, ?. |
| 1.5 Templates Literales | Backticks, interpolacion, multilinea, tagged templates |
| 1.6 Conversion de tipos | parseInt, parseFloat, Number(), String(), Boolean(), coercion |
| 1.7 Condicionales: if, else, switch | Ternario, switch, guard clauses, patron early return |
| 1.8 Metodos deString y Number | toUpperCase, slice, includes, repeat, padStart, toFixed, random |

### Modulo 2: Estructuras de Control

| Leccion | Temas Clave |
|:---|:---|
| 2.1 Bucle for clasico | Init, condicion, incremento, break, continue |
| 2.2 for...of y for...in | Iterar arrays, iterar objetos, diferencias |
| 2.3 while y do...while | Cuándo usar cada uno, riesgo de bucles infinitos |
| 2.4 break, continue y labels | Control de flujo en bucles anidados |
| 2.5 Condiciones avanzadas | Optional chaining, nullish coalescing, short-circuit |
| 2.6 Patron Guard Clause | Early return, flujos limpios, eliminacion de anidamiento |
| 2.7 Patron Switch Moderno | Map objects, estrategia basada en objetos |
| 2.8 Ejercicio: Validador de formularios | Aplicar todas las estructuras de control en un caso real |

### Modulo 3: Funciones

| Leccion | Temas Clave |
|:---|:---|
| 3.1 Declaraciones vs Expresiones de funcion | Hoisting, named vs anonymous |
| 3.2 Parametros y argumentos | Default, rest, arguments object |
| 3.3 Arrow Functions | Sintaxis, implicit return, binding de this |
| 3.4 Scope y Closures | Lexical scope, closures, patron factory |
| 3.5 Return y valores de funcion | Retorno implicito, retorno de objetos, funciones puras |
| 3.6 Funciones de orden superior | Funciones como parametros, patron strategy, patron decorator |
| 3.7 Callbacks | Sincronos, asincronos, array methods con callbacks |
| 3.8 IIFE | Immediately Invoked Function Expression, modulos, encapsulamiento |

### Modulo 4: Arrays y Objetos

| Leccion | Temas Clave |
|:---|:---|
| 4.1 Creacion y Propiedades de Arrays | push, pop, shift, unshift, length, indexOf |
| 4.2 Metodos de Iteracion | forEach, map, filter, reduce, find, some, every |
| 4.3 Ordenamiento y Filtrado | sort, reverse, includes, slice, splice |
| 4.4 Metodos de Conversion | join, flat, flatMap, Array.from, entries, keys, values |
| 4.5 Creacion y Propiedades de Objetos | Literales, enumeracion, compresion |
| 4.6 Metodos de Objetos | Object.keys, values, entries, assign, freeze, seal |
| 4.7 Desestructuracion | Arrays, objetos, parametros, anidada, defaults, renaming |
| 4.8 Spread y Rest Operator | Arrays, objetos, parametros, fusion, copia |
| 4.9 JSON | parse, stringify, copia profunda, validacion |

### Modulo 5: Manipulacion del DOM

| Leccion | Temas Clave |
|:---|:---|
| 5.1 Introduccion al DOM | Arbol de nodos, window, document |
| 5.2 Selectores del DOM | getElementById, querySelector, querySelectorAll |
| 5.3 Modificacion de Elementos | textContent, innerHTML, classList, setAttribute |
| 5.4 Creacion y Eliminacion | createElement, appendChild, removeChild, insertAdjacentHTML |
| 5.5 Eventos del DOM | addEventListener, event object, preventDefault, stopPropagation |
| 5.6 Eventos Comunes | click, keydown, submit, input, scroll, resize, DOMContentLoaded |
| 5.7 Delegacion de Eventos | Patron de delegacion, ventajas, implementacion |
| 5.8 Formularios y Validacion | FormData, validacion HTML5, validacion JS, feedback visual |

### Modulo 6: Asincronia y Promesas

| Leccion | Temas Clave |
|:---|:---|
| 6.1 Introduccion a la Asincronia | Sincrono vs asincrono, call stack, event loop |
| 6.2 setTimeout y setInterval | Sintaxis, cancelacion, patron de animacion |
| 6.3 Promesas | Creacion, estados, then/catch/finally, encadenamiento |
| 6.4 Metodos Estaticos de Promesas | Promise.all, allSettled, race, any, resolve, reject |
| 6.5 Async/Await | Sintaxis, try/catch, secuencial vs paralelo |
| 6.6 Fetch API | GET, POST, PUT, DELETE, Headers, status codes |
| 6.7 Manejo de Errores en Asincronia | try/catch, .catch, patrones de reintento, timeout |
| 6.8 Patrones Asincronos Avanzados | Parallel, Throttling, Debouncing, AbortController |

### Modulo 7: Programacion Orientada a Objetos

| Leccion | Temas Clave |
|:---|:---|
| 7.1 Introduccion a POO | Conceptos, objetos literales, notacion de punto y corchete |
| 7.2 Funciones Constructoras | new, prototype, constructor, patron de objetos |
| 7.3 Clases y Syntax | class, constructor, metodos, estaticos, getters/setters |
| 7.4 Herencia y Polimorfismo | extends, super, override, instanceof |
| 7.5 Encapsulamiento | Closures, WeakMap, # private fields |
| 7.6 Patrones de Diseno | Singleton, Factory, Observer, Module, Strategy |
| 7.7 Prototipos y Cadenas de Prototipos | prototype, __proto__, Object.create |

### Modulo 8: Web APIs y Browser

| Leccion | Temas Clave |
|:---|:---|
| 8.1 Introduccion a las Web APIs | Que son, compatibilidad, categorias |
| 8.2 Web Storage API | localStorage, sessionStorage, JSON, patrones |
| 8.3 Geolocation API | getCurrentPosition, watchPosition, errores |
| 8.4 Canvas API | getContext, dibujo, paths, imagenes, animacion |
| 8.5 Drag and Drop API | draggable, events, dataTransfer, drop zones |
| 8.6 Intersection Observer API | Callback, options, lazy loading, infinite scroll |
| 8.7 History API | pushState, replaceState, popstate, SPA routing |
| 8.8 Web Workers y Performance | Worker, postMessage, requestAnimationFrame |

### Modulo 9: Herramientas y Ecosistema

| Leccion | Temas Clave |
|:---|:---|
| 9.1 NPM y Gestor de Paquetes | package.json, scripts, semantic versioning |
| 9.2 Module Bundlers | Vite, Webpack, loaders, plugins |
| 9.3 ES Modules vs CommonJS | import/export, require, dynamic imports |
| 9.4 Testing con Jest/Vitest | describe/it/expect, matchers, mocks, coverage |
| 9.5 TypeScript Basics | Tipos, interfaces, generics, config |
| 9.6 Linting y Formateo | ESLint, Prettier, integracion |
| 9.7 Git para Desarrolladores | Commits semanticos, branching, Git Flow |
| 9.8 Deployment y CI/CD | GitHub Pages, Vercel, Netlify, GitHub Actions |

### Modulo 10: Proyecto Final Integrador

| Leccion | Temas Clave |
|:---|:---|
| 10.1 Planificacion del Proyecto | Alcance, wireframes, arquitectura, stack |
| 10.2 Configuracion del Entorno | Vite, estructura, Git, linting |
| 10.3 Componente de Autenticacion | Login, registro, validacion, sesion |
| 10.4 Sistema de Rutas | Hash routing, SPA, navegacion |
| 10.5 API y Datos | Fetch, CRUD, estados de carga |
| 10.6 Interfaz de Usuario | Componentes, templates, renderizado dinamico |
| 10.7 Estado y Almacenamiento | localStorage, patrones de estado |
| 10.8 Funcionalidades Avanzadas | Busqueda, filtros, paginacion, ordenamiento |
| 10.9 Pruebas y Refactorizacion | Tests, refactorizar, documentar |
| 10.10 Deployment y Publicacion | GitHub Pages, SEO, performance, checklist |

---

## Proyectos Practicos

| Proyecto | Tecnologias Principales | Dificultad |
|:---|:---|:---:|
| Calculator App | DOM, Eventos, eval(), State Management | Basico |
| Todo App con Persistencia | CRUD, localStorage, Drag & Drop | Intermedio |
| Weather Dashboard | Fetch API, Async/Await, Geolocation | Intermedio |
| E-commerce Cart | Objetos, Arrays, State, DOM | Intermedio |
| Real-time Chat UI | WebSockets, DOM, Eventos, Async | Avanzado |

---

## Tecnologias y Conceptos Cubiertos

### JavaScript Moderno (ES6+)

- Variables (let, const, var) y alcance
- Tipos de datos primitivos y compuestos
- Operadores aritmeticos, logicos y de comparacion
- Templates Literales y tagged templates
- Arrow Functions y lexico de this
- Desestructuracion de arrays y objetos
- Spread y Rest operators
- Promesas y Async/Await
- Fetch API y peticiones HTTP
- Closures y funciones de orden superior
- IIFE y patrones de modulo

### Manipulacion del DOM

- Selectores (getElementById, querySelector, querySelectorAll)
- Creacion, modificacion y eliminacion de elementos
- Eventos y delegacion de eventos
- Formularios y validacion
- Animaciones con requestAnimationFrame

### Programacion Orientada a Objetos

- Objetos literales y propiedades dinamicas
- Funciones constructoras y prototype
- Clases, herencia y polimorfismo
- Encapsulamiento (closures, # private fields)
- Patrones de diseno (Singleton, Factory, Observer)

### Web APIs

- Web Storage (localStorage, sessionStorage)
- Geolocation API
- Canvas API
- Drag and Drop API
- Intersection Observer API
- History API
- Web Workers

### Herramientas de Desarrollo

- NPM y gestion de paquetes
- Vite y Webpack (module bundlers)
- ES Modules y CommonJS
- Testing con Jest/Vitest
- TypeScript basico
- ESLint y Prettier
- Git y GitHub (commits semanticos, branching)
- Deployment (GitHub Pages, Vercel, Netlify)

### Asincronia

- Event Loop y Call Stack
- Callbacks, Promesas, Async/Await
- Fetch API (GET, POST, PUT, DELETE)
- Promise.all, Promise.race, Promise.any
- Debounce, Throttle, AbortController
- Patrones de reintento con backoff exponencial

### Accesibilidad

- ARIA labels, roles, live regions
- Navegacion por teclado completa
- Focus management y focus visible
- Contraste de colores (WCAG 2.1 AA)
- Semantic HTML structure
- Formularios accesibles con labels asociados

---

## Como Usar Este Curso

### 1. Clonar o descargar

```bash
git clone https://github.com/Dvskked/curso-js.git
```

### 2. Abrir en tu navegador

Simplemente abre el archivo `index.html` en tu navegador. No necesitas un servidor local.

### 3. Explorar los modulos

Navega por la barra de menu para ir a cualquier seccion del curso. Cada modulo contiene sus lecciones con contenido completo visible: explicaciones, ejemplos de codigo, comparaciones y ejercicios practicos.

### 4. Practicar con los ejemplos

Cada leccion incluye codigo que puedes copiar y experimentar. Modifica los valores, cambia los parametros, rompe las cosas. Aprender haciendo es la mejor manera.

### 5. Construir los proyectos

Lee la planificacion de cada proyecto, intenta construirlo por tu cuenta primero, compara tu solucion con la del curso, refactoriza y mejora tu codigo.

---

## Prerrequisitos

| Requisito | Detalle |
|:---|:---|
| Navegador web moderno | Chrome 90+, Firefox 90+, Edge 90+, Safari 15+ |
| Editor de codigo | VS Code (recomendado), Sublime Text |
| Computadora basica | Con sistema operativo funcional y conexion a internet |
| Ganas de aprender | Curiosidad, paciencia y practica constante |

No se requieren conocimientos previos de programacion. Este curso empieza desde cero. Conocimientos basicos de HTML y CSS son un plus pero no obligatorios.

---

## Recursos Adicionales

### Documentacion Oficial

| Recurso | URL |
|:---|:---|
| MDN Web Docs | [developer.mozilla.org](https://developer.mozilla.org/) |
| JavaScript.info | [javascript.info](https://javascript.info/) |
| Eloquent JavaScript | [eloquentjavascript.net](https://eloquentjavascript.net/) |
| Can I Use | [caniuse.com](https://caniuse.com/) |

### Herramientas de Desarrollo

| Herramienta | URL |
|:---|:---|
| Chrome DevTools | Built-in (F12) |
| CodePen | [codepen.io](https://codepen.io/) |
| JSFiddle | [jsfiddle.net](https://jsfiddle.net/) |
| StackBlitz | [stackblitz.com](https://stackblitz.com/) |
| ESLint | [eslint.org](https://eslint.org/) |
| Prettier | [prettier.io](https://prettier.io/) |

### Comunidades y Aprendizaje

| Comunidad | Plataforma |
|:---|:---|
| r/javascript | Reddit |
| freeCodeCamp | Plataforma de cursos |
| LeetCode | Retos de programacion |
| Dev.to | Comunidad de desarrolladores |

---

## Licencia

```
MIT License

Copyright (c) 2026 Andres Felipe Forero Sanchez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contacto

| Plataforma | Enlace |
|:---|:---|
| GitHub | [github.com/Dvskked](https://github.com/Dvskked) |
| Email | [siriusplanet76@gmail.com](mailto:siriusplanet76@gmail.com) |
| Portfolio | [dvskked.github.io/andres.github.io](https://dvskked.github.io/andres.github.io/) |

> Tienes preguntas, sugerencias o encontraste un error? No dudes en contactarme o abrir un [issue](https://github.com/Dvskked/curso-js/issues) en el repositorio.

---

Hecho con JavaScript y pasion por Andres Felipe Forero Sanchez.
