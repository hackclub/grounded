# Stage 1: Build frontend
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Run backend
FROM node:18

WORKDIR /app
COPY --from=builder /app /app

# Install only production dependencies
RUN npm install --omit=dev

# Set environment variables (optional for Coolify too)
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "api.js"]
