# FlowForward Project Structure

This document outlines the directory structure and purpose of each folder in the FlowForward nonprofit website.

## Directory Structure

```
flowforward/
├── app/                          # Next.js App Router pages
│   ├── about/                   # About page
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── create-checkout-session/ # Stripe checkout
│   │   ├── contact/            # Contact form endpoint
│   │   ├── newsletter/         # Newsletter signup
│   │   ├── volunteer-application/ # Volunteer applications
│   │   ├── partner-application/   # Partner applications
│   │   └── webhooks/           # Webhook handlers
│   ├── blog/                    # Blog pages
│   ├── contact/                 # Contact page
│   ├── donate/                  # Donation page
│   ├── get-involved/           # Volunteer/Partner page
│   ├── impact/                  # Impact statistics page
│   ├── privacy/                 # Privacy policy
│   ├── resources/              # Educational resources
│   ├── shop/                    # Merchandise store
│   ├── terms/                   # Terms of service
│   └── transparency/           # Financial transparency
├── components/                  # Reusable React components
├── lib/                         # Utility libraries
│   ├── models/                 # Database models
│   ├── utils/                  # Helper functions
│   └── db.ts                   # Database connection
├── public/                      # Static assets
│   ├── images/                 # Image files
│   └── icons/                  # Icon files
└── styles/                      # Global styles
```

## Next Steps

1. Copy the provided component files into their respective directories
2. Set up environment variables
3. Configure database connection
4. Implement authentication
5. Add Stripe integration
6. Deploy to production

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

For detailed setup instructions, see the DEPLOYMENT_GUIDE.md file.
