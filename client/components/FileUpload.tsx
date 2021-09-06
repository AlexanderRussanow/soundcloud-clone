import React from "react";

type PropsType = {
  title: string
  setFile: Function;
  accept: string;
};

const FileUpload: React.FC<PropsType> = ({
   title,
  setFile,
  accept,
  children,
}) => {
  const ref = React.useRef<HTMLInputElement>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFile(e.currentTarget.files[0])
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div onClick={() => ref.current.click()}>
        <input
          type="file"
          accept={accept}
          style={{ display: "none" }}
          ref={ref}
          onChange={onChange}
        />
        {children}
      </div>
    </div>
  );
};

export default FileUpload;
