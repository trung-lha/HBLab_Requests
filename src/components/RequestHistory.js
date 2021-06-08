import React from 'react';
import RequestHistoryItem from './RequestHistoryItem';

function RequestHistory(props) {
    return (
        <div className="requests-history">
            <p>History requests</p>
            <RequestHistoryItem></RequestHistoryItem>
            <RequestHistoryItem></RequestHistoryItem>
            <RequestHistoryItem></RequestHistoryItem>
            <RequestHistoryItem></RequestHistoryItem>
            <RequestHistoryItem></RequestHistoryItem>
            <RequestHistoryItem></RequestHistoryItem>
            <div className="requests-paginate">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default RequestHistory;