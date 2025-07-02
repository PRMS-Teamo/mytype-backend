FROM node:18-alpine

WORKDIR /app

# Install wait-for-it script
RUN apk add --no-cache bash

# Copy package files
COPY package*.json ./
COPY prisma ./prisma

# Install dependencies
RUN npm install

RUN npm install -g @nestjs/cli

# Generate Prisma client
RUN npx prisma generate

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Create startup script
RUN echo '#!/bin/bash' > /app/start.sh && \
    echo 'set -e' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo 'echo "🔍 Checking database connection..."' >> /app/start.sh && \
    echo 'until npx prisma db push --skip-generate --accept-data-loss 2>/dev/null; do' >> /app/start.sh && \
    echo '  echo "⏳ PostgreSQL is unavailable - sleeping..."' >> /app/start.sh && \
    echo '  sleep 2' >> /app/start.sh && \
    echo 'done' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo 'echo "✅ PostgreSQL is up - processing schema changes..."' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo '# Check if force reset is enabled' >> /app/start.sh && \
    echo 'if [ "$PRISMA_FORCE_RESET" = "true" ]; then' >> /app/start.sh && \
    echo '  echo "🔄 Force reset enabled - resetting database..."' >> /app/start.sh && \
    echo '  npx prisma db push --force-reset --accept-data-loss' >> /app/start.sh && \
    echo '  echo "✅ Database reset complete"' >> /app/start.sh && \
    echo 'else' >> /app/start.sh && \
    echo '  # Check for migration files' >> /app/start.sh && \
    echo '  if [ -d "prisma/migrations" ] && [ "$(ls -A prisma/migrations 2>/dev/null)" ]; then' >> /app/start.sh && \
    echo '    echo "📁 Migrations found - checking migration status..."' >> /app/start.sh && \
    echo '    ' >> /app/start.sh && \
    echo '    # Try to apply migrations, if it fails, offer alternatives' >> /app/start.sh && \
    echo '    if npx prisma migrate deploy 2>/dev/null; then' >> /app/start.sh && \
    echo '      echo "✅ Migrations applied successfully"' >> /app/start.sh && \
    echo '    else' >> /app/start.sh && \
    echo '      echo "⚠️  Migration failed - attempting schema sync with data loss acceptance..."' >> /app/start.sh && \
    echo '      if npx prisma db push --accept-data-loss; then' >> /app/start.sh && \
    echo '        echo "✅ Schema synchronized with data loss acceptance"' >> /app/start.sh && \
    echo '      else' >> /app/start.sh && \
    echo '        echo "❌ Schema sync failed - resetting database..."' >> /app/start.sh && \
    echo '        npx prisma db push --force-reset --accept-data-loss' >> /app/start.sh && \
    echo '        echo "✅ Database reset and schema applied"' >> /app/start.sh && \
    echo '      fi' >> /app/start.sh && \
    echo '    fi' >> /app/start.sh && \
    echo '  else' >> /app/start.sh && \
    echo '    echo "📄 No migrations found - using db push for schema sync..."' >> /app/start.sh && \
    echo '    if npx prisma db push --accept-data-loss; then' >> /app/start.sh && \
    echo '      echo "✅ Schema synchronized"' >> /app/start.sh && \
    echo '    else' >> /app/start.sh && \
    echo '      echo "⚠️  Schema sync failed - forcing reset..."' >> /app/start.sh && \
    echo '      npx prisma db push --force-reset --accept-data-loss' >> /app/start.sh && \
    echo '      echo "✅ Database reset and schema applied"' >> /app/start.sh && \
    echo '    fi' >> /app/start.sh && \
    echo '  fi' >> /app/start.sh && \
    echo 'fi' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo 'echo "🚀 Starting application..."' >> /app/start.sh && \
    echo 'npm run start:dev' >> /app/start.sh && \
    chmod +x /app/start.sh

# Expose the port
EXPOSE 3000

# Start the application with startup script
CMD ["/app/start.sh"]