
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const animeList = [
  {
    title: "Naruto Hindi Dubbed",
    embed: "https://drive.google.com/file/d/1aBcDxyz12345678/preview"
  },
  {
    title: "One Piece Hindi Dubbed",
    embed: "https://drive.google.com/file/d/1bCdEfg98765432/preview"
  }
];

export default function AnimeZone() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
    sad: 0
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
    <Card className="rounded-2xl shadow-lg">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">{anime.title}</h2>
        <div className="aspect-video">
          <iframe
            src={anime.embed}
            width="100%"
            height="100%"
            allow="autoplay"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => handleReaction("like")} className="px-2 py-1 bg-blue-500 text-white rounded-full">👍 Like ({reactions.like})</button>
            <button onClick={() => handleReaction("love")} className="px-2 py-1 bg-pink-500 text-white rounded-full">❤️ Love ({reactions.love})</button>
            <button onClick={() => handleReaction("haha")} className="px-2 py-1 bg-yellow-400 text-black rounded-full">😂 Haha ({reactions.haha})</button>
            <button onClick={() => handleReaction("wow")} className="px-2 py-1 bg-purple-500 text-white rounded-full">😮 Wow ({reactions.wow})</button>
            <button onClick={() => handleReaction("sad")} className="px-2 py-1 bg-gray-600 text-white rounded-full">😢 Sad ({reactions.sad})</button>
          </div>
          <div className="flex gap-2">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Add a comment..."
              className="flex-grow p-1 border rounded"
            />
            <button
              onClick={handleComment}
              className="px-3 bg-green-500 text-white rounded"
            >
              Post
            </button>
          </div>
          <ul className="mt-2 space-y-1">
            {comments.map((c, i) => (
              <li key={i} className="bg-gray-100 p-2 rounded">{c}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
