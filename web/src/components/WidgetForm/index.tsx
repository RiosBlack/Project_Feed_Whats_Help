import { useState } from 'react';

import BugImageUrl from '../../assets/bug.png';
import LampImageUrl from '../../assets/lamp.png';
import OtherImageUrl from '../../assets/outro.png';
import FeedbackTypeStep from '../Steps/FeedbackTypeStep';
import FeedbackContentStep from '../Steps/FeedbackContentStep';
import FeedbackSuccessStep from '../Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: LampImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: OtherImageUrl,
            alt: 'Imagem de três pontos',
        },
    },
};
//fazendo com que só pegue os tipos do objeto de cima no typescript
export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
    const [feedbackType, setFeedbackTypes] = useState<FeedbackType | null>(
        null
    );
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackTypes(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep
                            onFeedbackTypeChanged={setFeedbackTypes}
                        />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito por Douglas Rios -{' '}
                <a
                    className="underline underline-offset-2"
                    href="www.github.com/RiosBlack"
                >
                    GitHub
                </a>
            </footer>
        </div>
    );
}
