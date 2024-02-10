# Build the React app
FROM node:20 as builder

# Set the working directory in the container
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Copy the built React app 
COPY build /app/build

# Install serve globally using npm
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to run when the container starts
CMD ["serve", "-s", "build", "-l", "3000"]
