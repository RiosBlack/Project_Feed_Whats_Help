import CloseButton from '../CloseButton';
import { FeedbackType, feedbackTypes } from '../WidgetForm';

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export default function FeedbackTypeStep({
    onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex items-center justify-center py-5 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 grid itens-center justify-center gap-2 border-2 border-transparent hover:border-[#8257E6] focus:border-[#8257E6] focus:outline-none"
                            type="button"
                            onClick={() =>
                                onFeedbackTypeChanged(key as FeedbackType)
                            }
                        >
                            <img
                                className="w-9"
                                src={value.image.source}
                                alt={value.image.alt}
                            />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
