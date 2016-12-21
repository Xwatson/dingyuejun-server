/**
 * Created by xwatson on 2016/12/21.
 */
import mongoose from 'mongoose'
import usersSchema from '../schemas/users'
//关联数据库
export default mongoose.model('Users', usersSchema)
