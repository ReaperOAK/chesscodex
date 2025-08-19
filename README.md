
# Kolkata Chess Academy & Aspire Chess Academy Branding

**Kolkata Chess Academy (KCA)** is our fully online head, providing all online coaching and dashboard support.

**Aspire Chess Academy** (A Unit of Kolkata Chess Academy) is used for SEO, operates primarily offline, and all its services are under KCA. 

# AspireChess - Premier Chess Academy Platform

AspireChess is a comprehensive web platform for a premier chess academy, providing educational resources, course offerings, tournament information, and community engagement for chess enthusiasts of all skill levels. All online services are managed by Kolkata Chess Academy.

## 🏆 Project Overview

This modern web application serves as the digital presence for AspireChess Chess Academy, featuring:

- **Multi-service Chess Education**: Online courses, in-school programs, workplace training
- **Tournament Management**: Monthly tournaments and competitive events
- **Community Features**: Gallery, testimonials, referral programs
- **Interactive Elements**: Game analysis tools, course comparisons, scholarship opportunities
- **Professional Services**: Collaboration opportunities and Pro membership features

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aspirechess

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Available Scripts

- `npm start` - Run development server
- `npm test` - Run test suite
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (irreversible)

## 🏗️ Architecture

### Frontend Architecture
- **Framework**: React 18.2.0 with Create React App
- **Routing**: React Router DOM v6 with lazy loading
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React and React Icons
- **Animations**: React Spring for smooth transitions
- **Carousel**: React Slick for image galleries

### Backend Services
- **Server**: PHP backend for form processing
- **Database**: MySQL with structured schemas
- **Email**: PHP mailer integration
- **File Handling**: Image upload and gallery management

### Key Features
- Progressive Web App (PWA) capabilities
- Mobile-responsive design
- SEO optimized
- Automated deployment via GitHub Actions

## 📁 Project Structure

```
aspirechess/
├── public/                    # Static assets and PHP backend
│   ├── php/                  # Backend API endpoints
│   ├── galleryPics/          # Image galleries
│   ├── events/               # Event images
│   └── manifest.json         # PWA configuration
├── src/
│   ├── components/           # Reusable UI components
│   ├── pages/               # Route components
│   ├── App.js               # Main application
│   └── index.js             # Application entry point
├── documentation.md          # Comprehensive technical docs
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary Blues**: #0066CC (bright), #003366 (dark)
- **Secondary**: #FF6600 (orange), #FFCC00 (yellow)
- **Neutrals**: Black, white, grays
- **Status Colors**: Success green, error red

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body**: Clean, readable fonts
- **Interactive**: Hover states and transitions

### Components
- Modern card-based layouts
- Responsive grid systems
- Interactive buttons and forms
- Smooth animations and transitions

## 🛠️ Core Components

### Navigation & Layout
- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Contact info and social links
- `ScrollToTop` - Smooth page transitions

### Educational Content
- `CoursesList` - Interactive course catalog
- `BenefitsSlider` - Feature highlights
- `WhyChooseUs` - Academy advantages
- `FAQs` - Common questions

### Interactive Features
- `Team` - Staff profiles and expertise
- `Newsletter` - Email subscription
- `WhatsAppButton` - Direct communication
- `CTA` - Call-to-action components

## 📄 Pages & Routes

### Main Pages
- **Home** (`/`) - Welcome and overview
- **About** (`/about`) - Academy information
- **Courses** (`/courses`) - Course catalog
- **Contact** (`/contact`) - Contact information
- **Gallery** (`/gallery`) - Photo galleries
- **Events** (`/events`) - Tournament info

### Specialized Services
- **Chess in Schools** - Educational programs
- **Chess in Workspaces** - Corporate training
- **Game Analysis** - Analysis tools
- **Pro Membership** - Premium features
- **Scholarships** - Financial assistance

### Community Features
- **Achievements & Testimonials** - Success stories
- **Referral Programme** - Community growth
- **Collaborate With Us** - Partnership opportunities

## 🗄️ Database Schema

### Core Tables
- **users** - User management and authentication
- **courses** - Course catalog and details
- **enrollments** - Student-course relationships
- **tournaments** - Tournament management
- **applications** - Application processing
- **newsletters** - Email subscriptions
- **gallery** - Image management

### Features
- Foreign key relationships
- Timestamp tracking
- Status management
- File path storage

## 🔌 API Endpoints

### PHP Backend (`/public/php/`)
- `contact.php` - Contact form processing
- `newsletter.php` - Newsletter subscriptions
- `application_form.php` - Course applications
- `gallery.php` - Gallery management
- `config.php` - Database configuration

### Form Processing
- Input validation and sanitization
- Email notifications
- Database storage
- Error handling

## 🚀 Deployment

### GitHub Actions
Automated deployment pipeline:
```yaml
# Builds and deploys to GitHub Pages
# Triggers on push to main branch
# Installs dependencies, builds, and publishes
```

### Environment Setup
- Production build optimization
- Asset minification
- SEO meta tags
- PWA service worker

### Configuration Files
- `.htaccess` - Server configuration
- `robots.txt` - SEO directives
- `manifest.json` - PWA settings

## 🔧 Development

### Getting Started
1. Clone repository
2. Install dependencies with `npm install`
3. Configure database connection in `public/php/config.php`
4. Start development server with `npm start`

### Code Standards
- React functional components with hooks
- Tailwind CSS for styling
- Modular component architecture
- Responsive design principles

### Testing
- Jest and React Testing Library
- Component unit tests
- Integration testing capabilities

## 📱 Features

### User Experience
- Mobile-first responsive design
- Fast loading with code splitting
- Intuitive navigation
- Interactive elements

### Educational Tools
- Course comparisons
- Progress tracking
- Resource libraries
- Assessment tools

### Community Engagement
- Tournament registration
- Gallery participation
- Newsletter updates
- Referral rewards

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For technical support or questions:
- **Email**: Contact through website form
- **Documentation**: See `documentation.md` for detailed technical information
- **Issues**: Submit GitHub issues for bugs or feature requests

## 📄 License

This project is proprietary software for AspireChess Academy.

---

**Built with ❤️ for chess education and community building**

*For detailed technical documentation, API specifications, and architecture details, please refer to `documentation.md`*