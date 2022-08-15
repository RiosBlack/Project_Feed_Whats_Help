import { MailAdapter, SendMailData } from './../mail';
import nodemailer from 'nodemailer';

//usando o MailTrap para testar o envios de e-mail do nodemailer
const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'cd0060bd1a6741',
        pass: 'e1052fcfbff4fd',
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData ) {
        
        //mandando e-mail
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedback.com>',
            to: 'Douglas Rios <douglaspmv@hotmail.com>',
            subject: subject,
            html: body,
        });
    }
}
