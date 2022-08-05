import CloseButton from './CloseButton';

import BugImageUrl from '../assets/bug.png';
import LampImageUrl from '../assets/lamp.png';
import OtherImageUrl from '../assets/outro.png';

const feedbackTypes = {
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

export default function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col itens-center gap-2 border-2 border-transparent hover:border-[#8257E6] focus:border-[#8257E6] focus:outline-none"
                            type="button"
                        >
                            <img
                                src={value.image.source}
                                alt={value.image.alt}
                            />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>

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
