import React from 'react';


export interface BlogProps
{
    blogTitle: string;
    blogcontentMethod: (blogcontent: string)=> string
    theindex: number;
}

export  class Blog extends React.Component<BlogProps>{
render ()
{
    let { blogTitle , theindex, blogcontentMethod } =this.props;

    return(

        <dl>
            <dt>Title is:</dt>
            <dd>{blogTitle}</dd>
            <dt>The Contents are great and they are</dt>
            <dd>{blogcontentMethod("!!!")}</dd>
            <dt>The number we are in is:</dt>
            <dd>{theindex}</dd>
        </dl>
        )

}

}