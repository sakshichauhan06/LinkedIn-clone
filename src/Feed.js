import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase/compat/app'

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    // this connects realtime listener to our firebase. This will direactly push the message in our post
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(), // this allows us to get any data which is stored behind the post on the db
            }))
        ));
    }, []);

    const sendPost = e => {
        e.preventDefault(); // prevents the default behaviour

        // adds data to firebase
        db.collection('posts').add({
            name: 'Sakshi Chauhan',
            description: 'this is another test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput(""); // this will make the write post input empty after posting our post
    };

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className='feed__inputOption'>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalenderViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed;