export const DefaultText = ( {text, margin} ) => {
    return (
        <p className={"bg-gradient-to-r from-pink-500 to-blue-700 text-transparent bg-clip-text "
            + (margin === "0" ? "mb-3" : margin === "1" ? "m-0" : 'my-3')}>
            {text}
        </p>
    )
}