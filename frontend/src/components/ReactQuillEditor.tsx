import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface ReactQuillEditorProps {
  value: string | undefined;
  theme: string;
  onChange: (value: string) => void;
}
//theme: "snow"
export const ReactQuillEditor = ({
  value,
  onChange,
  theme,
}: ReactQuillEditorProps) => {
  return (
    <ReactQuill
      theme={theme}
      style={{
        height: "200px",
      }}
      value={value}
      onChange={onChange}
    />
  );
};
