import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { ButtonWithLoader } from "../components/ButtonWithLoader";
import { ReactQuillEditor } from "../components/ReactQuillEditor";
import { getAuthToken } from "../utility";
import { getBaseUrl } from "../utils/function";

export const Publish = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const onEditorValueChange = (value: string) => {
    setContent(value);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onSubmitHandler = async () => {
    const blogPayload = {
      title,
      content,
    };

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
      .then((response) => {
        if (response.status === 200) {
          //do something
        }
      });
  };

  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Blog Title
        </label>
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onTitleChange}
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
