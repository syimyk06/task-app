import { type FC } from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import { PagesEnum } from '@/app/router/Router';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <nav className={style.headerNav}>
            <NavLink to={PagesEnum.ADD_TASK} className={style.link}>
              Add task
            </NavLink>
            <NavLink to={PagesEnum.TASKS} className={style.link}>
              Tasks
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header