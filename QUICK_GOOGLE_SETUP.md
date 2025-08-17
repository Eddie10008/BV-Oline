# Quick Google OAuth Setup Guide

## 🚀 Get Google OAuth Working in 5 Minutes

### Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create/Select Project**: 
   - Click on the project dropdown at the top
   - Click "New Project" or select existing one
   - Give it a name like "Bhartiya Vastra OAuth"

3. **Enable Google+ API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" 
   - Click on it and press "Enable"

4. **Create OAuth Credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Name: "Bhartiya Vastra Web Client"
   - **Authorized redirect URIs**: Add `http://localhost:3000/api/auth/callback/google`
   - Click "Create"

5. **Copy Credentials**:
   - You'll see a popup with your Client ID and Client Secret
   - Copy both values

### Step 2: Update Environment Variables

1. **Open `.env.local`** in your project root
2. **Replace the placeholder values**:
   ```env
   GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=GOCSPX-your-actual-secret-here
   ```

### Step 3: Enable Google Provider

1. **Open `lib/auth.ts`**
2. **Uncomment the Google provider** (remove the `//` comments):
   ```typescript
   GoogleProvider({
     clientId: process.env.GOOGLE_CLIENT_ID || '',
     clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
   }),
   ```

### Step 4: Restart Server

```bash
npm run dev
```

### Step 5: Test

1. Go to `http://localhost:3000/auth/signin`
2. Click the "Google" button
3. You should be redirected to Google's login page

## 🔧 Troubleshooting

### "Invalid redirect URI" Error
- Make sure the redirect URI in Google Console is exactly: `http://localhost:3000/api/auth/callback/google`
- No extra spaces or characters

### "Client ID not found" Error
- Check that your `.env.local` file has the correct Client ID and Secret
- Make sure there are no extra spaces or quotes around the values

### Still not working?
- Check the terminal for error messages
- Make sure you've restarted the development server
- Verify the Google+ API is enabled in your Google Cloud project

## 📞 Need Help?

If you're still having issues:
1. Check the detailed guide in `GOOGLE_OAUTH_SETUP.md`
2. Make sure your Google Cloud project is properly configured
3. Verify all environment variables are set correctly
