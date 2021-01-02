// Post.stories.js

import React from 'react';
import Post from '../components/Post/';

// This default export determines where your story goes in the story list
const story = {
  title: 'Post',
  component: Post
}
export default story;

const Template = (args) => <Post {...args} />;

export const LargeDisplay = Template.bind({});

LargeDisplay.args = {
  data: {
    id: 1,
    title: "Sample post", 
    price: 1200, 
    location: "2-4107 Boul. St. Laurent, Montréal, Québec, H2W 1Y7", 
    images: JSON.stringify([
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609545843/louwer/c4d6pbugqyozm6pf4qrc.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451739/louwer/fxlmux2lrtfxw2jnwuc4.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451739/louwer/vvm1gaghnsmvtpypv7zw.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451739/louwer/akwsiwdkgfypkkvmg8zr.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451739/louwer/aenyvz7uu0h9kuaxzzyg.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451737/louwer/jq28zosd99c9v8glakwd.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451737/louwer/te7w8falydheawckml02.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451736/louwer/vcxvdgkwmjebjqj05hug.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451736/louwer/exqvjxexjj4xze7cafrz.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451736/louwer/baiov1mvqegnpztmjtb9.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451735/louwer/xayyhingeuttgulazixq.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451735/louwer/nwkkh5ucs4h8xhpbd2r1.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451735/louwer/jaq0yfc8trbfwmweb0gw.png",
      "https://res.cloudinary.com/ryanbuckleyca/image/upload/v1609451734/louwer/nyve9b14od4xzogvhcjo.png"
    ]), 
    text: "Sample text. Lorem ipsum fuck the system.", 
    link: "www.ryanbuckley.ca"
  }
};