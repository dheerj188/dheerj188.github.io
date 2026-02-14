#!/usr/bin/env python3
"""
Static Site Generator for Academic Website
Generates static HTML from Jinja2 templates and YAML data
"""

import os
import shutil
import yaml
from jinja2 import Environment, FileSystemLoader
from datetime import datetime
from pathlib import Path


class SiteBuilder:
    def __init__(self):
        self.root_dir = Path(__file__).parent.parent
        self.src_dir = self.root_dir / 'src'
        self.output_dir = self.root_dir / 'docs'
        self.template_dir = self.src_dir / 'templates'
        self.data_dir = self.src_dir / 'data'
        self.static_dir = self.src_dir / 'static'

        # Setup Jinja2
        self.env = Environment(
            loader=FileSystemLoader(str(self.template_dir)),
            trim_blocks=True,
            lstrip_blocks=True
        )

        # Add custom filters
        self.env.filters['year_from_date'] = self.year_from_date

    def load_yaml(self, filename):
        """Load YAML data file"""
        filepath = self.data_dir / filename
        if not filepath.exists():
            print(f"Warning: {filename} not found, using empty data")
            return {}

        with open(filepath, 'r') as f:
            return yaml.safe_load(f) or {}

    def year_from_date(self, date_string):
        """Extract year from date string"""
        if not date_string:
            return ""
        try:
            # Handle different date formats
            if '-' in str(date_string):
                return str(date_string).split('-')[0]
            return str(date_string)
        except:
            return str(date_string)

    def clean_output(self):
        """Remove old output directory"""
        if self.output_dir.exists():
            # Remove everything except .git directory
            for item in self.output_dir.iterdir():
                if item.name != '.git':
                    if item.is_file():
                        item.unlink()
                    elif item.is_dir():
                        shutil.rmtree(item)
        else:
            self.output_dir.mkdir(parents=True)

    def copy_static_files(self):
        """Copy CSS, JS, images to output"""
        if not self.static_dir.exists():
            print("Warning: static directory not found")
            return

        for subdir in ['css', 'js', 'images']:
            src = self.static_dir / subdir
            dst = self.output_dir / subdir

            if src.exists():
                if dst.exists():
                    shutil.rmtree(dst)
                shutil.copytree(src, dst)
                print(f"Copied {subdir}/ to output")

    def build_page(self, template_name, output_name, **context):
        """Render a template and save to output"""
        try:
            template = self.env.get_template(template_name)
        except Exception as e:
            print(f"Error loading template {template_name}: {e}")
            return

        # Add global context
        context['current_page'] = output_name.replace('.html', '')
        context['build_date'] = datetime.now().strftime('%B %d, %Y')

        try:
            html = template.render(**context)
        except Exception as e:
            print(f"Error rendering template {template_name}: {e}")
            return

        output_path = self.output_dir / output_name
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html)

        print(f"✓ Built: {output_name}")

    def build_all(self):
        """Build entire site"""
        print("=" * 50)
        print("Starting website build...")
        print("=" * 50)

        # Clean and prepare
        print("\n[1/4] Cleaning output directory...")
        self.clean_output()

        print("\n[2/4] Copying static files...")
        self.copy_static_files()

        print("\n[3/4] Loading data files...")
        # Load all data
        profile = self.load_yaml('profile.yaml')
        academics = self.load_yaml('academics.yaml')
        experience = self.load_yaml('experience.yaml')
        research = self.load_yaml('research.yaml')
        professional = self.load_yaml('professional.yaml')
        personal = self.load_yaml('personal.yaml')

        print("\n[4/4] Building pages...")
        # Build pages
        self.build_page('index.html', 'index.html',
                       profile=profile, research=research)

        self.build_page('academics.html', 'academics.html',
                       profile=profile, academics=academics)

        self.build_page('experience.html', 'experience.html',
                       profile=profile, experience=experience)

        self.build_page('research.html', 'research.html',
                       profile=profile, research=research)

        self.build_page('professional.html', 'professional.html',
                       profile=profile, activities=professional)

        self.build_page('personal.html', 'personal.html',
                       profile=profile, activities=personal)

        print("\n" + "=" * 50)
        print("✓ Build complete!")
        print("=" * 50)
        print(f"\nOutput directory: {self.output_dir}")
        print(f"Open: {self.output_dir / 'index.html'}\n")


if __name__ == '__main__':
    builder = SiteBuilder()
    builder.build_all()
