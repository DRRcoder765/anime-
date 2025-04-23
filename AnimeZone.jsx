import React, { useState } from "react";

const animeList = [
  {
    title: "Naruto Hindi Dubbed",
    embed: "https://drive.google.com/file/d/1aBcDxyz12345678/preview",
  },
  {
    title: "One Piece Hindi Dubbed",
    embed: "https://drive.google.com/file/d/1bCdEfg98765432/preview",
  },
];

export default function AnimeZone() {
  return (
    <div className="p-4 space-y-6">
      {animeList.map((anime, index) => (
        <AnimeCard key={index} anime={anime} />
      ))}
    </div>
  );
}

function AnimeCard({ anime }) {
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    haha: 0,
    wow: 0,
    sad: 0,
  });
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleReaction = (type) => {
    setReactions({ ...reactions, [type]: reactions[type] + 1 });
  };

  const handleComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="border p-4 rounded shadow space-y-2 bg-white">
      <h2 className="text-xl font-bold">{anime.title}</h2>
      <iframe
        src={anime.embed}
        width="100%"
        height="300"
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => handleReaction("like")} className="px-2 py-1 bg-blue-500 text-white rounded-full">👍 Like ({reactions.like})</button>
        <button onClick={() => handleReaction("love")} className="px-2 py-1 bg-pink-500 text-white rounded-full">❤️ Love ({reactions.love})</button>
        <button onClick={() => handleReaction("haha")} className="px-2 py-1 bg-yellow-400 text-black rounded-full">😂 Haha ({reactions.haha})</button>
        <button onClick={() => handleReaction("wow")} className="px-2 py-1 bg-purple-500 text-white rounded-full">😮 Wow ({reactions.wow})</button>
        <button onClick={() => handleReaction("sad")} className="px-2 py-1 bg-gray-600 text-white rounded-full">😢 Sad ({reactions.sad})</button>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          placeholder="Add a comment..."
          className="flex-grow p-1 border rounded"
        />
        <button onClick={handleComment} className="px-2 py-1 bg-green-500 text-white rounded">Post</button>
      </div>
      <div className="space-y-1">
        {comments.map((c, i) => (
          <div key={i} className="border p-1 rounded bg-gray-100">- {c}</div>
        ))}
      </div>
    </div>
  );
}
