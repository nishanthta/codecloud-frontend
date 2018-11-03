import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';
import 'brace/snippets/java';
import 'brace/ext/language_tools';
// TODO: Figure out elegant imports for theme and language

export default class Editor extends React.Component {

    static cursorChanged = false;
    static textChanged = false;

    constructor(props) {
        super(props);
        this.state={
            language: 'java',
            theme: 'monokai',
            keyboardHandler: 'normal',
            width: props.width,
            height: props.height
        };
        this.onChange = this.onChange.bind(this);
        this.onCursorChange = this.onCursorChange.bind(this);
    }

    onCursorChange = ({anchor}) => {
        console.log('Row: ' + JSON.stringify(anchor.row));
        console.log('Column: ' + JSON.stringify(anchor.column));
        Editor.cursorChanged = true;
        this.changeListener();
    }
    
    onChange = (newValue) => {
        console.log(newValue);
        Editor.textChanged = true;
        this.changeListener();
    }

    changeListener() {
        console.log(Editor.textChanged);
        console.log(Editor.cursorChanged);
        if (Editor.textChanged && Editor.cursorChanged) {
            console.log('sending data');
            this.sendData();
        }
    }

    sendData() {
        console.log('Api calls here');
        Editor.textChanged = false;
        Editor.cursorChanged = false;
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
                    onCursorChange={this.onCursorChange}
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