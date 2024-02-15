export const SocialCards = ({title, icon, color, href}) => {
    return (
        <>
            <a className={"cursor-pointer"} href={ href } target={"_blank"}>
                <section className={"shadow-bright-50 flex place-items-center rounded-md mb-2 p-2 " +
                    "active:shadow-inset-50 active:text-yellow-500 " + color}>
                    <img src={icon} className={"rounded-xl mr-1"}/>
                    <p>{title}</p>
                </section>
            </a>
        </>
    )
}