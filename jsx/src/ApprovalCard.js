import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to delete this?
                </div>
                <div>
                    {props.children}
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div cassName="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;