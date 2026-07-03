import type { Metadata } from 'next'
import config from '@payload-config'
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
// @ts-ignore
import { importMap } from '../importMap'

type Args = {
  params: Promise<{ segments?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params: params as any, searchParams: searchParams as any })

const NotFound = async ({ params, searchParams }: Args) =>
  NotFoundPage({ config, params: params as any, searchParams: searchParams as any, importMap })

export default NotFound
