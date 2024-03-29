import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultAvatar from './default-avatar.svg';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width='48'
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  name: 'Friend',
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;