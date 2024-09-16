import React from "react";
import styles from "./ProfileImage.module.css";

const ProfileImage = ({ email }) => {
  // Extraer las iniciales del correo electrónico
  const initials = email ? email.split("@")[0].charAt(0).toUpperCase() : "?";

  console.log(typeof initials);

  return (
    <div className={styles.profileImageContainer}>
      <div className={styles.profileImage}>
        {initials}
        <div className={styles.tooltip}>{email}</div>
      </div>
    </div>
  );
};

export default ProfileImage;
