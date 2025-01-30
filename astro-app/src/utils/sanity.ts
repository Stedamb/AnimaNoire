import { sanityClient } from 'sanity:client';
import { urlFor } from '@/utils/image';
import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset } from '@sanity/types';

import {
  allArtistsQuery,
  artistBySlugQuery,
  allArtworksQuery,
  artworkBySlugQuery,
  searchQuery,
  allMerchQuery,
  allGalleryImagesQuery,
  limitedGalleryImagesQuery,
} from '../lib/queries';

export interface Artist {
  _id: string;
  _type: 'artist';
  name: string;
  surname: string;
  ruolo?: string;
  slug: string;
  mainImage?: ImageAsset & { alt?: string };
  techniques?: Technique[];
  body?: PortableTextBlock[];
  artworks?: Artwork[];
  instagram?: string;
  galleryImages?: {
    _type: string;
    asset: {
      _id: string;
      _type: string;
      url: string;
    };
    alt?: string;
  }[];
}

export interface Artwork {
  _id: string;
  _type: 'artwork';
  title: string;
  slug: string;
  image: ImageAsset & { alt?: string };
  artist?: Pick<Artist, '_id' | 'name' | 'surname' | 'slug' | 'mainImage'>;
  technique?: Pick<Technique, '_id' | 'name' | 'slug' | 'description'>;
  description?: PortableTextBlock[];
}

export interface Technique {
  _id: string;
  _type: 'technique';
  name: string;
  slug: string;
  description?: string;
  artworksCount?: number;
  artistsCount?: number;
  artworks?: Artwork[];
  artists?: Pick<Artist, '_id' | 'name' | 'surname' | 'slug' | 'mainImage'>[];
}

export interface Merch {
  _id: string;
  _type: 'merchandise';
  name: string;
  slug: string;
  description?: string;
  price: number;
  link: string;
  image: ImageAsset & { alt?: string };
}

export interface SearchResults {
  artists: Pick<Artist, '_id' | 'name' | 'surname' | 'slug' | 'mainImage'>[];
  artworks: (Pick<Artwork, '_id' | 'title' | 'slug' | 'image'> & { artist?: Pick<Artist, 'name' | 'surname'> })[];
  techniques: Pick<Technique, '_id' | 'name' | 'slug' | 'description'>[];
}

export interface GalleryImage {
  artist: any;
  _key: string;
  asset: {
    _id: string;
    _type: string;
    url?: string;
  };
  alt?: string;
}

export interface ArtistWithGallery {
  _id: string;
  name: string;
  surname: string;
  galleryImages: GalleryImage[];
}

// Artists queries
export async function getAllArtists(): Promise<Artist[]> {
  return await sanityClient.fetch(allArtistsQuery);
}

export async function getArtistBySlug(slug: string): Promise<Artist> {
  return await sanityClient.fetch(artistBySlugQuery, { slug });
}

// Artworks queries
export async function getAllArtworks(): Promise<Artwork[]> {
  return await sanityClient.fetch(allArtworksQuery);
}

export async function getArtworkBySlug(slug: string): Promise<Artwork> {
  return await sanityClient.fetch(artworkBySlugQuery, { slug });
}

// Merch queries
export async function getAllMerch(): Promise<Merch[]> {
  try {
    const result = await sanityClient.fetch(allMerchQuery);

    if (!result || result.length === 0) {
      console.log('No merch items found in Sanity');
      return [];
    }
    return result;
  } catch (error) {
    console.error('Error fetching merch:', error);
    return [];
  }
}

// Gallery images query
export async function getAllGalleryImages(): Promise<ArtistWithGallery[]> {
  try {
    const artists = await sanityClient.fetch<ArtistWithGallery[]>(allGalleryImagesQuery);
    return artists || [];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

export async function getLimitedGalleryImages(): Promise<ArtistWithGallery[]> {
  try {
    const artists = await sanityClient.fetch<ArtistWithGallery[]>(limitedGalleryImagesQuery);
    return artists || [];
  } catch (error) {
    console.error('Error fetching limited gallery images:', error);
    return [];
  }
}

// Search query
export async function search(searchTerm: string): Promise<SearchResults> {
  return await sanityClient.fetch(searchQuery, { searchTerm });
}
