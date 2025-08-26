import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

export const runtime = "edge";

import accounts from './accounts'

const routes = app
  .route('/accounts', accounts);

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes;