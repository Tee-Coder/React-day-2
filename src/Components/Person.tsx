//created by me
//Also created the components

import * as React from 'react';

export interface IPersonProps {
    name: string;
    age:number;
    Homeaddress:string;
    Country:string;
    callbackMethod: (callBackString: string) =>string

}

export default class Person extends React.Component<IPersonProps>{
render ()
{
    let { name, age, Homeaddress, Country, callbackMethod } = this.props;
    return (
        <dl>
            <dt>Name:</dt>
            <dd>{name}</dd>
            <dt>Formatted Callback Result:</dt>
            <dd>{callbackMethod("!!!")}</dd>
            <dt>This Person's age is:</dt>
            <dd>{age}</dd>
            <dt>The person's address is:</dt>
            <dd>{Homeaddress}</dd>
            <dt>Country is:</dt>
    <dd>{Country}</dd>
        </dl>

    );
}

}