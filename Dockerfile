# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
# Copy package.json and package-lock.json first to cache dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of your application code
COPY . .
# Build the optimized production version of the app
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
# Copy the built files from Stage 1 into the Nginx server directory
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 for web traffic
EXPOSE 80
# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]