import { 
  REST_DELETE, 
  REST_GET, 
  REST_PATCH, 
  REST_POST 
} from '@payloadcms/next/routes'
import config from '@payload-config'

type RouteContext = {
  params: Promise<{
    slug: string[]
  }>
}

export const GET = async (
  request: Request,
  context: RouteContext
): Promise<Response> => {
  const handler = REST_GET(config)
  return handler(request, context)
}

export const POST = async (
  request: Request,
  context: RouteContext
): Promise<Response> => {
  const handler = REST_POST(config)
  return handler(request, context)
}

export const PATCH = async (
  request: Request,
  context: RouteContext
): Promise<Response> => {
  const handler = REST_PATCH(config)
  return handler(request, context)
}

export const DELETE = async (
  request: Request,
  context: RouteContext
): Promise<Response> => {
  const handler = REST_DELETE(config)
  return handler(request, context)
}
