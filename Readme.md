# Sistema de Gestión de Información para Campus

## Descripción del Proyecto

Campus ha encargado a sus campers la construcción del backend en Node JS para un sistema de información. El objetivo es desarrollar una estructura de carpetas y archivos que siga las mejores prácticas, incluyendo funciones centralizadas en carpetas como "helpers" y "middlewares". Además, se requiere automatizar las consultas acerca del "level" de cada camper dentro de la ruta a la que pertenece en cada centro de entrenamiento del mundo.

## Base de Datos

- **Nombre:** trainerCenterDB
- **Motor:** MongoDB

## Colecciones y CRUDs

1. **Centro:**
   - Modelo: `Centro(ObjectId, nombre, descripción, estado, ciudad)`

2. **Ruta:**
   - Modelo: `Ruta(ObjectId, nombre, centro)`

3. **Level:**
   - Modelo: `Level(ObjectId, nombre, ruta, duración)`

4. **Camper:**
   - Modelo: `Camper(ObjectId, nombre, tipoIdentificacion, NroIdentificacion, email, password, level, levelState, estado, imagen, rol, promedio)`

5. **Role:**
   - Modelo: `Role(ObjectId, rol)`

## Dependencias y Herramientas

- **MongoDB:** Utilizar Mongo Atlas (Nube) y Mongo Compass (Local).
- **Cliente REST:** Postman.
- **Manejo de Dependencias:** Npm.

## Autenticación y Seguridad

- JWT con expiración de 2 horas.
- Middlewares para autenticación y protección de rutas.

## Estructura del Servidor

- Paradigma: Orientado a Objetos (POO).
- Clase "Servidor" centralizando recursos mediante propiedades y métodos.

## Validaciones

### Camper

1. **POST - localhost:8001/api/campers:**
   - Tipo de identificación: T.I y C.C.
   - Nro de identificación: 10 caracteres exactos.
   - Nombre no vacío.
   - Contraseña mínima: 8 caracteres.
   - Email con formato válido y no duplicado.
   - Rol válido para postear: "trainerRol".

2. **GET - localhost:8001/api/campers:**
   - Paginado de 10 en 10 documentos con "total" de campers.
   - Incluir nombre del nivel actual de la ruta (Level).

3. **DELETE - localhost:8001/api/campers/:id:**
   - JWT válido.
   - Rol válido para borrar: "gerenteRol".
   - Id con formato Mongo válido y existente.

4. **PUT - localhost:8001/api/campers/:id:**
   - JWT válido.
   - Id con formato Mongo válido y existente.
   - Roles válidos para actualizar: "gerenteRol y trainerRol".
   - levelState válido para subir de nivel.
   - Duración estimada cumplida para subir de nivel.

### Level

1. **POST - localhost:8001/api/levels:**
   - JWT válido.
   - Nombre de nivel obligatorio.

2. **GET - localhost:8001/api/levels:**
   - Paginado de 5 en 5 levels con "total".
   - Incluir nombre de la ruta en la devolución de documentos.

3. **DELETE - localhost:8001/api/levels/:id:**
   - JWT válido.
   - Rol válido para borrar el level: "trainerRol".
   - Id con formato Mongo válido y existente.

4. **PUT - localhost:8001/api/levels/:id:**
   - JWT válido.
   - Id con formato Mongo válido y existente.
   - Roles válidos para actualizar: "camperRol y trainerRol".

### Ruta

1. **POST - localhost:8001/api/rutas:**
   - Nombre de ruta obligatorio.

2. **GET - localhost:8001/api/rutas:**
   - Paginado de 2 en 2 rutas con "total".
   - Incluir nombre del Centro de entrenamiento.

3. **DELETE - localhost:8001/api/rutas/:id:**
   - JWT válido.
   - Rol válido para borrar la ruta: "gerenteRol".
   - Id con formato Mongo válido y existente.

4. **PUT - localhost:8001/api/rutas/:id:**
   - JWT válido.
   - Id con formato Mongo válido y existente.
   - Rol válido para actualizar rutas: "trainerRol".

### Centro

1. **POST - localhost:8001/api/centros:**
   - JWT válido.
   - Nombre de centro obligatorio.
   - Rol válido para postear: "gerenteRol".

2. **GET - localhost:8001/api/centros:**
   - Paginado de 3 en 3 documentos con "total".

3. **DELETE - localhost:8001/api/centros/:id:**
   - JWT válido.
   - Id con formato Mongo válido y existente.

4. **PUT - localhost:8001/api/centros/:id:**
   - JWT válido.
   - Id con formato Mongo válido y existente.

## Guía de Instalación y Uso

1. Clona el repositorio desde [https://github.com/DeibyAlexander/RutasCampus].

2. Baja a la carpeta backend e Instala las dependencias usando 

        cd backend
        npm install

3. Configura la conexión a la base de datos MongoDB en el archivo de configuración.
4. Ejecuta la aplicación utilizando 
        
        npm run dev

5. Accede a la aplicación a través de tu navegador web en [http://localhost:9000].

