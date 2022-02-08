import { useContext } from "react";
import MyContext from "store/my-context";

export default function Showcase() {
  const { menuCloseHandler } = useContext(MyContext);

  return (
    <div className="showcase">
      <div className="showcaseoverlay"></div>
      <div className="showcasetext">
        <h1>
          Welcome to <span className="text-red-600 shadow-sm">BESTPICS</span>{" "}
        </h1>
        <p>Get best pictures of all time </p>
      </div>
    </div>
  );
}
