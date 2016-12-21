/**
 * Created by xwatson on 2016/12/21.
 */
import mongoose from 'mongoose'
import usersSchema from '../schemas/users'
//关联数据库
module.exports = mongoose.model('Users', usersSchema)
