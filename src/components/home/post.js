import React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';


const style = {
  width: '100%',
  bgcolor: 'background.papers',
  display: "flex",
};


const Post = ({ post }) => {

    return (
        <>
            <List sx={style} aria-label="mailbox folders">
                <Box sx= {{ display: "flex", width: "50%" }}>
                    <Box sx={{ width: "8%"}}>
                        {post.author.profile_images.avatar ? (
                            <Avatar src={post.author.profile_images.avatar} />
                        ) : (
                            // <Avatar sx={{ bgcolor: deepOrange[500] }}>{post.author.username.slice(0, 2)}</Avatar>
                            <Avatar src="/broken-image.jpg" />
                        )}
                        <ListItem sx={{ fontSize: "small", fontWeight: "bold", padding: "0", marginTop: "0.3rem", paddingLeft: "0.3rem" }}>
                            {post.author.username}
                        </ListItem>
                    </Box>
                    <Box sx={{ width: "92%", marginLeft: "1rem" }}>
                        <ListItem sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            {post.tags.map((tag, idx) => <Box sx= {{ marginRight: "0.5rem", fontSize: "small", bgcolor: "primary.main", padding: "0.5rem", borderRadius: "0.3rem", color: "white"}}  key={ tag.pk }>{tag.name}</Box> )}
                        </ListItem>
                        <ListItem component={ Link } to={`/post/${post.pk}`}>
                            {post.title}
                        </ListItem>
                    </Box>
                </Box>
                <Box sx={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    <Box sx={{ display: "flex", marginRight: "1rem" }}>
                        <ChatBubbleIcon sx={{ fontSize: "1.3rem" }}/>
                        <Box>
                            {post.comments.length}
                        </Box>
                    </Box>
                    {/* <Box>
                        <Box>
                            {post.scrapped_users.length}
                        </Box>
                    </Box> */}
                    <Box sx={{ display: "flex", marginRight: "1rem" }}>
                        <VisibilityIcon sx={{ fontSize: "1.3rem" }}/>
                        <Box>
                            {post.viewed_users.length}
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", marginRight: "1rem" }}>
                        <FavoriteIcon sx={{ fontSize: "1.3rem" }}/>
                        <Box>
                            {post.liked_users.length}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "10%", alignItems: "center", display: "flex", paddingLeft: "1rem", justifyContent: "center"}}>
                    <Box>
                        {post.updated_at.split("T")[0]}
                    </Box>
                </Box>
            </List>
            <Divider />
        </>
    );
};

export default Post;