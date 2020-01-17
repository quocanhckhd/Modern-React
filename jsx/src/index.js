//import React and React DOM from libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommonDetail from './CommonDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommonDetail 
                    name="Sam" 
                    timeAgo="Today at 3:45pm" 
                    title="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail 
                    name="Alex" 
                    timeAgo="Today at 3:45pm" 
                    title="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail 
                    name="Alex" 
                    timeAgo="Today at 3:45pm" 
                    title="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail
                    name="Alex" 
                    timeAgo="Today at 3:45pm" 
                    title="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail 
                    name="Alex" 
                    timeAgo="Today at 3:45pm" 
                    title="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail 
                    name="Alex" 
                    timeAgo="Today at 3:45pm" 
                    title="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail 
                    name="Alex" 
                    timeAgo="Today at 3:45pm" 
                    title="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

//Take the react component component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);