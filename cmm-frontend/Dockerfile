# Use Node.js image to build the app
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 5173 for development
EXPOSE 5173

# Set the command to run the app in development mode
CMD ["npm", "run", "dev"]