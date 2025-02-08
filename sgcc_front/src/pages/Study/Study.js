import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';
import 'Study.css';

const RssFeed = ({ feedUrl }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeed = async () => {
            setLoading(true);
            const parser = new Parser();

            try {
                const feed = await parser.parseURL(feedUrl);
                setItems(feed.items);
            } catch (err) {
                setError('RSS 피드를 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchFeed();
    }, [feedUrl]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="rss-feed">
            <h2>RSS Feed</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                        <p>{item.pubDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RssFeed;
