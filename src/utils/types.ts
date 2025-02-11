import type { AllowedComponentProps, VNodeProps } from "vue";

type RawComponentProps<T> =
	T extends new (...args: any) => { $props: infer P; } ? NonNullable<P> :
	T extends (props: infer P, ...args: any) => any ? P :
	{}

type KeyOfVNodeProps = keyof VNodeProps
type KeyOfAllowedComponentProps = keyof AllowedComponentProps
export type ComponentProps<T> = 
    Omit<
        RawComponentProps<T>,
        `$${string}` | KeyOfVNodeProps | KeyOfAllowedComponentProps
    >