import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state={
            language: 'java',
            theme: 'monokai',
            keyboardHandler: 'normal'
        };
    }
    
    onChange(newValue) {
        // implement API logic here
    }

    render() {
        return(
            <AceEditor
                mode={this.state.language}
                theme={this.state.theme}
                keyboardHandler={this.state.keyboardHandler}
                onChange={this.onChange}
                editorProps={{$blockScrolling: true}}
                showGutter={true}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,}}
            />
        );
    }
}