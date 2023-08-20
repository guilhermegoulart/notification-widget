import { Rocket, X, Check } from "lucide-react";
import { ElementType, ReactNode } from "react";
  
interface NotificationProps {
  text: string;
  icon: ElementType;
}

export function Notification({text, icon: Icon}: NotificationProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Icon className="w-6 h-6 text-violet-500 mt-3"/>
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
              {text}
            </p>
            <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              <span>Convite</span>
              <span>Há 3 minutos</span>
            </div>
          </div>
          <div className="flex gap-2 self-center">
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 dark:bg-zinc-800 hover:bg-zinc-500 dark:hover:bg-zinc-700">
                <X className="w-3 h-3 text-zinc-50 "/>
              </button>
              <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600">
                <Check className="w-3 h-3 text-zinc-50"/>
              </button>
            </div>
        </div>
  )
}