#!/bin/bash

# FlowForward Project Structure Setup Script
# This script creates the complete directory structure for the FlowForward nonprofit website

echo "🚀 Setting up FlowForward project structure..."

# Check if we're in the right directory (should contain package.json after create-next-app)
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script in your FlowForward project directory after running create-next-app."
    echo "Expected location: ~/Projects/flowforward/"
    exit 1
fi

echo "✅ Found package.json, proceeding with directory creation..."

# Create main app directories
echo "📁 Creating app directories..."
mkdir -p app/about
mkdir -p app/blog
mkdir -p app/contact
mkdir -p app/donate
mkdir -p app/get-involved
mkdir -p app/impact
mkdir -p app/privacy
mkdir -p app/resources
mkdir -p app/shop
mkdir -p app/terms
mkdir -p app/transparency

# Create API directories
echo "📁 Creating API directories..."
mkdir -p app/api/auth
mkdir -p app/api/create-checkout-session
mkdir -p app/api/contact
mkdir -p app/api/newsletter
mkdir -p app/api/volunteer-application
mkdir -p app/api/partner-application
mkdir -p app/api/webhooks

# Create components directory
echo "📁 Creating components directory..."
mkdir -p components

# Create lib directories
echo "📁 Creating lib directories..."
mkdir -p lib/models
mkdir -p lib/utils

# Create public directories
echo "📁 Creating public directories..."
mkdir -p public/images
mkdir -p public/icons

# Create styles directory (if it doesn't exist)
mkdir -p styles

# Create placeholder files for key directories
echo "📄 Creating placeholder files..."

# Create page.tsx files for main routes
cat > app/about/page.tsx << 'EOF'
export default function AboutPage() {
  return (
    <div>
      <h1>About FlowForward</h1>
      <p>About page content goes here...</p>
    </div>
  )
}
EOF

cat > app/blog/page.tsx << 'EOF'
export default function BlogPage() {
  return (
    <div>
      <h1>FlowForward Blog</h1>
      <p>Blog content goes here...</p>
    </div>
  )
}
EOF

cat > app/contact/page.tsx << 'EOF'
export default function ContactPage() {
  return (
    <div>
      <h1>Contact FlowForward</h1>
      <p>Contact form goes here...</p>
    </div>
  )
}
EOF

cat > app/donate/page.tsx << 'EOF'
export default function DonatePage() {
  return (
    <div>
      <h1>Donate to FlowForward</h1>
      <p>Donation form goes here...</p>
    </div>
  )
}
EOF

cat > app/get-involved/page.tsx << 'EOF'
export default function GetInvolvedPage() {
  return (
    <div>
      <h1>Get Involved with FlowForward</h1>
      <p>Volunteer and partnership information goes here...</p>
    </div>
  )
}
EOF

cat > app/impact/page.tsx << 'EOF'
export default function ImpactPage() {
  return (
    <div>
      <h1>Our Impact</h1>
      <p>Impact statistics and stories go here...</p>
    </div>
  )
}
EOF

cat > app/privacy/page.tsx << 'EOF'
export default function PrivacyPage() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>Privacy policy content goes here...</p>
    </div>
  )
}
EOF

cat > app/resources/page.tsx << 'EOF'
export default function ResourcesPage() {
  return (
    <div>
      <h1>Resources</h1>
      <p>Educational resources go here...</p>
    </div>
  )
}
EOF

cat > app/shop/page.tsx << 'EOF'
export default function ShopPage() {
  return (
    <div>
      <h1>FlowForward Shop</h1>
      <p>Merchandise store goes here...</p>
    </div>
  )
}
EOF

cat > app/terms/page.tsx << 'EOF'
export default function TermsPage() {
  return (
    <div>
      <h1>Terms of Service</h1>
      <p>Terms of service content goes here...</p>
    </div>
  )
}
EOF

cat > app/transparency/page.tsx << 'EOF'
export default function TransparencyPage() {
  return (
    <div>
      <h1>Financial Transparency</h1>
      <p>Financial reports and transparency information goes here...</p>
    </div>
  )
}
EOF

# Create API route placeholders
cat > app/api/contact/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Contact form API logic goes here
  return NextResponse.json({ message: 'Contact form endpoint' })
}
EOF

cat > app/api/newsletter/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Newsletter signup API logic goes here
  return NextResponse.json({ message: 'Newsletter signup endpoint' })
}
EOF

cat > app/api/volunteer-application/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Volunteer application API logic goes here
  return NextResponse.json({ message: 'Volunteer application endpoint' })
}
EOF

cat > app/api/partner-application/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Partner application API logic goes here
  return NextResponse.json({ message: 'Partner application endpoint' })
}
EOF

# Create lib files
cat > lib/db.ts << 'EOF'
// Database connection file
// Add your MongoDB connection logic here
export default function dbConnect() {
  // Database connection logic goes here
}
EOF

cat > lib/utils/index.ts << 'EOF'
// Utility functions
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
EOF

# Create components placeholder
cat > components/README.md << 'EOF'
# Components Directory

This directory contains reusable React components for the FlowForward website.

## Planned Components:
- Navbar.tsx
- Footer.tsx
- DonationForm.tsx
- VolunteerForm.tsx
- ContactForm.tsx
- Newsletter.tsx
- ImpactStats.tsx
- TestimonialCard.tsx
EOF

# Create .gitkeep files for empty directories that should be tracked
touch public/images/.gitkeep
touch public/icons/.gitkeep

# Create a README for the project structure
cat > PROJECT_STRUCTURE.md << 'EOF'
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
EOF

echo ""
echo "🎉 FlowForward project structure created successfully!"
echo ""
echo "📁 Directory structure:"
echo "├── app/ (with all page routes)"
echo "├── components/"
echo "├── lib/ (with models and utils)"
echo "├── public/ (with images and icons folders)"
echo "└── styles/"
echo ""
echo "📄 Created placeholder files:"
echo "✅ Page components for all routes"
echo "✅ API route templates"
echo "✅ Utility functions"
echo "✅ Database connection template"
echo "✅ Project documentation"
echo ""
echo "🚀 Next steps:"
echo "1. Copy the provided component files (Navbar, Footer, etc.)"
echo "2. Set up your .env.local file"
echo "3. Install additional dependencies"
echo "4. Start development with: npm run dev"
echo ""
echo "📖 See PROJECT_STRUCTURE.md for detailed information"
