/**
 * Created by xwatson on 2016/12/23.
 */
import Router from 'koa-router'
const router = new Router()

import verify from '../controller/verify'
import index from '../controller/index'

router.get('/', index)

router.get('/api', verify)

export default router
