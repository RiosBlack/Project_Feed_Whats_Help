import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('should be able to submit feedback', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'example comment',
                screenshot: 'data:image/png;base64',
            })
        ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should be able to submit feedback without type', async () => {
        await expect(
            submitFeedback.execute({
                type: '',
                comment: 'example comment',
                screenshot: 'data:image/png;base64',
            })
        ).rejects.toThrow();
    });

    it('should be able to submit feedback without comment', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: '',
                screenshot: 'data:image/png;base64',
            })
        ).rejects.toThrow();
    });

    it('should be able to submit feedback with an invalid screenshot', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'example comment',
                screenshot: 'screenshot invalid',
            })
        ).rejects.toThrow();
    });
});
