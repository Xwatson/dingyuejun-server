/**
 * Created by xwatson on 2016/12/23.
 */
import route from './path'

export default (app) => {
    app
        .use(route.routes())
        .use(route.allowedMethods({
            throw: true
        }))
}