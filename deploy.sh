#!/bin/bash

# deploy.sh - Build and deploy to GitHub Pages

echo "=========================================="
echo "Building website..."
echo "=========================================="

python3 src/build.py

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "Build successful!"
    echo "=========================================="
    echo ""
    echo "Committing changes..."

    git add docs/
    git add src/data/  # Include data changes
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

    echo ""
    echo "Pushing to GitHub..."
    git push origin main

    if [ $? -eq 0 ]; then
        echo ""
        echo "=========================================="
        echo "Deployment complete!"
        echo "=========================================="
        echo ""
        echo "Site will be live at:"
        echo "https://dheerj188.github.io/"
        echo ""
    else
        echo ""
        echo "Error: Failed to push to GitHub"
        exit 1
    fi
else
    echo ""
    echo "=========================================="
    echo "Build failed!"
    echo "=========================================="
    exit 1
fi
