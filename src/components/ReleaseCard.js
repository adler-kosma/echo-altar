import 'bulma/css/bulma.css';

function ReleaseCard ({title, artist, releaseDate, description, image}) {
    return (
        <div className="card">
            <div className='card-image'>
                <figure className='image is-1by1'>
                    <img src= {image} alt={title + artist}/>
                </figure>
            </div>
            <div className='card-content'>
                <div className='media-content'>
                    <p className='title is-4'>{title}</p>
                    <p className='subtitle is-6'>{artist}</p>
                </div>
                <div className='content'>{releaseDate}</div>
                <div className='content'>{description}</div>
            </div>
        </div>
    )
}

export default ReleaseCard;