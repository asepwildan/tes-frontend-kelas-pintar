import React, { useState, useRef } from "react";
import styles from "./change-ava.module.css";
import axios from "axios";
const ChangeAva = () => {
    const Token =
        "wTPb3I47TnooWoJijkUw65YIhp72X3YrE5fA+c27mZcJzEka6Uxp2jTV3qMabKESnxpFnARAWFE8NN79qcf3Dw==";
    const [imageTes, setImageTes] = useState(null);
    const inputFile = useRef(null);
    const [picture, setPicture] = useState([]);

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const handlechangeAva = (e) => {
        setImageTes(e.target.files[0]);
        setPicture(URL.createObjectURL(e.target.files[0]));
    };

    const submitAva = (e) => {
        e.preventDefault();

        let formdata = new FormData();
        formdata.append("file", imageTes);

        axios
            .put("https://staging-satrio.kelaspintar.co.id/lpt-api/api/file", formdata, {
                headers: {
                    Authorization: `${Token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setImageTes(null);
                setPicture([]);
            })
            .catch((error) => {
                console.log(error);
            });
        e.target.reset();
    };

    return (
        <div className={styles.changeAvaContainer}>
            <div className={styles.changeAvaBox}>
                <div className={styles.avaDetailContainer}>
                    <div className={styles.avaImgContainer}>
                        {picture.length <= 0 ? (
                            <div className={styles.avaDefault}></div>
                        ) : (
                            <img className={styles.imagePreview} src={picture} alt="previewdfdf" />
                        )}
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <button>Ambil Dari kamera</button>
                    <button onClick={onButtonClick}>Ambil dari Gallery</button>
                </div>
            </div>

            <form id="myform" onSubmit={submitAva} className={styles.formImg}>
                <input
                    type="file"
                    name="image"
                    id="customfileinput"
                    onChange={handlechangeAva}
                    ref={inputFile}
                />
                <br />
                <br />
            </form>
            {imageTes === null ? (
                <div></div>
            ) : (
                <div className={styles.buttonSaveContainer}>
                    <button form="myform" type="submit" name="upload" className="submitAva">
                        Simpan
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChangeAva;
