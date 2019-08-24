import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {
  const { link, image } = props.socialProfiles;
  return (
    <a href={link} target="blank_target">
      <img
        src={image}
        alt="social_icons"
        style={{ display: "inline-block", width: 50, height: 50, margin: 20 }}
      />
    </a>
  );
};

const SocialProfiles = () => (
  <div>
    <h3>Connect with Dktaz</h3>
    <div>
      {SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
        return (
          <SocialProfile
            key={SOCIAL_PROFILES.id}
            socialProfiles={SOCIAL_PROFILES}
          />
        );
      })}
    </div>
  </div>
);

export default SocialProfiles;
