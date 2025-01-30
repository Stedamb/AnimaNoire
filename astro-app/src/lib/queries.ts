// Get all artists with their techniques
export const allArtistsQuery = `*[_type == "artist"] | order(
  select(
    name == "Jakub" => 0,
    name == "Suela" => 1,
    name == "Asia" => 2,
    3
  )
) {
  _id,
  name,
  surname,
  ruolo,
  "slug": slug.current,
  mainImage {
    "asset": asset->{
      ...,
      "url": asset->url + "?w=600&q=80"
    },
    alt
  },
  "techniques": techniques[]-> {
    _id,
    name,
    "slug": slug.current
  },
  body
}`

// Get a single artist by slug with all details
export const artistBySlugQuery = `*[_type == "artist" && slug.current == $slug][0] {
  _id,
  name,
  surname,
  ruolo,
  instagram,
  "slug": slug.current,
  mainImage {
    "asset": asset->{
      ...,
      "url": asset->url + "?w=600&q=80"
    },
    alt
  },
  galleryImages[] {
    _type,
    "asset": asset->{
      ...,
      "url": asset->url + "?w=800&q=80"
    },
    alt
  },
  "techniques": techniques[]-> {
    _id,
    name,
    "slug": slug.current,
    description
  },
  body,
  "artworks": *[_type == "artwork" && references(^._id)] {
    _id,
    title,
    "slug": slug.current,
    image {
      "asset": asset->{
        ...,
        "url": asset->url + "?w=800&q=80"
      },
      alt
    },
    description
  }
}`

// Get all artworks with their artist and technique
export const allArtworksQuery = `*[_type == "artwork"] {
  _id,
  title,
  "slug": slug.current,
  image {
    "asset": asset->{
      ...,
      "url": asset->url + "?w=800&q=80"
    },
    alt
  },
  "artist": artist-> {
    _id,
    name,
    surname,
    ruolo,
    "slug": slug.current
  },
  "technique": technique-> {
    _id,
    name,
    "slug": slug.current
  },
  description
}`

// Get a single artwork by slug
export const artworkBySlugQuery = `*[_type == "artwork" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  image {
    "asset": asset->{
      ...,
      "url": asset->url + "?w=800&q=80"
    },
    alt
  },
  "artist": artist-> {
    _id,
    name,
    surname,
    ruolo,
    "slug": slug.current,
    mainImage {
      "asset": asset->{
        ...,
        "url": asset->url + "?w=600&q=80"
      },
      alt
    }
  },
  "technique": technique-> {
    _id,
    name,
    "slug": slug.current,
    description
  },
  description
}`

// Get all merch items
export const allMerchQuery = `*[_type == "merchandise"] {
  _id,
  name,
  description,
  price,
  image {
    "asset": asset->{
      ...,
      "url": asset->url + "?w=800&q=80"
    },
    alt
  },
  link,
  "slug": slug.current
}`

// Get all gallery images from all artists (for gallery page)
export const allGalleryImagesQuery = `*[_type == "artist" && defined(galleryImages)] {
  _id,
  name,
  surname,
  "galleryImages": galleryImages[] {
    _key,
    asset->,
    alt
  }
}`;

// Get limited gallery images for homepage slider
export const limitedGalleryImagesQuery = `*[_type == "artist" && defined(galleryImages)] {
  _id,
  name,
  surname,
  "galleryImages": galleryImages[0..1] {
    _key,
    asset->,
    alt
  }
}`;

// Search across all content types
export const searchQuery = `{
  "artists": *[_type == "artist" && (name match $searchTerm || surname match $searchTerm)] {
    _id,
    name,
    surname,
    ruolo,
    "slug": slug.current,
    mainImage {
      "asset": asset->{
        ...,
        "url": asset->url + "?w=600&q=80"
      },
      alt
    }
  },
  "artworks": *[_type == "artwork" && title match $searchTerm] {
    _id,
    title,
    "slug": slug.current,
    image {
      "asset": asset->{
        ...,
        "url": asset->url + "?w=800&q=80"
      },
      alt
    },
    "artist": artist-> {
      name,
      surname
    }
  },
  "techniques": *[_type == "technique" && name match $searchTerm] {
    _id,
    name,
    "slug": slug.current,
    description
  }
}`
