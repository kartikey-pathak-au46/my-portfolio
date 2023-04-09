const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/kartikey-pathak-au46"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Kartikey's GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/kartikey-pathak-a6236623a/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Kartikey's LinkedIn Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.instagram.com/kartikey_pathak08/"
      >
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Kartikey's Instagram Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://twitter.com/Kartikey963"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Kartikey's Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
