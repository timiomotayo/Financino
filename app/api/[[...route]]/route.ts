import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

export const runtime = "nodejs";

import plaid from './plaid'
import summary from './summary'
import accounts from './accounts'
import categories from './categories'
import transactions from './transactions'
import subscriptions from "./subscriptions";

const routes = app
  .route('/plaid', plaid)
  .route('/summary', summary)
  .route('/accounts', accounts)
  .route('/categories', categories)
  .route('/transactions', transactions)
  .route("/subscriptions", subscriptions)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes;