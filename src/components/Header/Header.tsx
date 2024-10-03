import { type FC } from 'react'
import style from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom';
import { PagesEnum } from '@/app/router/Router';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <Link to={PagesEnum.PROCEDURE}>
            <img src="/logo.png" alt="Logo" className={style.logo} />
          </Link>
          <nav className={style.headerNav}>
            <NavLink to={PagesEnum.PROCEDURE} className={style.link}>
              Записаться на процедуру
            </NavLink>
            <NavLink to={PagesEnum.CONTACTS} className={style.link}>
              Контакты
            </NavLink>
          </nav>

          <button className={style.login}>
            <Link to={PagesEnum.NOT_FOUND}>Войти</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header