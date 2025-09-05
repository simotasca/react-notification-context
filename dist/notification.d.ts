import { default as React } from 'react';
export type Notification<T = any> = {
    id: string;
    createdAt: number;
    Component: React.ElementType<T>;
    props: T;
};
export type NotifyContext = {
    customNotify<T>(element: React.ElementType<T>, props: (p: {
        createdAt: number;
        remove(): void;
    }) => T): void;
    remove(id: string): void;
    clear(): void;
};
export type NotificationsQueueContext = {
    queue: Notification[];
    setQueue: React.Dispatch<React.SetStateAction<Notification[]>>;
};
export type NotificationContext = NotificationsQueueContext & NotifyContext;
type NotificationContextOptions = {
    lifetime?: number;
    cleanupInterval?: number;
};
export declare function initNotificationContext(options?: NotificationContextOptions): NotificationContext;
declare const useNotificationsQueue: () => NotificationsQueueContext;
declare const useNotify: () => NotifyContext;
export { useNotificationsQueue, useNotify };
/**
 * ### SUGGESTED USAGE:
 * creare un hook custom che espone una funzione per l'invio di notifiche con un componente predefinito
 * ```
 * function useCustomNotify() {
 *   const { customNotify, clear, delete } = useNotify();
 *   const notify = (title: string, description: string) => {
 *     customNotify(YourCustomComponent, (p) => ({ title, description, type }))
 *   };
 *   const enotify = (title: string, description: string) => {
 *     customNotify(YourCustomErrorComponent, (p) => ({ title, description, type }))
 *   };
 *   return { clear, delete, notify, enotify };
 * }
 * ```
 */
export declare function NotificationProvider(p: React.PropsWithChildren<{
    value: NotificationContext;
}>): import("react/jsx-runtime").JSX.Element;
