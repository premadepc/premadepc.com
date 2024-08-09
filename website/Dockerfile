# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Expose the port Nuxt will run on
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
