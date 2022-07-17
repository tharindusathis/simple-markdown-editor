import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import emoji from 'remark-emoji';

const Preview = ({value}:{
    value: string
}) => {



    return (
        <div className="w-full h-full">
            <ReactMarkdown
                className='markdown' 
                children={value || ''}
                remarkPlugins={[remarkGfm, emoji]} 
                rehypePlugins={[rehypeHighlight]}/>
        </div>
    )
}

export default Preview