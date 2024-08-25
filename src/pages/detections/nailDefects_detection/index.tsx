import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";

function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type.startsWith("image/")) {
        setImage(URL.createObjectURL(selectedFile));
        setFile(selectedFile);
        setIsUploaded(true);
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const selectedFile = event.dataTransfer.files[0];
      if (selectedFile.type.startsWith("image/")) {
        setImage(URL.createObjectURL(selectedFile));
        setFile(selectedFile);
        setIsUploaded(true);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById(
      "fileInput"
    ) as HTMLInputElement | null;
    fileInput?.click();
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      const process = Swal.fire({
        title: "Processing...",
        html: '<div class="swal1-spinner" inline-block; width: 3em; height: 3em; border: 0.4em solid #ccc; border-right-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>',
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const response = await axios.post(
          "https://us-central1-diabetes-detection-430811.cloudfunctions.net/nail",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        Swal.close();
        console.log("File uploaded successfully:", response.data);

        if (response.data.error === "Enter a valid Image") {
          Swal.fire('Error..!', 'Enter a valid Image', 'error');
          return;
        }

        setInput(response.data.class);
        setResponseMessage(response.data.class);
      } catch (error: unknown) {
        Swal.close();
        console.error("Error uploading file:", error);

        if (
          typeof error === 'object' &&
          error !== null &&
          'response' in error &&
          typeof (error as any).response === 'object' &&
          'data' in (error as any).response &&
          typeof (error as any).response.data === 'object' &&
          'error' in (error as any).response.data
        ) {
          const errorMessage = (error as any).response.data.error;
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorMessage,
          });
          setResponseMessage(errorMessage);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while processing the image. Please try again later.',
          });
          setResponseMessage('An error occurred while processing the image. Please try again later.');
        }
      }

    }
  };


  const handleClear = () => {
    setImage(null);
    setFile(null);
    setIsUploaded(false);
    setResponseMessage(null);
  };

  const renderOutput = () => {
    switch (input) {
      case "Diabetic_Nail":
        return (
          <div className="border border-gray-300 rounded-lg p-4 shadow-md w-full md:w-1/2 lg:w-1/3 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            <h2 className="text-lg font-bold mb-4">You nails are infected with diabeties</h2>
            <div className="text-lg font-bold">Instructions:</div>
            <ul className="list-disc pl-6">
              <li>Reduce foods that contain sugar and sweetness</li>
              <li>Immediatly meet your family doctor</li>
              <li>Immediatly meet a dermatologist for make tratements for the nails.</li>
              <li>Probably you are in danger with TYPE 3 Diabetes</li>
              <li>Do a diabetic checkup. (FBS - Fasting Blood Sugar)</li>
            </ul>
          </div>
        );
      case "Non_Diabetic_Nail":
        return (
          <div className="border border-gray-300 rounded-lg p-4 shadow-md w-full md:w-1/2 lg:w-1/3 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            <h2 className="text-lg font-bold mb-4 text-green-600">Healthy Information</h2>
            <p className="text-lg">No specific medicine or nutrition advice needed for healthy condition.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow h-[50vh] pb-10">
        {!isUploaded ? (
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center mt-20 mx-20"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="text-lg text-gray-600">Drag and drop your image here or</div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={handleButtonClick}
            >
              Browse
            </button>
            <br></br>
            <div className="text-lg text-gray-600">to detect Diabetic Nail Infections</div>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center mt-10">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-md mt-16">
              {image && (
                <img
                  src={image}
                  alt="Uploaded preview"
                  className="object-cover w-full h-full"
                />
              )}
              <button
                className="absolute top-2 right-2 px-2 py-1 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              Process Image
            </button>
          </div>
        )}
      </div>
      {responseMessage && (
        <div className="flex justify-center mt-8">
          {renderOutput()}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Index;
