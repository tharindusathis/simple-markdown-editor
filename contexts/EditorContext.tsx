import React, { useState } from "react";

export type EditorContextType = {
    selectedEditorValue: string;
    setSelectedEditorValue: (value: string) => void;
};

const editorContextDefault: EditorContextType = {
    selectedEditorValue: '',
    setSelectedEditorValue: (value) => {console.log('[setSelectedEditorValue]', value)},
};

export const EditorContext = React.createContext<EditorContextType>(editorContextDefault);

export const EditorContextProvider = ({ children }: {
    children: React.ReactNode
}) => {

     const [selectedEditorValue, setSelectedEditorValue] =
         useState<string>(editorContextDefault.selectedEditorValue);

    return (
        <EditorContext.Provider value={{
            selectedEditorValue,
            setSelectedEditorValue,
        }}>
            {children}
        </EditorContext.Provider>
    )
}