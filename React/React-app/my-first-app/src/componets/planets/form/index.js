import React, {Fragment, useState} from "react";

const initialstate = {
    name:"",
    description:"",
}

const Form = (props) => {
    const [fields, setFields] = useState(initialstate)
    const handleChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name] : e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialstate);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={fields.name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="description">description:</label>
                    <input id="description" type="text" value={fields.description} onChange={handleChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>

        </Fragment>
    )
}

export default Form;