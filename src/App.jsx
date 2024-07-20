import { useState } from "react";
import ContactUs from "./components/ContactUs";
import SuccessState from "./components/SuccessState";
function App() {
  const [success, setSuccess] = useState(false);
  function handleSuccess() {
    setSuccess((prev) => !prev);
  }
  return (
    <div className="bg-GreenLight h-screen  flex justify-center items-center">
      {!success && <ContactUs onSuccess={handleSuccess} />}
      {success && (
        <>
          {" "}
          <SuccessState />
          <ContactUs onSuccess={handleSuccess} />
        </>
      )}
    </div>
  );
}

export default App;
