# Use Node.js for building the app
FROM node:20 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight Node.js image for running the app
FROM node:20-alpine AS runtime
WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app ./

# Set the environment to production
ENV NODE_ENV=production

# Expose the port Next.js runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
