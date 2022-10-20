import { useState } from "react";
import NewsletterSignupForm from "../components/NewsletterSignupForm";

import UsersList from "../components/UsersList";

export default function IndexPage() {
  const showNewsletterWidget = false;

  const [show, setShow] = useState<boolean>(showNewsletterWidget);


  setTimeout(()=>{
    setShow(true)
}, 10000)


  return (
    <>
      <UsersList />

      {show && (
        <div>
          <h2>Join Our Newletter</h2>
          <NewsletterSignupForm />
        </div>
      )}
    </>
  );
}
