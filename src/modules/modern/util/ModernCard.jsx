export const ModernCard = ( { title, text, icon } ) => {
    return (
        <section className={"modern-card mt-4"}>
            { icon }
            <h3 className={"mouse"}> { title } </h3>
            <p> {text} </p>
        </section>
    )
}