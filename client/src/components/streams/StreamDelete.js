import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    const actions = (
        //same as div, but does not show any html, keeps all element into 1 root for jsx render
        <React.Fragment> 
            <button className="ui button negative" >Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return (
        <div>
            StreamDelete
        <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream"
                actions={actions}
                onDismiss={() => history.push('/')}
            />
        </div>
    )
};

export default StreamDelete;