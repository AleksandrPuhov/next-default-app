import { useMutation, useQuery } from 'react-query';

import apiHelper from '@/app/api/apiHelper';

const fetchPosts = async () => {
  const parsed = await apiHelper.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const result = parsed.data.filter((x) => x.id <= 10);

  return result;
};

const usePosts = () => {
  return useQuery('posts', fetchPosts);
};

export { usePosts, fetchPosts };
