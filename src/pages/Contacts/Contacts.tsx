import { type FC } from 'react'

export interface NotFoundProps {}

const Contacts: FC<NotFoundProps> = () => {
  return <div className="notfound">This is Contacts Page</div>;
};

export default Contacts;