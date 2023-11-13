function About ({ imageUrl="https://via.placeholder.com/215Links to an external site.", aboutText}) {
    return (
        <aside>
            <img src={imageUrl} alt="blog logo" />
            <p>{aboutText}</p>
        </aside>
    );
}

export default About;