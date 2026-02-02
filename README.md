# Roomie Landing Page

A modern, animated landing page for Roomie - the roommate matching app.

## Features

- 🎨 Modern, attractive design with animations
- 🚀 Built with Next.js 14, TypeScript, and Tailwind CSS
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 📝 Waitlist signup functionality
- 🎯 No gradients, clean color scheme (#2d9d9d)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd roomie-landing
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Build the static site:

```bash
npm run build
```

The output will be in the `out` directory, ready to deploy to any static hosting service.

### Deployment

You can deploy the `out` directory to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Customization

### Colors

Edit `tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: '#2d9d9d',
  'primary-dark': '#247d7d',
  'primary-light': '#3dbdbd',
},
```

### Content

Edit the following files to customize content:
- `app/page.tsx` - Main page structure
- `components/Hero.tsx` - Hero section
- `components/Features.tsx` - Features section
- `components/HowItWorks.tsx` - How it works section
- `components/Security.tsx` - Security features
- `components/WaitlistModal.tsx` - Waitlist form

### Email Integration

To connect the waitlist form to a real email service:

1. Choose a service (Mailchimp, ConvertKit, SendGrid, etc.)
2. Add your API credentials to environment variables
3. Update the form submission logic in `components/WaitlistModal.tsx`

Example with a simple API endpoint:

```typescript
const response = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## License

MIT License - feel free to use this for your project!

## Support

For questions or issues, contact the development team.
