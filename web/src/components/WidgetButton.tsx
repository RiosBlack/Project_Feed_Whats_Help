import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import WidgetForm from './WidgetForm';

export function WidgetButton() {
    return (
        <Popover className="absolute bottom-4 right-4 md:right-8 md:right-8 flex flex-col items-end">
            {/* botão que abre o pop na tela, ele vai renderizar o forms */}
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            <Popover.Button className="bg-[#8257E6] rounded-full px-3 h-12 text-white flex items-center group">
                {/* Chat que mostra quando o hover é acionado */}
                <ChatTeardropDots className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    );
}
