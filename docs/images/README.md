# Images Directory

## Instructions

Add your images to the appropriate subdirectories:

### Profile Photo
- Add your profile photo as: `profile.jpg` (or .png)
- Recommended size: 500x500 pixels or larger (square)
- Update the path in `src/data/profile.yaml`

### Professional Activities
- Add images to: `professional/`
- Name them descriptively (e.g., `conference-2024.jpg`)
- Reference them in `src/data/professional.yaml`

### Personal Activities
- Add images to: `personal/`
- Name them descriptively (e.g., `hiking-2024.jpg`)
- Reference them in `src/data/personal.yaml`

## Image Guidelines

- **Format**: JPG or PNG
- **Size**: Optimize images before adding (< 500KB recommended)
- **Resolution**: At least 800px width for good quality
- **Aspect Ratio**: 4:3 or 16:9 works best for galleries

## After Adding Images

Remember to rebuild the site:
```bash
python3 src/build.py
```

Or deploy directly:
```bash
./deploy.sh
```
