import React from 'react';
import RequestListItem from './RequestListItem';

const RequeststList = () => {
    return (
        <div className="requests">
            <p>List requests</p>
            <div className="requests-filter">
                <p>Filter options</p>
            </div>
            <div className="requests-table">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name request</th>
                            <th>Content request</th>
                            <th>Author create</th>
                            <th>Create at</th>
                            <th>Category</th>
                            <th>Assignee</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>
                        <RequestListItem></RequestListItem>

                    </tbody>
                </table>
            </div>
            {/* end requests table */}
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
};

export default RequeststList;