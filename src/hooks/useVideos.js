import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);
    
    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    }

    // Could also use JS convention, which is to return an object
    return [videos, search];
};

export default useVideos;