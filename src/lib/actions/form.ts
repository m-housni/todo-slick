// export enhance method
export const enhance = (form: HTMLFormElement, {
  result
}) => {

  // 
  const handleSubmit = async (event: Event) => {
    event.preventDefault(); // prevent page refresh

    try {
      const body = new FormData(form); // get form data
      const res = await fetch(form.action, {
        method: form.method,
        headers: {
          accept: "application/json"
        },
        body
      });

      if (res.ok) { // handle success
        result(res, form);
      } else { // handle failure
        console.error("Fetch error: ", await res.text());
      }
    } catch (error) { // catch submission errors
      console.error("Could not submit the form: ", error);
    }
  };

  form.addEventListener("submit", handleSubmit); // add submit listener

  return {
    destroy() {
      form.removeEventListener("submit", handleSubmit); // remove submit listener
    }
  }
};