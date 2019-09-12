import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import DocumentTitle from 'react-document-title';

@withRouter
@translate()
@inject("store")
@observer
export default class Editor extends Component
{
    render()
    {
        const main = <div>Editor</div>;
        return <DocumentTitle title={this.props.store.appname}>{main}</DocumentTitle>;
    }
}