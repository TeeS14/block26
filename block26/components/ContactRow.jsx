import React, { useState } from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
  const [selectedContactId, setSelectedContactId] = useState(contact.id);
  
  return (
    <tr
      onClick={() => {
        setSelectedContactId(selectedContactId);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
