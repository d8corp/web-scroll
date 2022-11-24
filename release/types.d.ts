export interface ScrollOptions {
    position: number | string;
    attempts?: number;
    timeout?: number;
    timeInterval?: number;
}
export type ScrollCallback = () => any | void;
