const imageToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No file provided');
        return;
      }
  
      const reader = new FileReader();
  
      reader.onload = () => {
        const base64String = reader.result;
        resolve(base64String);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      // Read the file as a data URL (base64 format)
      reader.readAsDataURL(file);
    });
  };
  
  export default imageToBase64;