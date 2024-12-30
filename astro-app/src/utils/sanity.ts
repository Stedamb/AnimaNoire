import { sanityClient } from 'sanity:client';
import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset } from '@sanity/types';

import {
  allArtistsQuery,
  artistBySlugQuery,
  allArtworksQuery,
  artworkBySlugQuery,
  allTechniquesQuery,
  techniqueBySlugQuery,
  searchQuery,
} from '../lib/queries';

export interface Artist {
  _id: string;
  _type: 'artist';
  name: string;
  surname: string;
  slug: string;
  mainImage?: ImageAsset & { alt?: string };
  techniques?: Technique[];
  body?: PortableTextBlock[];
  artworks?: Artwork[];
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

export interface SearchResults {
  artists: Pick<Artist, '_id' | 'name' | 'surname' | 'slug' | 'mainImage'>[];
  artworks: (Pick<Artwork, '_id' | 'title' | 'slug' | 'image'> & { artist?: Pick<Artist, 'name' | 'surname'> })[];
  techniques: Pick<Technique, '_id' | 'name' | 'slug' | 'description'>[];
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

// Techniques queries
export async function getAllTechniques(): Promise<Technique[]> {
  return await sanityClient.fetch(allTechniquesQuery);
}

export async function getTechniqueBySlug(slug: string): Promise<Technique> {
  return await sanityClient.fetch(techniqueBySlugQuery, { slug });
}

// Search query
export async function search(searchTerm: string): Promise<SearchResults> {
  return await sanityClient.fetch(searchQuery, { searchTerm });
}
