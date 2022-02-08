import { useRouter } from "next/router";
import { useEffect } from "react";

export default (ChildComponent) => {
  const composeComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const localStorageLoad = localStorage.getItem("load");
      if (localStorageLoad !== "1") {
        router.push("/signup");
      }
    }, []);
    return (
      <div>
        <ChildComponent {...props} />
      </div>
    );
  };
  return composeComponent;
};
