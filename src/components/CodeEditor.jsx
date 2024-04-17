import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import { ChildComponent } from "../componentcount/Component1";
import { Game } from "../Game/Game";

const CodeEditor = (prop) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [runCodeData, setRunCodeData] = useState(null); // State to hold runCode data


  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const runCode = () => {
    // Get the code entered by the user
    const userCode = editorRef.current.getValue().replace(/\s/g, '');
    // Remove whitespace from the codesnip
    const cleanCodeSnip = prop.answer[language].replace(/\s/g, '');
    // Check if the user code is equal to the codesnip (ignoring whitespace)
    if (userCode === cleanCodeSnip) {
      setRunCodeData(true);
    } else {
      setRunCodeData(false);
    }
  };
  

  const handleChange = (newValue) => {
    setValue(newValue);
    runCode();
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="100%">
          {/* <LanguageSelector language={language} onSelect={onSelect} /> */}
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="55vh"
            theme="vs-dark"
            language={language}
            defaultValue={prop.codesnip[language]}
            onMount={onMount}
            value={value}
            onChange={handleChange}
          // onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} runcode={runCode} />
        
      
        <div className="emptycom"><Game runCodeData={runCodeData}/></div>
        <ChildComponent  runCodeData={runCodeData}/>

      </HStack>
    </Box>
  );
};
export default CodeEditor;



