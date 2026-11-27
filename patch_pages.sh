#!/usr/bin/env bash
set -euo pipefail

# Patch static export for GitHub Project Pages under /wordpresskt
SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SITE_DIR"

# 1) Ensure Jekyll is disabled so wp-includes etc. are served
if [ ! -f .nojekyll ]; then
  printf "# Disable Jekyll for Pages\n" > .nojekyll
fi

# 2) Rewrite hard-coded GitHub repo URLs to GitHub Pages domain
#    https://github.com/kenny000666/wordpresskt -> https://kenny000666.github.io/wordpresskt
find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' -o -name '*.xml' -o -name '*.json' \) -print0 | \
  xargs -0 sed -i '' \
    -e 's#https://github.com/kenny000666/wordpresskt#https://kenny000666.github.io/wordpresskt#g'

# 3) Normalize Pages URLs to project-relative paths
#    First normalize any existing project-rooted URLs
find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' \) -print0 | \
  xargs -0 sed -i '' \
    -e 's#href="https://kenny000666.github.io/wordpresskt/#href="/wordpresskt/#g' \
    -e 's#src="https://kenny000666.github.io/wordpresskt/#src="/wordpresskt/#g' \
    -e "s#url('https://kenny000666.github.io/wordpresskt/#url('/wordpresskt/#g" \
    -e 's#url("https://kenny000666.github.io/wordpresskt/#url("/wordpresskt/#g'

# 4) Rewrite any remaining absolute links pointing to the user root to project path
find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' \) -print0 | \
  xargs -0 sed -i '' \
    -e 's#href="https://kenny000666.github.io/#href="/wordpresskt/#g' \
    -e 's#src="https://kenny000666.github.io/#src="/wordpresskt/#g' \
    -e "s#url('https://kenny000666.github.io/#url('/wordpresskt/#g" \
    -e 's#url("https://kenny000666.github.io/#url("/wordpresskt/#g'

# 5) Fix any links/assets pointing directly at the VM IP
find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' \) -print0 | \
  xargs -0 sed -i '' \
    -e 's#http://152.67.158.125#/wordpresskt#g'

# 6) De-duplicate accidental double slashes after /wordpresskt
find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' \) -print0 | \
  xargs -0 sed -i '' -e 's#/wordpresskt//#/wordpresskt/#g'

# 7) Inject CSP upgrade-insecure-requests meta tag into all HTML pages.
#    This forces the browser to upgrade any http:// asset request to https://,
#    preventing Mixed Content blocking that breaks Elementor frontend chunks
#    (and therefore image widgets) on project pages.
find . -type f -name '*.html' -print0 | while IFS= read -r -d '' f; do
  if ! grep -q 'upgrade-insecure-requests' "$f"; then
    sed -i '' -e 's#<head>#<head>\n    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">#' "$f"
  fi
done

# 8) Rewrite any remaining http:// asset URLs to https:// (defense in depth).
#    Covers Elementor chunks, fonts, and any other assets still hardcoded as HTTP.
find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' \) -print0 | \
  xargs -0 sed -i '' \
    -e 's#http://kenny000666\.github\.io/wordpresskt#https://kenny000666.github.io/wordpresskt#g' \
    -e 's#http://kayleightse\.com#https://kayleightse.com#g' \
    -e "s#http://152\.67\.158\.125#https://kayleightse.com#g"

# 9) De-duplicate accidental double slashes in path portions (preserve ://)
find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' \) -print0 | \
  xargs -0 sed -i '' -E -e 's#([^:])//#\1/#g'

echo "Patch complete. Review changes, then git add/commit/push to update GitHub Pages."
