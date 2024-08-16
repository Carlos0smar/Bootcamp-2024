export type Contact = {
    id: string;
    name: string;
}

function wait(ms: number): Promise<void>{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function contactLoader(): Promise<Contact[]>{
    const contact = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await contact.json();
    await wait(2000);
    return data;
}

export {contactLoader};