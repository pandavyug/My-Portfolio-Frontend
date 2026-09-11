import { useEffect } from "react";

//GET Api
    export async function getData(){
        const response = await fetch("https://my-portfolio-backend-sandy.vercel.app/userdata");
        const result = await response.json();
        console.log("Data fetched:", result);
        return result;
    }

export function UserData({ data, submitted }) {

  useEffect(() => {

    if (!submitted || !data) return;


    //POST Api
    async function postData() {
      try {
        const response = await fetch("https://my-portfolio-backend-sandy.vercel.app/userdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error("POST failed:", result);
          return;
        }

        console.log("Data posted:", result);

      } catch (error) {
        console.error("Error posting data:", error);
      }
    }

    postData();

  }, [data, submitted]);

  return null;
}