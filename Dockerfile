# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos necesarios para tu aplicación
COPY package*.json ./
COPY src ./src
COPY test ./test

# Instala las dependencias de tu aplicación
RUN npm install

# Expone el puerto 8081 en el contenedor
EXPOSE 8081

# Comando para ejecutar tu aplicación cuando se inicie el contenedor
CMD ["node", "src/main.js"]
