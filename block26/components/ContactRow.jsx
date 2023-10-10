import React, { useState } from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
  const [setContact, setSelectedContactId] = useState ("")
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}