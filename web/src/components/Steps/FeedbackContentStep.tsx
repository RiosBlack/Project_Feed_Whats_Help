import { feedbackType, feedbackTypes } from '../WidgetForm';
import CloseButton from '../CloseButton';
import { ArrowLeft } from 'phosphor-react';
import ScreenShotButton from '../WidgetForm/ScreenShotButton';
import { FormEvent, useState } from 'react';

interface FeedbackContentStepProps {
    feedbackType: feedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export default function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const [screenshot, setScreenshot] = useState<string | null>(null);

    const [comment, setComment] = useState('');

    function handleSubmitFeedback(e: FormEvent) {
        e.preventDefault();
        console.log({
            screenshot,
            comment,
        });

        onFeedbackSent();
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] test-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-400 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo"
                    onChange={e => setComment(e.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenShotButton
                        screenshot={screenshot}
                        onScreenShotTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        disabled={comment.length === 0}
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    );
}
