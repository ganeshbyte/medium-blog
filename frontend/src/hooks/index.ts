import axios from "axios";
import { useEffect, useState } from "react";
import { IBlog } from "../types";
import { getAuthToken } from "../utility";
import { getBaseUrl } from "../utils/function";

export function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    axios
      .get(`${getBaseUrl()}/blog/bulk`, {
        headers: {
          Authorization: `${getAuthToken()}`,
        },
      })
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blogs,
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
