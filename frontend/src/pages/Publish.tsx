import type { CreatePostType } from "@ganesh2111/common-app";
import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ButtonWithLoader } from "../components/ButtonWithLoader";
import { ProgressBar } from "../components/PogressBar";
import { ReactQuillEditor } from "../components/ReactQuillEditor";
import { getAuthToken } from "../utility";
import { getBaseUrl } from "../utils/function";

export const Publish = () => {
  const [content, setContent] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    updateProgress();
  }, [title, content]);
  const navigate = useNavigate();

  const onEditorValueChange = (value: string) => {
    setContent(value);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const updateProgress = () => {
    let completedSteps = 0;

    if (title?.trim()) {
      completedSteps += 1;
    }
    //Check This condition
    if (content?.trim() && content.trim() != "<p><br></p>") {
      completedSteps += 1;
    }

    const totalSteps = 3; // Total steps in the form
    setProgress((completedSteps / totalSteps) * 100); // Calculate percentage
  };

  const onSubmitHandler = async () => {
    if (!title || !content) {
      setIsLoading(false);
      return;
    }
    const blogPayload: CreatePostType = {
      title,
      content,
    };

    setIsLoading(true);

    axios
      .post(
        `${getBaseUrl()}/blog`,
        {
          ...blogPayload,
        },
        {
          method: "post",
          headers: {
            Authorization: `${getAuthToken()}`,
          },
        }
      )
      .then((res) => {
        if (!res) {
          return;
        }
        setProgress(100);
        setIsLoading(false);
        Swal.fire({
          title: "Blog is published successfully",
          icon: "success",
        });

        navigate(`/blogs/${res?.data?.id}`);

        // setTimeout(() => {
        //   setTitle("");
        //   setContent(undefined);
        //   setProgress(0);
        // }, 2000);
      })
      .catch((error) => {
        Swal.fire({
          title: "Something Went Wrong",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <ProgressBar width={`${progress}%`}></ProgressBar>
        <div>{Math.floor(progress)}%</div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="block mb-2 text-xl font-medium text-gray-900 "
        >
          Blog Title
        </label>
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500 "
          onChange={onTitleChange}
          value={title}
        />
      </div>

      <div className="mb-16">
        <label htmlFor="editor" className="text-xl font-medium">
          Blog Content
        </label>
        <ReactQuillEditor
          onChange={onEditorValueChange}
          value={content}
          theme={"snow"}
        ></ReactQuillEditor>
      </div>

      <div className="m-2">
        <ButtonWithLoader
          isLoading={isLoading}
          label="Submit"
          onClick={onSubmitHandler}
        ></ButtonWithLoader>

        {/* TODO:: VIEW BLOG IN PREVIEW <ButtonWithLoader
          isLoading={isLoading}
          label="Preview"
        ></ButtonWithLoader> */}
      </div>
    </div>
  );
};
