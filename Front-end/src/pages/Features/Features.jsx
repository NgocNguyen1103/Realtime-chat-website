import React from 'react'
import './features.css'
import Freatures_item1 from '../../components/login/Features_item1/Freatures_item1'
import Freatures_item2 from '../../components/login/Features_item2/Features_item2'
import splash_screen from '../../assets/splash_screen.png'
import chat_everything from '../../assets/chat_everything.png'
import unlimited_connection from '../../assets/unlimited_connection.png'
import your_community from '../../assets/your_community.png'
import emotion from '../../assets/emotion.png'
const Features = () => {
    return (
        <div className='features'>
            <Freatures_item1 title='A place for meaningful conversations'
                content='Connect with your friends and family, build your community, and deepen your interests.'
                image={chat_everything}
                textColor="#007BFF" />

            <Freatures_item2 title='Unlimited Conection'
                content='Freedom to connect with people, expand your life, and discover the world without limits '
                image={unlimited_connection}
                textColor="black" />


            <Freatures_item1 title='Create your own community'
                content='Create your own communicated space, connect to people that have the same interest.'
                image={your_community}
                textColor="black"
                marginLeft='50px' />

            <Freatures_item2 title='Chat with your emotion'
                content='Chat is not only with a bunch of text, you can also send your emotion, make a conversation become meaningful '
                image={emotion}
                textColor="black"
                marginLeft='50px' />


        </div>

    )
}

export default Features