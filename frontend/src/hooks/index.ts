import axios from "axios";
import { useEffect, useState } from "react";
import { IBlog } from "../types";
import { getAuthToken } from "../utility";
import { getBaseUrl } from "../utils/function";

export function useBlogs({ page, limit }: { page: number; limit: number }) {
  const [loading, setLoading] = useState(true);

  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const [prev, setPrev] = useState<{
    page?: number;
    limit?: number;
  }>({});

  const [next, setNext] = useState<{
    page?: number;
    limit?: number;
  }>({});

  useEffect(() => {
    axios
      .get(`${getBaseUrl()}/blog/bulk?page=${page}&limit=${limit}`, {
        headers: {
          Authorization: `${getAuthToken()}`,
        },
      })
      .then((response) => {
        setBlogs(response.data?.data);
        setNext(response.data?.next);
        setPrev(response.data?.prev);
        setLoading(false);
      });

    return () => {
      setLoading(true);
    };
  }, [page]);

  return {
    loading,
    blogs,
    prev,
    next,
  };
}

export function useBlog({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);

  const [blog, setBlog] = useState<IBlog>();

  useEffect(() => {
    axios
      .get(`${getBaseUrl()}/blog/${id}`, {
        headers: {
          Authorization: `${getAuthToken()}`,
        },
      })
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blog,
  };
}
