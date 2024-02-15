export const SocialCard = ( { href, icon } ) => {
    return (
        <a href={ href } target={"_blank"} className={"social-card"}>
            { icon }
        </a>
    )
}