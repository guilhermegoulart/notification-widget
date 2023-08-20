'use client'

import { Rocket, X, Check, ArrowRight } from "lucide-react";
import { Notification } from "./Notification";
import { NotificationRoot } from "./Notification/NotificationRoot";

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden ">
      {/* Header */}
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/* Recent Section */}
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Recentes
        </div>
      </div>

      <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
        <NotificationRoot>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat" />
          <Notification.Actions>
            <Notification.Action onClick={() => {}} icon={X} />
            <Notification.Action onClick={() => {}} icon={Check} className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"/>
          </Notification.Actions>
        </NotificationRoot>

        <NotificationRoot>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat" />
          <Notification.Actions>
            <Notification.Action onClick={() => {}} icon={ArrowRight} className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600"/>
          </Notification.Actions>
        </NotificationRoot>
      </div>

      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Antigas
        </div>
      </div>

      <div className="divide-y-2  divide-zinc-300 dark:divide-zinc-950">
        <NotificationRoot>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat" />
        </NotificationRoot>

        <NotificationRoot>
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat" />
        </NotificationRoot>
      </div>
    </div>
  );
}
