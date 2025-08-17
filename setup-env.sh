#!/bin/bash

echo "🚀 Setting up Google OAuth for Bhartiya Vastra"
echo "================================================"
echo ""

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists. Backing up to .env.local.backup"
    cp .env.local .env.local.backup
fi

# Generate a secure secret
SECRET=$(openssl rand -base64 32)

echo "📝 Creating .env.local file..."
cat > .env.local << EOF
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=${SECRET}

# Google OAuth Configuration
# Get these from https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Database
DATABASE_URL="file:./dev.db"
EOF

echo "✅ .env.local file created successfully!"
echo ""
echo "🔧 Next steps:"
echo "1. Go to https://console.cloud.google.com/"
echo "2. Create a new project or select existing one"
echo "3. Enable Google+ API"
echo "4. Create OAuth 2.0 credentials"
echo "5. Add redirect URI: http://localhost:3000/api/auth/callback/google"
echo "6. Replace 'your-google-client-id-here' and 'your-google-client-secret-here' in .env.local"
echo "7. Restart your development server: npm run dev"
echo ""
echo "📚 For detailed instructions, see GOOGLE_OAUTH_SETUP.md"
echo ""
echo "🔒 Your NEXTAUTH_SECRET has been automatically generated and is secure."
