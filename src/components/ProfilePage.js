import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import userImage from '../images/user-image.png';
import '../css/Profile.css';
import Plans from './Plans';

function ProfilePage() {
  const user = useSelector(selectUser);
  return (
    <div className="profile-screen">
      <div className="profile-main">
        <h1>Welcome, back! {auth?.currentUser?.displayName}</h1>
        <div className="profile-info">
          <img src={userImage} alt="User Logo Icon" />
          <div className="profile-detail">
            <h3>{user.email}</h3>
            <div className="profile-plans">
              <h3>Plans</h3>
              <Plans />
              <button
                className="profile-signout"
                onClick={() => auth.signOut()}
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
