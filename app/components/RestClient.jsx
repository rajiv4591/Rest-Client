import React from 'react';

import Header from 'Header';
import Content from 'Content';

var RestClient = React.createClass({
    render: () => {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
});

module.exports = RestClient;