import MonacoEditor from "@monaco-editor/react"
import { useEffect, useState } from "react"

const Editor = ({onChange, defaultValue}:{
    onChange?: (arg: string) => void,
    defaultValue?: string
}) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        onChange && onChange(value)
    }, [value])

    return (
        <div className="flex w-full h-full">
            <MonacoEditor
                key={1}
                defaultLanguage="markdown"
                defaultValue={defaultValue}
                onChange={(value, _event) => setValue(value || "a")}
            />
        </div>
    )
}

export default  Editor