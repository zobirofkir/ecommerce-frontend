import React, { useEffect } from "react";
import ContactComponent from "../../components/contacts/ContactComponent";

const ContactScreen = () => {
  useEffect(() => {
    document.title = "Contacts";
  }, []);
  return (
    <div>
      <ContactComponent />
    </div>
  );
};

export default ContactScreen;
