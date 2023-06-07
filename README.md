## BIENVENIDOS A:

![ScreenShot](https://res.cloudinary.com/dhd78l3go/image/upload/v1686010912/logo_pingui_yab5lp.png)
## PINGUI WALLET -FRONTEND- 
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