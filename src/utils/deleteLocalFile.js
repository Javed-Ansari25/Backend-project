import fs from "fs";
import path from "path";

const deleteLocalFile = (filePath) => {
  try {
    if (!filePath) return;

    // resolve absolute path (safe)
    const absolutePath = path.resolve(filePath);

    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
      console.log("Local file deleted:", absolutePath);
    }
  } catch (error) {
    console.error("Error while deleting local file:", error.message);
  }
};

export default deleteLocalFile;
