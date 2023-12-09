import React from "react";
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import { Stack } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Body from "./components/Body";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/*" element={<Navigate to = "/" />} />
        </Routes>
        {/* <Body sidebar>
          <Posts />
        </Body> */}
      </BrowserRouter>
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
