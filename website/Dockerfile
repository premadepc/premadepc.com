# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port Nuxt will run on
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "dev"]
