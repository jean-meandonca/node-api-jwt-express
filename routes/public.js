import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'


const router = express.Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET


router.post('/cadastro', async (req, res) => {

    try{
        const user = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword,
            },
        })
        res.status(201).json(userDB)
    } catch (err) {
        res.status(500).json({messsage: "Erro no servidor, tente novamente"})
    }
})


router.post('/login', async (req, res) => {
    try{
        const userInfo = req.body
        //Busca o usuário no db
        const user = await prisma.user.findUnique({
            where: {email: userInfo.email}
        })
        //Verifica se o email do usuário que foi passado está correto
        if(!user){
            return res.status(404).json({message: 'Usuário não encontrado.'})
        }
        //compara a senha salva com a digitada 
        const isMatch = await bcrypt.compare(userInfo.password , user.password)

        if(!isMatch){
            return res.status(400).json({message: 'Senha inválida.'})
        }
    
        const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: '1d'})

        res.status(200).json(token)
    } catch (err) {
        res.status(500).json({message: 'Erro no Servidor, tente novamente'})
    }
})

export default router