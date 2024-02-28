'use client'

export default function GlobalError({
    error,
    reset,
}) {
    return (
        <>
            <div>
                <h2>Oops, Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </div>
        </>
    )
}