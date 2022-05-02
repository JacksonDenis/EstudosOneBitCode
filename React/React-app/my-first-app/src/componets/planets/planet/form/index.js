import React, { Fragment, useState } from "react";

const initialstate = {
    name: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialstate);

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name] : e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addSatellite(fields);
        event.preventDefault();
        setFields(initialstate);
    };

    return (
        <Fragment>
            <Form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" name="name" type="text"  value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <br />
                <input type="submit" />
            </Form>

        </Fragment>
    )
}

export default Form;