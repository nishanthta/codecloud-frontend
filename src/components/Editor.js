import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';
import 'brace/snippets/java';
import 'brace/ext/language_tools';
// TODO: Figure out elegant imports for theme and language

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state={
            language: 'java',
            theme: 'monokai',
            keyboardHandler: 'normal',
            width: props.width,
            height: props.height
        };
    }
    
    onChange(newValue) {
        // implement API logic here
    }

    componentWillMount() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        let {language, theme, keyboardHandler, width, height} = this.state;
        return(
            <div style={wrapper}>
                Hello
                <AceEditor
                    style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}
                    mode={language}
                    theme={theme}
                    keyboardHandler={keyboardHandler}
                    onChange={this.onChange}
                    editorProps={{$blockScrolling: Infinity}}
                    showGutter={true}
                    width={width}
                    height={height}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                    }}    
                />
            </div>
        );
    }
}

const wrapper={
    display: 'flex',
}