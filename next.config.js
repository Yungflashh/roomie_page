/** @type {import('next').NextConfig} */
// Not a static export any more: the shared profile and listing pages (/u/:id, /l/:id)
// are built when they're opened, so link previews show the right name and photo.
const nextConfig = {
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
