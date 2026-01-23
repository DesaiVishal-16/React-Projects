import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./authService";

const upload = (file) => {
  // Format date to avoid invalid filename characters
  const date = new Date().toISOString().replace(/[:]/g, "-");
  
  // Reference to the storage path for the file
  const storageRef = ref(storage, `images/${date}-${file.name}`);

  // Start the upload task
  const uploadTask = uploadBytesResumable(storageRef, file);
  
  return new Promise((resolve, reject) => {
    try {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(`Upload failed: ${error.message}`);
        },
        () => {
          // Get the download URL once the upload is complete
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              reject(`Failed to get download URL: ${error.message}`);
            });
        }
      );
    } catch (error) {
      reject(`Unexpected error: ${error.message}`);
    }
  });
};

export default upload;

