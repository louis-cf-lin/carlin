import { FC } from "react";

import classes from "./Services.module.scss";

const Services: FC = () => {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.card}>
          <i className="material-icons-outlined grad-icon">dns</i>
          <h3 className={classes.cardTitle}>Servers</h3>
          <div className={classes.cardText}>
            We deploy everything from small industrial computers for
            customer-facing use to large rack deployments for global enterprises
          </div>
        </div>

        <div className={classes.card}>
          <i className="material-icons-outlined grad-icon">storage</i>
          <h3 className={classes.cardTitle}>Storage</h3>
          <div className={classes.cardText}>
            State-of-the-art SAN deployment technologies ensure fast, scalable,
            redundant, secure, and cost-effective storage
          </div>
        </div>

        <div className={classes.card}>
          <i className="material-icons-outlined grad-icon">filter_drama</i>
          <h3 className={classes.cardTitle}>IoT</h3>
          <div className={classes.cardText}>
            Scale your business efficiently and intelligently through IoT
            solutions aimed at optimising growth and driving innovation
          </div>
        </div>

        <div className={classes.card}>
          <i className="material-icons-outlined grad-icon">lan</i>
          <h3 className={classes.cardTitle}>Networking</h3>
          <div className={classes.cardText}>
            Deploying interconnected systems for small-scale LAN’s and large
            intercity fibre networks, and everything in between
          </div>
        </div>

        <div className={classes.card}>
          <i className="material-icons-outlined grad-icon">fingerprint</i>
          <h3 className={classes.cardTitle}>Security</h3>
          <div className={classes.cardText}>
            Building secure integration systems including cameras, access
            control, intrusion & fire detection, and public announcement
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
