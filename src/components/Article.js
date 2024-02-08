import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  // Function to generate coffee cup or bento box emojis based on minutesToRead
  const generateEmojis = (minutes, emoji) => {
    const count = Math.ceil(minutes / (emoji === '☕️' ? 5 : 10));
    return Array.from({ length: count }, (_, i) => emoji);
  };

  const coffeeEmojis = generateEmojis(minutesToRead, '☕️');
  const bentoEmojis = generateEmojis(minutesToRead, '🍱');

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {minutesToRead > 30
          ? bentoEmojis.map((emoji, index) => (
              <span key={index}>{emoji}</span>
            ))
          : coffeeEmojis.map((emoji, index) => (
              <span key={index}>{emoji}</span>
            ))}{' '}
        {minutesToRead} min read
      </p>
    </article>
  );
}

export default Article;