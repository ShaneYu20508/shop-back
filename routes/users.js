import { Router } from 'express'
import { create, login, logout, extend, getProfile, editCart, getCart } from '../controllers/users.js'
import * as auth from '../middlewares/auth.js'

const router = Router()

router.post('/', create)
// 登入
router.post('/login', auth.login, login)
// 登出
router.delete('/logout', auth.jwt, logout)
// 舊換新
router.patch('/extend', auth.jwt, extend)
// 取'自己的'資料
router.get('/me', auth.jwt, getProfile)
// 編輯購物車
router.patch('/cart', auth.jwt, editCart)
// 取購物車資料
router.get('/cart', auth.jwt, getCart)

export default router
