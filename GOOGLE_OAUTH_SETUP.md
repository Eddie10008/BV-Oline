# Google OAuth Setup Guide

To enable Google signup/signin functionality, follow these steps:

## 1. Create Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)
5. Copy the Client ID and Client Secret

## 2. Set Up Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Database
DATABASE_URL="file:./dev.db"
```

## 3. Generate a Secure Secret

Generate a secure random string for NEXTAUTH_SECRET:

```bash
openssl rand -base64 32
```

Or use an online generator and replace `your-secret-key-here-change-in-production` with the generated string.

## 4. Restart the Development Server

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

## 5. Test the Integration

1. Go to `http://localhost:3000/auth/signin`
2. Click the "Google" button
3. You should be redirected to Google's OAuth consent screen
4. After authorization, you'll be redirected back to your application

## Troubleshooting

### Common Issues:

1. **"Invalid redirect URI" error**: Make sure the redirect URI in Google Console matches exactly: `http://localhost:3000/api/auth/callback/google`

2. **"Client ID not found" error**: Verify that your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correctly set in `.env.local`

3. **"NEXTAUTH_URL not set" warning**: Ensure `NEXTAUTH_URL` is set to your development URL

4. **"NEXTAUTH_SECRET not set" warning**: Generate and set a secure secret

### Security Notes:

- Never commit your `.env.local` file to version control
- Use different OAuth credentials for development and production
- Regularly rotate your secrets
- In production, use HTTPS URLs for all redirect URIs

## Production Deployment

For production deployment:

1. Create a new OAuth 2.0 client ID for your production domain
2. Add your production domain to authorized redirect URIs
3. Set `NEXTAUTH_URL` to your production URL
4. Use a strong, randomly generated `NEXTAUTH_SECRET`
5. Ensure your database is properly configured for production
