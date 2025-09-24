import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

export const runtime = "edge";

import accounts from './accounts'
import categories from './categories'

const routes = app
  .route('/accounts', accounts)
  .route('/categories', categories)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes;