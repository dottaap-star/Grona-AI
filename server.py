#!/usr/bin/env python3
"""
Simple HTTP server for local development
Handles redirects matching netlify.toml configuration
"""
import http.server
import socketserver
import os
from urllib.parse import urlparse

PORT = int(os.environ.get('PORT', 3000))

# Route mappings (matching netlify.toml)
ROUTES = {
    '/': 'home.html',
    '/index.html': '/',  # redirect
    '/how-it-works': 'how-it-works/how-it-works.html',
    '/how-it-works/': 'how-it-works/how-it-works.html',
    '/features': 'features/features.html',
    '/features/': 'features/features.html',
    '/pricing': 'pricing/pricing.html',
    '/pricing/': 'pricing/pricing.html',
    '/beta-access': 'beta-access/beta-access.html',
    '/beta-access/': 'beta-access/beta-access.html',
    '/demo-call': 'demo-call/demo-call.html',
    '/demo-call/': 'demo-call/demo-call.html',
    '/blog': 'blog/blog.html',
    '/blog/': 'blog/blog.html',
    '/blog-agentic-cro': 'blog-agentic-cro/agentic-cro.html',
    '/blog-agentic-cro/': 'blog-agentic-cro/agentic-cro.html',
    '/blog-google-ads-for-cro': 'blog-google-ads-for-cro/google-ads-cro.html',
    '/blog-google-ads-for-cro/': 'blog-google-ads-for-cro/google-ads-cro.html',
    '/privacy-policy': 'privacy-policy/privacy-policy.html',
    '/privacy-policy/': 'privacy-policy/privacy-policy.html',
    '/terms-conditions': 'terms-conditions/terms-conditions.html',
    '/terms-conditions/': 'terms-conditions/terms-conditions.html',
}

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # Handle redirects
        if path == '/index.html':
            self.send_response(301)
            self.send_header('Location', '/')
            self.end_headers()
            return
        
        # Handle route mappings
        if path in ROUTES:
            file_path = ROUTES[path]
            if file_path.startswith('/'):
                # It's a redirect
                self.send_response(301)
                self.send_header('Location', file_path)
                self.end_headers()
                return
            else:
                # Serve the file
                self.path = '/' + file_path
        
        # Serve the file
        return super().do_GET()
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"🚀 Server running at http://localhost:{PORT}")
        print(f"📄 Home page: http://localhost:{PORT}/")
        print(f"Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")

