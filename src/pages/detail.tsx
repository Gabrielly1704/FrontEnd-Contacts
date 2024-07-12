import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Contact } from "../dto/ContactDTO";

export default function Detail() {
  const [contact, setContact] = useState<Contact>({} as Contact);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3333/contact/${id}`).then((data) =>
      data.json().then((contact) => setContact(contact))
    );
  });
  return (
    <div>
      <>
        <h2>{contact.name}</h2>
        <h2>{contact.phone}</h2>
        <h2>{contact.email}</h2>
        <h2>{contact.adress}</h2>
      </>
      <div>
        <button>Editar Contato</button>
        <button>Deletar Contato</button>
      </div>
    </div>
  );
}
