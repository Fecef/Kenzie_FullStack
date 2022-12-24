import express from 'express'
import 'express-async-errors'
import { listAllUsersCommunitiesController } from './controllers/communities.controllers'
import { listAllCommunitiesUsersControllers } from './controllers/users.controllers'
import handleError from './errors/handleError'

const app = express()

app.use(express.json())

app.get('/communities/:id/users', listAllUsersCommunitiesController) //lista todos os usuários de determinada comunidade
app.get('/users/:id/communities', listAllCommunitiesUsersControllers) //lista todas as comunidades de determinado usuário

app.use(handleError)

export default app