import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
		<div >
			<div>
				<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt="Profile Info"/>
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
  </div>
	)
}

export default ProfileInfo;