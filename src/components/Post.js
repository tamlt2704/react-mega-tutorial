import React from "react";
import { Stack, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import TimeAgo from "./TimeAgo";

export default function Post({ post }) {
  return (
    <Stack direction="horizontal" gap={3} className="Post">
      <Image src={post.author.avatar_url + "&s=48"} />
      <div>
        <p>
          <Link to={'/user/' + post.author.username}>{post.author.username}</Link> 
          &nbsp; &mdash; &nbsp;
          <TimeAgo isoDate={post.timestamp} />
        </p>
        <p>
          {post.text}
        </p>
      </div>
    </Stack>
  );
}
