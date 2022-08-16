import { NodemailerMailAdapter } from './emails/nodemailer/nodemailer-mail-adapter';
import express from 'express';
import { PrismaFeedbackRepository } from './repositories/prisma/pisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

//rota de feedback
routes.post('/feedbacks', async (req, res) => {
    //desestruturando a requisição e coletando o body
    const { type, comment, screenshot } = req.body;

    try {
        const prismaFeedbacksRepository = new PrismaFeedbackRepository();

        const nodemailerMailAdapter = new NodemailerMailAdapter();

        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbacksRepository,
            nodemailerMailAdapter
        );

        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot,
        });

        return res.status(201).send();
    } catch (erro) {
        return res.status(500).send();
    }
});
