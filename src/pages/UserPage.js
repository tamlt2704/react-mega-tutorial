import React from 'react'
import Body from '../components/Body';
import { useParams } from 'react-router-dom';

export default function UserPage() {
  const {username} = useParams();

    console.log(username);
  return (
    <Body sidebar>
        <h1>{username}</h1>
        <p>TODO</p>
    </Body>
  )
}
