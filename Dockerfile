# Usa una imagen base de Node.js
FROM node:latest

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de tu aplicación
RUN npm install

# Copia el resto de los archivos de tu aplicación
COPY . .

# Expone el puerto 8081 en el contenedor
EXPOSE 8081

# Comando para ejecutar tu aplicación cuando se inicie el contenedor
CMD ["node", "src/main.js"]
