# trampos.co / areajobs.co – Job Board

Este repositorio contiene la solución para el desafío técnico de una bolsa de trabajo, desarrollada con React y Vite. Aquí encontrarás las decisiones técnicas, estructura del proyecto, principales funcionalidades e instrucciones de ejecución.

## Índice

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Principales Funcionalidades](#principales-funcionalidades)
- [Diseño y Layout](#diseño-y-layout)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Validación y Seguridad](#validación-y-seguridad)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Consideraciones Finales](#consideraciones-finales)

---

## Sobre el Proyecto

El objetivo de este proyecto es crear una aplicación web para listar y registrar ofertas de empleo, utilizando React, Vite y Context API. El sistema permite visualizar, filtrar, buscar y registrar nuevas ofertas, con datos persistidos en un archivo JSON. El enfoque está en entregar una solución funcional, clara, responsiva y fácil de mantener.

## Principales Funcionalidades

- **Listado de ofertas:** Visualiza ofertas de empleo con detalles como título, empresa, tipo de contratación, localidad, salario, responsable y descripción.
- **Búsqueda y filtro:** Busca ofertas por título o empresa y filtra por localidad (Presencial, Remoto, Híbrido).
- **Registro de nueva oferta:** Formulario completo para registrar una nueva oferta, con validación de campos obligatorios y sanitización contra XSS.
- **Context API:** Centralización del estado de las ofertas, facilitando el intercambio de datos y funciones entre componentes.
- **Interfaz responsiva:** Layout adaptado para diferentes tamaños de pantalla, con diseño limpio y moderno.

## Diseño y Layout

El diseño de la interfaz fue planificado previamente en Figma, con la creación de wireframes para todas las pantallas principales del sistema. El objetivo fue garantizar una experiencia de usuario clara, intuitiva y responsiva, alineada con la propuesta del proyecto.

- **Wireframes:** Sirvieron como guía visual para la implementación de los componentes y flujos de navegación.
- **Decisiones visuales:** Paleta de colores, tipografía y espaciados definidos para un aspecto moderno y agradable.
- **Herramienta utilizada:** [Figma](https://figma.com/) para prototipado y documentación visual.

[Wireframe en Figma](https://www.figma.com/design/t2RBtA2UQ22fbk0LdJs7yZ/areajobs.co?node-id=0-1&t=5u3zaTBjghkNfweB-1)  

## Decisiones Técnicas

- **Stack:** React + Vite, CSS Modules para estilos, Context API para gestión de estado.
- **Componentización:** Separación en componentes reutilizables (Navbar, Footer, JobList, JobDetails, CreateJob).
- **Carga y persistencia de datos:** Las ofertas se cargan desde el archivo `public/data/jobs.json` y las nuevas ofertas se registran en el contexto global (simulación de persistencia).
- **Validación y seguridad:** Todos los campos del formulario de oferta tienen validación obligatoria y sanitización de entradas para evitar XSS.
- **Responsividad:** Layout adaptado para escritorio y móvil, usando CSS moderno.

## Estructura del Proyecto

```
├── public/
│   └── data/
│       └── jobs.json         # Base de datos de ofertas
├── src/
│   ├── assets/               # Imágenes y assets estáticos
│   ├── components/
│   │   ├── Footer/           # Pie de página
│   │   ├── Jobs/             # Componentes relacionados a ofertas
│   │   │   ├── context/      # Contexto global de ofertas
|           ├── modules/      # Módulos de estilo CSS
│   │   ├── Navbar/           # Barra de navegación
│   ├── App.jsx               # Componente raíz
│   └── main.jsx              # Punto de entrada
├── index.html                # HTML principal
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

## Validación y Seguridad

- **Validación de campos obligatorios:** El formulario de registro de oferta impide el envío de campos vacíos.
- **Sanitización contra XSS:** Todas las entradas del usuario son sanitizadas antes de ser procesadas o mostradas.
- **Feedback inmediato:** Se muestran alertas al usuario en caso de error o éxito en el registro.

## Cómo Ejecutar

1. **Requisitos previos:**
    - Node.js (18+ recomendado)
    - pnpm, npm o yarn

2. **Instalación:**
    ```bash
    pnpm install
    # o
    npm install
    # o
    yarn
    ```

3. **Ejecución en modo desarrollo:**
    ```bash
    pnpm dev
    # o
    npm run dev
    # o
    yarn dev
    ```
    Accede a [http://localhost:5173](http://localhost:5173) en el navegador.

## Capturas de Pantalla

![Página de Listado de Ofertas](https://i.postimg.cc/KvZY0LWD/snapshot-areajobs-listjobs.png)  
![Página de Registro de Oferta](https://i.postimg.cc/8zczSGNF/snapshot-areajobs-createjob.png)

## Consideraciones Finales

Este proyecto fue desarrollado priorizando claridad, organización y experiencia de usuario. El código está estructurado para facilitar el mantenimiento y evolución. ¡Sugerencias y mejoras son bienvenidas!

---

**Autor:** João Leite  
**Blog:** [Astral Thoughts](https://astralfracture.bearblog.dev/)

---