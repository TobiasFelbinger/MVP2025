# Use Node.js LTS
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install -g expo-cli
RUN npm install react react-native expo expo-status-bar
RUN npm install react-native-safe-area-context @tanstack/react-query expo-splash-screen
RUN npm install -D @types/react @types/react-native

# Copy the rest of the application
COPY . .

# Expose necessary ports
EXPOSE 19000 19001 19002 5000

# Start command
CMD ["npx", "expo", "start", "--dev-client"] 