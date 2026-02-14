# Academic Website - Dheemanth R Joshi

A modern, dark-themed personal academic website built with Python and Jinja2 templates, deployed on GitHub Pages.

## 🎨 Features

- **Modern Dark Theme**: Elegant minimalist design with smooth animations
- **6 Pages**: Home, Academics, Experience, Research, Professional Activities, Personal Activities
- **Interactive Components**: Tabs, image galleries with lightbox, mobile navigation
- **Easy Content Management**: Edit simple YAML files to update content
- **Responsive Design**: Works beautifully on all devices
- **Static Site**: Fast loading, no server required

## 📁 Project Structure

```
dheerj188.github.io/
├── src/                    # Source files
│   ├── templates/          # HTML templates
│   ├── data/              # YAML content files
│   ├── static/            # CSS, JS, images
│   └── build.py           # Build script
├── docs/                  # Generated output (deployed)
├── requirements.txt       # Python dependencies
├── deploy.sh             # Deployment script
└── README.md             # This file
```

## 🚀 Quick Start

### 1. Setup

Install Python dependencies:
```bash
pip3 install -r requirements.txt
```

### 2. Build the Site

Generate static HTML files:
```bash
python3 src/build.py
```

This creates all HTML pages in the `docs/` directory.

### 3. Preview Locally

Open `docs/index.html` in your browser to preview the site.

## 📝 Updating Content

All content is managed through YAML files in `src/data/`. Edit these files to update your website:

### Profile Information ([src/data/profile.yaml](src/data/profile.yaml))
- Name, title, tagline
- Profile photo
- Social links
- About section

### Academics ([src/data/academics.yaml](src/data/academics.yaml))
- Education (degrees, GPA, courses)
- Mentors
- Awards and honors

### Experience ([src/data/experience.yaml](src/data/experience.yaml))
- Work positions
- Teaching experience
- Technical skills

### Research ([src/data/research.yaml](src/data/research.yaml))
- Research overview
- Publications
- Projects
- Research skills

### Professional Activities ([src/data/professional.yaml](src/data/professional.yaml))
- Conferences, workshops, presentations
- Images and descriptions

### Personal Activities ([src/data/personal.yaml](src/data/personal.yaml))
- Hobbies, interests, travel
- Images and descriptions

## 🖼️ Adding Images

1. **Profile Photo**: Add to `src/static/images/profile.jpg`
2. **Professional Activities**: Add to `src/static/images/professional/`
3. **Personal Activities**: Add to `src/static/images/personal/`

Update the corresponding YAML file with the image path.

## 🔨 Build & Deploy

### Build Only
```bash
python3 src/build.py
```

### Build + Deploy to GitHub Pages
```bash
./deploy.sh
```

This will:
1. Build the site
2. Commit changes
3. Push to GitHub
4. Site goes live at https://dheerj188.github.io/

## ⚙️ GitHub Pages Configuration

1. Go to repository **Settings** → **Pages**
2. Set source: **Deploy from a branch**
3. Select branch: **main**
4. Select folder: **/docs**
5. Save

Your site will be live at: **https://dheerj188.github.io/**

## 📋 Common Tasks

### Add a Course
Edit `src/data/academics.yaml`:
```yaml
education:
  - degree: "MS Computer Engineering"
    courses:
      - "New Course Name"
```

### Add a Publication
Edit `src/data/research.yaml`:
```yaml
publications:
  - title: "Paper Title"
    authors: "Authors"
    venue: "Conference/Journal"
    year: 2026
    doi: "10.xxxx/xxxxx"
```

### Add a Gallery Image
1. Place image in `src/static/images/professional/` or `personal/`
2. Edit corresponding YAML:
```yaml
activities:
  - title: "Event Name"
    description: "Description"
    date: "2026-01"
    image: "images/professional/event.jpg"
```

### Update Social Links
Edit `src/data/profile.yaml`:
```yaml
social_links:
  - name: "LinkedIn"
    url: "https://linkedin.com/in/..."
```

## 🎨 Customizing

### Colors
Edit `src/static/css/theme.css` to change the color scheme.

### Layout
Edit templates in `src/templates/` to modify page structure.

### Styling
Edit CSS files in `src/static/css/` to adjust styles.

## 📱 Pages Overview

1. **Homepage** (`index.html`)
   - Profile photo and intro
   - Social links
   - Quick stats

2. **Academics** (`academics.html`)
   - Education timeline with courses
   - Mentors (separate tab)
   - Awards & honors (separate tab)

3. **Experience** (`experience.html`)
   - Work history timeline
   - Technical skills by category

4. **Research** (`research.html`)
   - Research overview
   - Publications by year (tab)
   - Projects (tab)
   - Research skills

5. **Professional** (`professional.html`)
   - Image gallery of professional activities
   - Conferences, presentations, workshops

6. **Personal** (`personal.html`)
   - Image gallery of personal activities
   - Hobbies, interests, travel

## 🐛 Troubleshooting

**Build fails?**
- Check YAML syntax (indentation matters!)
- Ensure all required Python packages are installed
- Check error messages for details

**Images not showing?**
- Verify image paths in YAML files
- Ensure images exist in `src/static/images/`
- Rebuild the site after adding images

**Site not updating on GitHub Pages?**
- Wait 1-2 minutes for GitHub to rebuild
- Check repository Settings → Pages for deployment status
- Clear browser cache

## 📚 Technologies Used

- **Python 3.8+** - Static site generator
- **Jinja2** - HTML templating
- **PyYAML** - YAML data parsing
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - Tabs, gallery, navigation
- **GitHub Pages** - Free hosting

## 📞 Need Help?

- Check the [plan file](.claude/plans/polymorphic-stargazing-treasure.md) for detailed architecture
- Review YAML file examples in `src/data/`
- Test changes locally before deploying

## ✨ Tips

- **Update regularly**: Add new publications and activities as they happen
- **Use good images**: High-quality photos look better in galleries
- **Keep it simple**: Don't overcomplicate your content
- **Test locally**: Always preview changes before deploying
- **Backup**: Your content is safe in git - commit often!

---

**Website URL**: https://dheerj188.github.io/

Built with ❤️ using Python + Jinja2
