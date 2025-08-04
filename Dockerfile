# -------- Build Stage --------
FROM node:20 AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source and build Vite frontend
COPY . .
RUN npm run build

# -------- Run Stage --------
FROM node:20 AS runner

WORKDIR /app

# Copy only the files needed to run the app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/api.js ./api.js
COPY --from=builder /app/package.json ./

# Expose the API port (adjust if needed)
EXPOSE 3000

# Start the API server
CMD ["node", "api.js"]
