import MonacoEditor from "@monaco-editor/react"

const Editor = ({onChange, defaultValue}:{
    onChange?: (arg: string) => void,
    defaultValue?: string
}) => {

    return (
        <div className="flex w-full h-full">
            <MonacoEditor
                key={1}
                defaultLanguage="markdown"
                defaultValue={defaultValue}
                onChange={(value, _event) => onChange  && onChange(value || "")}
            />
        </div>
    )
}

export default  Editor