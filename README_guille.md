## BIENVENIDOS A:

![ScreenShot](https://res.cloudinary.com/dhd78l3go/image/upload/v1686010912/logo_pingui_yab5lp.png)
## PINGUI WALLET -FRONTEND- 
![ScreenShot](https://res.cloudinary.com/dpiwmbsog/image/upload/v1686188113/wallet/principalpw_ectfld.png)

</br>

## 👨‍💻 Dependencias
* Node 16.19.0
* React : 18.2.0:
* Vite 4.3.2
* react-redux: 8.0.5
* @reduxjs/toolkit": 1.9.5
* react-dom: 18.0.11
* react-router-dom: 6.11.2.
* axios: 1.4.0
* uuid:  9.0.0
* tailwindcss: 3.3.2
* @mui/material: 5.13.2

</br>

* iconos
  * @heroicons/react": 1.0.4,
  * IonIcons : 7.1.0, directamente en el HTML sin instalarlo.

</br>   

* para normalizar codigo
  * autoprefixer: 10.4.14
  * eslint: 8.38.0
  * eslint-plugin-react-hooks: 4.6.0
  * eslint-plugin-react-refresh: 0.3.4
  * standard: 17.0.0
  * postcss": 8.4.23

</br>

## 🚀 Caracteristica
  * Landing page (pagina de precentacion)
  * Login/Reegistro
  * Seccion exclusiva para el usuario.
  * CRUD de tarjeta de credito.
  * CRUD de Usuario (a medias, se puede listar y modificar).
  * Transacciones, se pueden realizar transacciones entre usuarios, (transferir dinero o pagar factura).
  * Se visualiza el historial de Transacciones.
  * Canales de Contacto, Denuncias y Reclamos.
  * Se creo los slice, para poder crear, modificar, listar y eliminar, en todos los casos, aunque no se usaron todos.
  * CRUD de Presupuestos (no se puede modifica, si elmiminar y añadir uno nuevo)

</br>

## 📦 Instalación
  * Clonamos el repo 
  ```bash
  ╭─pescado at rabioso in ~/
  ╰─± git clone https://github.com/No-Country/Virtual_Wallet_MERN/tree/develop
  ```
  * Accedemos al Cliente:
  ```bash
  ╭─pescado at rabioso in ~/
  ╰─± cd Virtual_Wallet_MERN/client
  ```
  * Instalamos las dependencias necesarias:
  ```bash
  ╭─pescado at rabioso in ~/Virtual_Wallet_MERN/client
  ╰─± npm install
  ```
  * Iniciamos la Applicación web
  ```bash
  ╭─pescado at rabioso in ~/Virtual_Wallet_MERN/client
  ╰─± npm run dev
  ```

## 😘 Demo
 <!--aca coloca el deploy  -->

</br>

## 📷 Capturas de Pantalla
### 🥰 Vistaso al Home
![🛸 Vistazo Detalles](https://res.cloudinary.com/dpiwmbsog/image/upload/v1686188304/wallet/pwcap1_vcrrot.png "home")

### 🥰 Responsive Home & Presupuesto
![🛸 Vistazo Detalles](https://res.cloudinary.com/dpiwmbsog/image/upload/v1686210075/wallet/cap2_xjncd2.png "home responsive")

### 🥰 Responsive Perfil & Transaccion
![🛸 Vistazo Detalles](https://res.cloudinary.com/dpiwmbsog/image/upload/v1686210075/wallet/Captur1_l9kkfs.png "home")


</br>

## 👥 Integrantes del Front-end

| <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1664465766/Integrantes/Yamila_gi0sl2.jpg" width=50>| <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1664465581/Integrantes/Nora_kmtlar.jpg" width=50>|
|:-:|:-:|
| **Yamila Paez**| **Nora Saucedo**|
| <a href="https://github.com/Bellantra"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/yamila-paez-70b7587b/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> | <a href="https://github.com/NorSAUCE"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/nora-patricia-saucedo-6b3746225"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> |


</br>

---
## PINGUI WALLET -BACKEND REST API-
![ScreenShot](https://i.ibb.co/crXKm66/Screenshot-from-2023-06-07-08-41-56.png)





## Servidor

Esta REST API consta de varios modelos y sus controladores para llevar a cabo la funcionalidad de 
la Wallet abasteciendo en el servicio al Frontend, persistiendo los datos en un cluster de MongoDB.
Manteniendo la seguridad mediante JWT para los accesos de usuarios a sus operaciones.

## NOTA

- Importante: Esta REST API es soporte al Frontend del siguiente repositorio: 
  https://github.com/No-Country/Virtual_Wallet_MERN/tree/develop/client

## Tecnologias

Para desarrollar el Backend se utilizo lo siguiente con conceptos de DevOps:
- NodeJS
- Express
- MongoDB
- Mongoose
- JWT
- Docker
- Ansible
- K8S
- Prometheus
- Grafana
- Github Actions
- Railway.app

## Installation

PINGUI SERVER REQUIERE [Node.js](https://nodejs.org/) v18+ PARA INICIAR.

Instalar las dependencias y las dependencias de desarrollo antes de correr el servidor.

```sh
cd server
npm i
npm run dev
```


## Contenedores
El Backend esta apto para correr en un entorno de produccion o desarrollo.
En caso de ultiza entorno de produccion puede correr el Deploy con docker compose.

```sh
cd server
generar la imagen Docker: docker build...
generar el contenedor Docker: docker run...
```
![ScreenShot](https://i.ibb.co/gVh0Qvp/Screenshot-from-2023-06-07-08-39-38.png)

## Monitorizacion

Se ha anexado al servidor local Prometheus con Grafana para ver el servicio de datos.

![ScreenShot](https://i.ibb.co/wKBdmvn/Screenshot-from-2023-06-06-09-13-38.png)

![ScreenShot](https://i.ibb.co/qFyDv3C/Screenshot-from-2023-06-06-09-16-25.png)

## K8S

El Backend esta adaptado para ser deployado en servidores como AWS, AZURE o GCP mediante
un cluster en Kubernetes.

![ScreenShot](https://i.ibb.co/4MJvyTr/Screenshot-from-2023-06-06-09-52-11.png)
![ScreenShot](https://i.ibb.co/tM8wT04/Screenshot-from-2023-06-06-09-55-54.png)

Para el manejo de K8S lo puede realizar con KUBECTL
![ScreenShot](https://i.ibb.co/YZtnF6L/Screenshot-from-2023-06-06-09-53-54.png)

## AUTOMATIZACION CI/CD

El CD esta basado en Github Actions y el CI esta anexado a Docker Hub para que Kubernetes 
obtenga la imagen actualizada de Deploy. Para esto puede utilizar ANSIBLE.

![ScreenShot](https://i.ibb.co/c18cdr0/Screenshot-from-2023-06-06-10-04-19.png)


## DEPLOY URL
https://rest-api-wallet-no-country-production.up.railway.app/
- Importante: agregar " /api " ademas de los declarados en " /routes " para acceder a los datos de la base de datos.
  Ejemplo: https://rest-api-wallet-no-country-production.up.railway.app/api/user/get-all