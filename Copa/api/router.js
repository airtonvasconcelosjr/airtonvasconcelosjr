import Router from '@koa/router'
import * as users from './app/users/index.js'
import * as hunches from './app/hunches/index.js'
import * as games from './app/games/index.js'

export const router = new Router();

router.post('/users', users.create)
router.get('/login', users.login)

router.post('/hunches', hunches.create)

router.get('/games', games.list)

router.get('/:username', hunches.list)