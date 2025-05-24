# Strapi v5 + Node 18 LTS
FROM node:18-alpine

WORKDIR /app

# Install dependencies early (layer caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build Strapi admin panel
RUN npm run build

EXPOSE 1337
CMD ["npm", "start"]
