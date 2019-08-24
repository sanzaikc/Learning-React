import React from "react";

const MusicMasterArtist = ({ artist }) => {
  if (!artist) return null;
  const { name, images, followers, genres } = artist;
  return (
    <div>
      <img
        src={images[0] && images[0].url}
        alt="artist-profile"
        className="profile"
      />
      <h2>{name}</h2>
      <p>
        <span>Genres</span>: {genres.join(", ")}
      </p>
      <p>{followers.total} followers</p>
    </div>
  );
};

export default MusicMasterArtist;
