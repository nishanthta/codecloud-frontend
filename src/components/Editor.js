import React, { Component } from 'react';

export default class Editor extends React.Component {
    render() {
        return(
            <form>
                <label>Code here</label>
                <textarea>Happy hacking!</textarea>
            </form>
        );
    }
}