import React from 'react';


export interface BlogProps
{
    blogTitle: string;
    blogcontentMethod: (blogcontent: string)=> string
}

export  class Blog extends React.Component<BlogProps>{
render ()
{
    let { blogTitle , blogcontentMethod } =this.props;

    return(

        <dl>
            <dt>blogTitle</dt>
            <dd>{blogTitle}</dd>
            <dt>The Contents are great and they are</dt>
            <dd>{blogcontentMethod("!!!")}</dd>
        </dl>
        )

}

}