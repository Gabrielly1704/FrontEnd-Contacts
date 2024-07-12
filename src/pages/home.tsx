import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/contact").then((data) =>
      data.json().then((response) => setContacts(response))
    );
  }, []);

  return (
    <div>
      <h1>Gerencimento de Contatos</h1>
      <h3>Lista de contatos existentes</h3>
      <button>Adicionar contato</button>
      {contacts.map((contact) => (
        <Link to={`/detail/${contact.id}`}>
          <h2>{contact.name}</h2>
        </Link>
      ))}
    </div>
  );
}
