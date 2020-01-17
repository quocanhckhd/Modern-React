import React from 'react';

const CommonDetail = (props) => {
    const { name, timeAgo, title, avatar } = props;

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {name}
                </a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">{title}</div>
            </div>
        </div>
    );
}

export default CommonDetail;