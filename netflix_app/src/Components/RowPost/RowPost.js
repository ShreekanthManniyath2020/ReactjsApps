import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import YouTube from "react-youtube";
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
   axios.get(props.url).then((response)=>{
            //console.log(response.data)
            console.log(props)
            setMovies(response.data.results)
        }).catch(err=>{
           // alert('Network Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie = (id)=>{
       // /movie/646380/videos?api_key=1eb4e01cbea2ce4a31f02e6984f21345&language=en-US
       console.log(id);
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
           console.log(response.data)
           if(response.data.results.length!==0){
             setUrlId(response.data.results[0]);
           }
           else{
            setUrlId('');
           }
       })
   
      }
    return (
        <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {
                movies.map((obj)=>{
                    return[

                        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                        //  ,<div className="tooltip">This is the tooltip</div>
                    ]
                    }                   
                )
            }
           
        </div>
       {urlId && <YouTube opts={opts} videoId={urlId.key}/> } 
    </div>
    )
}

export default RowPost
