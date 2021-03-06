import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import Post from "./Post";

import styled from "styled-components";

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const PostContainer = styled.div`
  flex: 0 1 20%;
  min-width: 300px;
  height: 300px;
  /* background-color: #f6f5f7; */
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  margin: 10px;
  padding: 15px;
`;

class Posts extends Component {
  render() {
    return (
      <div>
        <PostsContainer>
          {this.props.posts.map(post => {
            return (
              <PostContainer>
                <Post
                  title={post.title}
                  contents={post.contents}
                  created_at={post.created_at}
                  updated_at={post.update_at}
                />
              </PostContainer>
            );
          })}
        </PostsContainer>
      </div>
    );
  }
}

export default Posts;
