import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';

import ApiService from 'ApiService';

var Content = React.createClass({
    getInitialState: function () {
        return {
            getCheck: true,
            postCheck: false,
            headerType: 'raw',
            rawHeader: '',
            headerError: false
        }
    },
    handleSelection: function (type) {
        return () => {
            if (type === 'get') {
                this.setState({
                    getCheck: true,
                    postCheck: false
                });
            } else if (type === 'post') {
                this.setState({
                    getCheck: false,
                    postCheck: true
                });
            }
        }
    },
    submitRequest: function () {
        var url = this.refs.url.value;
        var error = false;
        if (url) {
            this.setState({
                headerError: false
            });
            if (this.state.rawHeader) {
                try {
                    JSON.parse(this.state.rawHeader);
                } catch (e) {
                    error = true;
                }
            }
            if (error) {
                this.setState({
                    headerError: 'INVALID HEADERS ENTERED'
                });
            } else {
                if (this.state.rawHeader) var headers = this.state.headerType === 'raw' ? JSON.parse(this.state.rawHeader) : '';
                var self = this;
                if (this.state.getCheck) {
                    ApiService.getRequest(url, headers).then(function (response) {
                        console.log(response);
                    }, function (error) {

                    });
                }
            }
        } else {
            this.setState({
                headerError: 'NO URL ENTERED'
            });
        }
    },
    updteHeaderValue: function (e, value) {
        this.setState({
            rawHeader: value
        });
    },
    typeOfHeaders: function (e, value) {
        this.setState({
            headerType: value
        });
    },
    render: function () {

        const styles = {
            checkbox: {
                marginBottom: 16,
                display: 'inline-block'
            }
        };

        var headerField = '';
        var headerError = '';

        if (this.state.headerType === 'raw') {
            headerField = <TextField
                hintText='{"Your Key": "Your Value"}'
                multiLine={true}
                rows={5}
                rowsMax={100}
                onChange={this.updteHeaderValue}
            />;
        } else {

        }

        if (this.state.headerError) {
            headerError = <div className="w3-panel w3-red" style={{width: '300px'}}>
                                {this.state.headerError}
                        </div>;
        } else {
            headerError = '';
        }

        return (
            <div className="content">
                <Card>
                    <CardHeader
                        title={<span className='user-name'>Rest Client lets you test your restful web services</span>}
                        subtitle={<span>Supports testing for GET, POST, PUT and DELETE calls</span>} />
                    <CardText>
                        <div className='card-divider'>
                            <p>Test your rest APIs here:</p>
                        </div><br />
                        <span className='checkbox-container'>
                            <Checkbox
                                label={<span className='checkbox-label'>GET</span>}
                                style={styles.checkbox}
                                checked={this.state.getCheck}
                                onClick={this.handleSelection('get')} />
                        </span>
                        <span className='checkbox-container'>
                            <Checkbox
                                label={<span className='checkbox-label'>POST</span>}
                                style={styles.checkbox}
                                checked={this.state.postCheck}
                                onClick={this.handleSelection('post')} />
                        </span><br />
                        <label>
                            <input type="text" placeholder="Enter URL Here" ref='url' />
                        </label><br />

                        <RadioButtonGroup name="shipSpeed" defaultSelected="raw" onChange={this.typeOfHeaders}>
                            <RadioButton
                                value="raw"
                                label="Raw Headers"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value="pairs"
                                label="Header Keys & Values"
                                style={styles.radioButton}
                            />
                        </RadioButtonGroup>

                        {headerField}

                        {headerError}
                    </CardText>
                    <CardActions>
                        <RaisedButton label="Test" onClick={this.submitRequest} />
                    </CardActions>
                </Card>
            </div>
        );
    }
});

module.exports = Content;