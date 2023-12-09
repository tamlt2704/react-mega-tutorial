import React from "react";
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import { Stack } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Body from "./components/Body";

export default function App() {

  return (
    <Container fluid className="App">
      <Header />
      <Body sidebar>
        <Posts />
      </Body>
      {/* <Container>
        <Stack direction="horizontal">
          <Sidebar />
          <Container>
            <Posts />            
          </Container>
        </Stack>
      </Container> */}
      {/* <p>
        <b>{post.author.username}</b> &mdash; {post.timestamp}
        <br />
        {post.text}
      </p> */}
    </Container>
  );
}
