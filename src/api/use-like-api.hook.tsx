import { useState } from 'react';

export const useLikeApi = () => {
  const [likes, setLikes] = useState<string[]>([]);

  const getLikes = (): string[] => {
    try {
      const likes = localStorage.getItem('likes');
      return JSON.parse(likes || '[]');
    } catch (e) {
      return [];
    }
  };

  const saveLikes = (likes: string[]) => {
    setLikes(likes);
    localStorage.setItem('likes', JSON.stringify(likes));
  };

  const like = (id: string) => {
    const likes = getLikes();
    likes.push(id);
    saveLikes(likes);
  };

  const dislike = (id: string) => {
    const likes = getLikes();
    const filteredLikes = likes.filter((l) => l !== id);
    saveLikes(filteredLikes);
  };

  const isLiked = (id: string) => {
    const likes = getLikes();
    return likes.includes(id);
  };

  return {
    like,
    dislike,
    isLiked,
  };
};
