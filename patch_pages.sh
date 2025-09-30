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

echo "Patch complete. Review changes, then git add/commit/push to update GitHub Pages."
