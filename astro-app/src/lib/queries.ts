// Get all artists with their techniques
export const allArtistsQuery = `*[_type == "artist"] {
  _id,
  name,
  surname,
  ruolo,
  "slug": slug.current,
  mainImage {
    asset->,
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
    asset->,
    alt
  },
  galleryImages[] {
    _type,
    asset-> {
      _id,
      _type,
      url,
      metadata {
        dimensions
      }
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
      asset->,
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
    asset->,
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
    asset->,
    alt
  },
  "artist": artist-> {
    _id,
    name,
    surname,
    ruolo,
    "slug": slug.current,
    mainImage {
      asset->,
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

// Get all techniques with their artworks count
export const allTechniquesQuery = `*[_type == "technique"] {
  _id,
  name,
  "slug": slug.current,
  description,
  "artworksCount": count(*[_type == "artwork" && references(^._id)]),
  "artistsCount": count(*[_type == "artist" && references(^._id)])
}`

// Get a single technique by slug with related artworks and artists
export const techniqueBySlugQuery = `*[_type == "technique" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  description,
  "artworks": *[_type == "artwork" && references(^._id)] {
    _id,
    title,
    "slug": slug.current,
    image {
      asset->,
      alt
    },
    "artist": artist-> {
      name,
      surname,
      ruolo,
      "slug": slug.current
    }
  },
  "artists": *[_type == "artist" && references(^._id)] {
    _id,
    name,
    surname,
    ruolo,
    "slug": slug.current,
    mainImage {
      asset->,
      alt
    }
  }
}`

// Get all merch items
export const allMerchQuery = `*[_type == "merchandise"] {
  _id,
  name,
  description,
  price,
  image {
    asset->,
    alt
  },
  link,
  "slug": slug.current
}`

// Get all gallery images from all artists
export const allGalleryImagesQuery = `*[_type == "artist" && defined(galleryImages)] {
  _id,
  name,
  surname,
  "galleryImages": galleryImages[] {
    "asset": asset->,
    alt
  }
}`

// Search across all content types
export const searchQuery = `{
  "artists": *[_type == "artist" && (name match $searchTerm || surname match $searchTerm)] {
    _id,
    name,
    surname,
    ruolo,
    "slug": slug.current,
    mainImage {
      asset->,
      alt
    }
  },
  "artworks": *[_type == "artwork" && title match $searchTerm] {
    _id,
    title,
    "slug": slug.current,
    image {
      asset->,
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
