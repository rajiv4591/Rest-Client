import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

var Header = React.createClass({
    openRajivProfile: function() {
        window.open('http://rajivratanreddy.herokuapp.com');
    },
    render: function () {
        return (
            <div>
                <AppBar
                    title={<span className='header-title'><i className="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;R e s t  &nbsp; C l i  e n t</span>}
                    iconElementRight={<FlatButton label="Created By: Rajiv ratan Reddy" onClick={this.openRajivProfile}/>}
                    showMenuIconButton={false}
                 />
            </div>
        );

    }
});

module.exports = Header;