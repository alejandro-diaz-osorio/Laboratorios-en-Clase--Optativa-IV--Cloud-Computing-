# Usa una imagen base oficial de Node.js (sistema ligero alpine)
FROM node:18-alpine
# Define la carpeta de trabajo dentro del contenedor
WORKDIR /app
# Copia el archivo de configuración de dependencias
COPY package*.json ./
# Instala las dependencias necesarias dentro del contenedor
RUN npm install
# Copia todo nuestro código fuente
COPY . .
# Expone el puerto que usa la app
EXPOSE 3000
# Comando para arrancar el servidor
CMD ["npm", "start"]