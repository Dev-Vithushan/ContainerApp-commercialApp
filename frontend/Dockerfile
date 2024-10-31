# Use Node.js official image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port and define command
EXPOSE 3000
CMD ["npm", "start"]
