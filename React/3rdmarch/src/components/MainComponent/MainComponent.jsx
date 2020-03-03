import React from "react";
import styles from "./MainComponent.module.css";
import Card from "../card/Card";
import { data } from "../../data";

const MainComponent = () => {
  return (
    <div className={styles.container}>
        {/* Old way */}
      {/* {data.map(item => (
        <Card key={item.id} name={item.name} age={item.age} skills={item.skills} image={item.image} />
      ))} */}
      {data.map(item => (
        <React.Fragment key={item.id}>
          <Card
            
            {...item}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MainComponent;
