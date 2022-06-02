import React from "react";
import axios from "axios";

const FileUpload = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("files", selectedFile);

    axios({
      method: "POST",
      url: "http://localhost:3001/api/file/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    // try {
    //   const response = await axios({
    //     method: "post",
    //     url: "/api/upload/file",
    //     data: formData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } catch(error) {
    //   console.log(error)
    // }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect} />
      <button type="submit" value="Upload File">
        Upload
      </button>
    </form>
  );
};

export default FileUpload;
