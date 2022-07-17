import type { NextPage } from 'next'
import * as FlexLayout from "flexlayout-react";
import { useContext } from 'react';
import { EditorContext, EditorContextProvider } from '../contexts/EditorContext';

import dynamic from 'next/dynamic'
import Preview from '../components/Preview';
const Editor = dynamic(() => import('../components/Editor'), {
  ssr: false,
})

const sampleMarkdown = `# Heading

## Heading 2

Some text

\`\`\`
// some code
\`\`\`


| Column1    | Column2              |
| ---------: | :------------------- |
| Row 1      |        ...           |
| Row2       |        ...           |

...
`

const PreviewComponent = () => {
  const {selectedEditorValue: value} = useContext(EditorContext);
  return (
    <div className='w-full h-full p-2'>
      <Preview value={value || sampleMarkdown} />
    </div>   
  )
}

const EditorComponent = () => {
  const {setSelectedEditorValue} = useContext(EditorContext);
  return (
    <div  className='w-full h-full p-2'>
      <Editor 
        onChange={(val)=> setSelectedEditorValue(val)}
        defaultValue={sampleMarkdown}/>
    </div>
  )
}

const layoutJson : FlexLayout.IJsonModel = {
  global: {},
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
          type: "tabset",
          weight: 50,
          children: [
              {
                  type: "tab",
                  name: "Editor",
                  component: "editor",
                  enableClose: false,
              }
          ]
      },{
        type: "tabset",
        weight: 50,
        children: [
            {
                type: "tab",
                name: "Preview",
                component: "preview",
                enableClose: false,
            }
        ]
      }
    ]
  }
}
 
const Home: NextPage = () => {
  
  const factory = ( node: FlexLayout.TabNode ) => {
    const component = node.getComponent();
    if (component === "editor") {
      return <EditorComponent />
    }else if (component === "preview") {
      return <PreviewComponent />
    }
    return ""
  }

  return (
    <EditorContextProvider>
      <div className='flex w-full h-full'>
        <FlexLayout.Layout model={FlexLayout.Model.fromJson(layoutJson)} factory={factory}/>      
      </div>
    </EditorContextProvider>
  )
}

export default Home
