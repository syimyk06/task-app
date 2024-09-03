import { type FC } from 'react'
import './NotFound.scss'

export interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
	return (
		<div className='notfound'>
			This is NotFoundPage
		</div>
	);
}

export default NotFound;