# Use an official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the Svelte app will run on
EXPOSE 5000

# Run the Svelte development server
CMD ["npm", "run", "dev", "--", "--host"]
