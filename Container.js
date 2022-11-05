import {ChatLeftFill, HeartFill, ShareFill } from 'react-bootstrap-icons';
const Container = (props) => {
  return (
    <div className="card">
        <div className="left">
            <div className="Description">
                <div className="About">
                    <img src={props.poster_img} alt="#"/>
                    <div>
                        <span className="name">{props.poster_name}</span>
                        <span className="date">
                            <span>{props.year},</span>
                            <span>{props.Director}</span>
                        </span>
                        <span className="genre">
                            <span className="duration">{props.duration}</span>&emsp;
                            <span>{props.genre}</span>
                        </span>
                    </div>
                </div>
                <div className="description">{props.description}</div>
            </div>
            <div className="share">
                <ShareFill color='#7a7a7a' size={20} cursor="pointer"/>
                <HeartFill color='#7a7a7a' size={20} cursor="pointer"/>
                <ChatLeftFill color='#7a7a7a' size={20} cursor="pointer"/>
            </div>
        </div>
        <div className="background" style={{backgroundImage:`url(${props.poster_img})`}}></div>
    </div>
  )
}

export default Container
