# Cups & Cultures

A luxury tea experience website blending global rituals, art, music, and the slow art of tea.

## 🌐 Live Site
**GitHub Pages**: [https://yourusername.github.io/cupsandcultures](https://yourusername.github.io/cupsandcultures)

## 🚀 Deployment Instructions

### 1. Create GitHub Repository
```bash
# On GitHub: Create new repository named "cupsandcultures"
# Make sure it's PUBLIC for GitHub Pages
```

### 2. Push to GitHub
```bash
git add .
git commit -m "Initial commit: Cups & Cultures website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cupsandcultures.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → **/(root)**
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/cupsandcultures`

### 4. Automatic Deployments
The `.github/workflows/deploy.yml` file enables automatic deployments:
- Every push to `main` triggers a build and deploy
- Changes go live within 2-3 minutes

## 🤖 Gemini AI Integration

### Setup
1. Get Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create environment variable:
   ```bash
   export GEMINI_API_KEY="your-api-key-here"
   ```

### Install Gemini Package
```bash
npm install @google/generative-ai
```

### Content Generation Tools

#### Tea Reviews
```bash
node scripts/gemini-content-generator.js teaReview "Dragon Well" "China"
```

#### Event Planning
```bash
node scripts/gemini-content-generator.js eventBreakdown "Spring Tea Ceremony" "Cherry Blossom Theme" "25"
```

#### Instagram Content
```bash
node scripts/gemini-content-generator.js instagramContent "Mindful Morning Tea Rituals"
```

### Available Templates
- `teaReview` - Generate sophisticated tea reviews
- `eventBreakdown` - Create detailed event work breakdown structures
- `instagramContent` - Generate social media content

## 🛠 Development

### Local Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📁 Project Structure
```
cupsandcultures/
├── src/
│   ├── components/          # React components
│   ├── data/               # JSON data files
│   ├── hooks/              # Custom React hooks
│   └── main.jsx            # App entry point
├── public/
│   └── assets/             # Images and static files
├── scripts/
│   └── gemini-content-generator.js  # AI content generation
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment
└── README.md
```

## 🎨 Design System
- **Colors**: Desert Spice palette (Terracotta, Ochre, Espresso, Cream, Teal)
- **Typography**: Montserrat (sans-serif) + Cormorant Garamond (serif)
- **Animations**: Slow-timed transitions (500-800ms)
- **Patterns**: Geometric ikat borders

## 📱 Features
- Responsive design for all devices
- Smooth scroll animations
- Interactive tea tasting menu
- Event RSVP system
- Instagram feed integration
- Community experience section

## 🌿 Tea Menu Data
Tea information is stored in `src/data/TastingMenu.json` with:
- Regional categorization
- Flavor profiles
- Cultural pairings
- Brewing instructions

---

**Built with**: React + Vite + Tailwind CSS  
**Hosted on**: GitHub Pages (free)  
**AI Powered**: Google Gemini for content generation  
**Deployed**: ✅ LIVE
