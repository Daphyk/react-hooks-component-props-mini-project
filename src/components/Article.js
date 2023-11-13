function Article( { post }) {
    const renderEmojis = (minutes) => {
        const emojis = [];
        const emojiType = minutes < 30 ? '☕️' : '🍱';
    
        const numberOfEmojis = Math.ceil(minutes / (emojiType === '☕️' ? 5 : 10));
    
        for (let i = 0; i < numberOfEmojis; i++) {
          emojis.push(emojiType);
        }
    
        return emojis.join('');
      };
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.preview}</p>
            <p>{renderEmojis(post.minutes)} {post.minutes} min read</p>
        </article>
    );
}

export default Article;