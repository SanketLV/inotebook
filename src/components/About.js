import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      About {a.state.name} And he is in class {a.state.class}
    </div>
  );
};

export default About;
