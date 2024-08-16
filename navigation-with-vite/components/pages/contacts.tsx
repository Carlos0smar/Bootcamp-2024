import { useEffect, useState } from "react";
import React from "react";
import { useLoaderData} from "react-router-dom";
import {Contact} from "../../src/ContactsLoader";


const Contacts = () => {
    const contacts = useLoaderData() as Contact[];

    
    return (
        <div>
            <h3>Contact</h3>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Contacts