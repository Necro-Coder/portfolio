export const Card = ( {content, image} ) => {
    return (
        <section className={"shadow-inset rounded-md w-1/3 m-8"}>
            <img src={image} className={"p-2 rounded-xl"}/>
            <p>{content}</p>
        </section>
    )
}