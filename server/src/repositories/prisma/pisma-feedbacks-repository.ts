import { prisma } from '../../prisma';
import {
    FeedbackCreateData,
    FeedbacksRepository,
} from './../feedbacks-repositories';

export class PrismaFeedbackRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type: type,
                comment: comment,
                screenshot: screenshot,
            },
        });
    }
}
