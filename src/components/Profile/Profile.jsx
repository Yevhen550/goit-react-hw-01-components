import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultAvatar from './default-avatar.svg';

function Profile({
  name,
  tag,
  location,
  profileUrl,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          className={s.avatar}
          src={profileUrl}
          alt={`${name} avatar`}
          width='180'
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  name: 'User',
  profileUrl: defaultAvatar,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Profile;