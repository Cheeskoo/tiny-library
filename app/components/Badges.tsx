import type { ReactNode } from "react";

export default function Badges({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-2xl border border-line px-2 w-fit">
            <p className="text-sm capitalize">
                {children}
            </p>
        </div>
    )
}