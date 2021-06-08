import React from 'react';

function RequestHistoryItem(props) {
    return (
        <div className="request-completed">
            <div className="user-info">
                <div className="user-avatar" />
                <div className="user-name">
                    <p>Tran Minh Quang</p>
                </div>
            </div>
            <div className="request-completed-name">
                <p>Xin cap man hinh roi</p>
            </div>
            <div className="request-completed-date">
                <p>9/9/1999</p>
            </div>
        </div>
    );
}

export default RequestHistoryItem;