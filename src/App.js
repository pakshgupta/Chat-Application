import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID='5e037aae-13c9-4f91-9e6b-601aa5845f3d';
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>;

    return(
    <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewsMessage={()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

//username PakshGupta
//Password 123123
export default App;


