import SOCIAL_ICONS from "../data/social_icons";

function Social() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Reach out</h2>
      {
        SOCIAL_ICONS.map((SOCIAL_ICON) => {
            return <SocialIcon social_icon={SOCIAL_ICON} />;
        })
      }
    </div>
  );
}

function SocialIcon(props) {
  const { icon, link } = props.social_icon;
  return (
    <a href={link}>
      <img src={icon} style={{ width: "20px" }} alt="social" />
    </a>
  );
}

export default Social;
