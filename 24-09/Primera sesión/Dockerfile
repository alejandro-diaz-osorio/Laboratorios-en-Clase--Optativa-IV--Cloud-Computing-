# 1. Traer una imagen oficial de Node.js (versión ligera) como base
FROM node:18-alpine

# 2. Crear y usar una carpeta dentro del contenedor para nuestra app
WORKDIR /usr/src/app

# 3. Copiar el archivo package.json para instalar las dependencias
COPY package*.json ./

# 4. Instalar Express dentro del contenedor
RUN npm install

# 5. Copiar el resto de nuestro código (el archivo server.js) al contenedor
COPY . .

# 6. Informar que el contenedor usará internamente el puerto 3000
EXPOSE 3000

# 7. El comando que arranca nuestra aplicación web
CMD ["npm", "start"]