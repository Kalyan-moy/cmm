FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Install nodemon for development
RUN npm install --save-dev nodemon

# Default command
CMD ["npm", "run", "dev"]