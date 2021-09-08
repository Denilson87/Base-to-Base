import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone';

import './style.css';

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} id="dropzone-content">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag and drop your file here, or click to select file</p>
      }
    </div>
  )
}

export default Dropzone;