import Koa from 'koa'
const app = new Koa()
import Router from 'koa-router'
const router = Router()
import views from 'koa-views'
import convert from 'koa-convert'
import json from 'koa-json'
import onerror from 'koa-onerror'
import Bodyparser from 'koa-bodyparser'
const bodyparser = Bodyparser()
import logger from 'koa-logger'
import mongoose from 'mongoose'

import index from './routes/index'
import users from './routes/users'
import { mongodb } from './config'

mongoose.connect(mongodb)
mongoose.connection.on('error', console.error)

// middlewares
app.use(convert(bodyparser))
app.use(convert(json()))
app.use(convert(logger()))
app.use(convert(require('koa-static')(__dirname + '/public')))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

router.use('/', index.routes(), index.allowedMethods())
router.use('/users', users.routes(), users.allowedMethods())

app.use(router.routes(), router.allowedMethods())
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx)
})


module.exports = app
