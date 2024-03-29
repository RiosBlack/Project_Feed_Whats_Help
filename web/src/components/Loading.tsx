import { CircleNotch } from 'phosphor-react';

export default function Loading() {
    return (
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <CircleNotch width="bold" className="w-4 h-4 animate-spin" />
        </div>
    );
}
