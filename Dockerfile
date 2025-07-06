FROM node:18-alpine

WORKDIR /app

# Install wait-for-it script
RUN apk add --no-cache bash

# Copy package files
COPY . .

# Install dependencies
RUN npm install

# Generate Prisma clients
RUN npx prisma generate --schema=./prisma/postgres/schema.prisma
RUN npx prisma generate --schema=./prisma/mongo/schema.prisma

# Build the application
RUN npm run build

# Create startup script
RUN echo '#!/bin/bash' > /app/start.sh && \
    echo 'set -e' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo 'echo "Waiting for PostgreSQL to be ready..."' >> /app/start.sh && \
    echo 'until npx prisma db push --schema=./prisma/postgres/schema.prisma --skip-generate; do' >> /app/start.sh && \
    echo '  echo "PostgreSQL is unavailable - sleeping"' >> /app/start.sh && \
    echo '  sleep 2' >> /app/start.sh && \
    echo 'done' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo 'echo "PostgreSQL is up - checking migrations..."' >> /app/start.sh && \
    echo 'if [ -d "prisma/migrations" ] && [ "$(ls -A prisma/migrations)" ]; then' >> /app/start.sh && \
    echo '  echo "Migrations found - running migrate deploy..."' >> /app/start.sh && \
    echo '  npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma' >> /app/start.sh && \
    echo 'else' >> /app/start.sh && \
    echo '  echo "No migrations found - using db push for schema sync..."' >> /app/start.sh && \
    echo '  npx prisma db push --schema=./prisma/postgres/schema.prisma' >> /app/start.sh && \
    echo 'fi' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo 'echo "Starting application..."' >> /app/start.sh && \
    echo 'npm run start:dev' >> /app/start.sh && \
    chmod +x /app/start.sh

# Expose the port
EXPOSE 3000

# Start the application with startup script
CMD ["/app/start.sh"]