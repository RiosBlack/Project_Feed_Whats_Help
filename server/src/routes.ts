import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';
import { PrismaFeedbackRepository } from './repositories/prisma/pisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

//usando o MailTrap para testar o envios de e-mail do nodemailer
const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'cd0060bd1a6741',
        pass: 'e1052fcfbff4fd',
    },
});

//rota de feedback
routes.post('/feedbacks', async (req, res) => {
    //desestruturando a requisição e coletando o body
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbackRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository
    );

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });

    /* //mandando e-mail
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedback.com>',
        to: 'Douglas Rios <douglaspmv@hotmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style='font-family: sans-serif; font-size: 16px; color: #111;'>`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `<div>`,
        ].join('\n'),
    });
 */
    return res.status(201).send();
});
