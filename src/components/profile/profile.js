import React, { useState } from "react";
import styles from "./profile.module.css";
import camera from "./camera.png";
import back from "./back.png";
import ChangeAva from "../change-ava/change-ava";
const Profile = () => {
    let [box, setBox] = useState(false);

    return (
        <div className={styles.profileContainer}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={back} alt="back" onClick={() => setBox(false)} />
                    {box ? <p>Ganti Foto Profil</p> : <p>Profil</p>}
                </div>
            </header>
            {box === false ? (
                <div>
                    <div className={styles.profileBox}>
                        <div className={styles.infoContainer}>
                            <div className={styles.avaContainer} onClick={() => setBox(true)}>
                                <img src={camera} alt="camera" />
                            </div>
                            <div className={styles.profileInfo}>
                                <p className={styles.profileName}>John Doe</p>
                                <p>Kelas 10 IPA 8</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxContainerDummy}>
                        <div className={styles.boxDummy}></div>
                        <div className={styles.boxDummy}></div>
                        <div className={styles.boxDummy}></div>
                    </div>
                </div>
            ) : (
                <ChangeAva />
            )}
        </div>
    );
};

export default Profile;
