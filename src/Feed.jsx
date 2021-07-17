import React, { useState , useEffect} from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import useWindowSize from './useWindowSize';

function Feed() {
    const [posts, setPosts] = useState([]);
    const { width } = useWindowSize();

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id:doc.id, 
            data: doc.data() })))
        );
    }, []);

    return (
        (width <= 500) ? (
            <>
                <div className="feed" style={{"padding": "30px 2px", "align-items": "center"}}>
                    <StoryReel />
                    <MessageSender />
                    
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            profilePic={post.data.profilePic}
                            message={post.data.message}
                            timestamp={post.data.timestamp}
                            username={post.data.username}
                            image={post.data.image}
                        />
                    ))} 
                </div>
            </>
        ) : (
            <div className="feed">
                <StoryReel />
                <MessageSender />
                
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))}   
            </div>
        )
    )
}

export default Feed
