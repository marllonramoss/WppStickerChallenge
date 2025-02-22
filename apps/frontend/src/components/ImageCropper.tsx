"use client";

import { useState, useRef } from "react";
import Cropper from "react-easy-crop";
import Image from "next/image";
import getCroppedImg from "@/func/cropImage";
import { IconDownload, IconUpload } from "@tabler/icons-react";
import Link from "next/link";

const ImageCropper = () => {
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStep(1);
    const file = event.target.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      alert("Selecione um arquivo PNG ou JPEG.");
    }
  };

  const handleCropComplete = async (_: any, croppedAreaPixels: any) => {
    if (image) {
      const croppedImg = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImg);
    }
  };

  const handleDownload = () => {
    if (croppedImage) {
      const link = document.createElement("a");
      link.href = croppedImage;
      link.download = "imagem-cortada.webp"; // WebP
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {step === 0 && (
        <>
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          <label
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Escolher Imagem
          </label>
        </>
      )}

      {image && step === 1 && (
        <>
          <div className="relative w-[50vh] h-[50vh] bg-gray-200">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={handleCropComplete}
            />
          </div>
          <button
            className="w-fit h-fit bg-transparent border border-white px-4 py-2"
            onClick={() => setStep(2)}
          >
            Next Step
          </button>
        </>
      )}

      {croppedImage && step === 2 && (
        <>
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-lg font-semibold">Cropped Image:</h3>
            <Image
              src={croppedImage}
              alt="Cropped"
              width={512}
              height={512}
              className="rounded-lg"
            />
          </div>
          <button
            className="w-fit h-fit bg-transparent border border-white px-4 py-2"
            onClick={() => setStep(1)}
          >
            Back to crop
          </button>
          <button
            onClick={handleDownload}
            className="mt-2 bg-green-600 px-4 py-2 text-white rounded-lg hover:bg-green-700 transition flex justify-center items-center gap-2"
          >
            <IconDownload />
            <span>Download</span>
          </button>
          <button
            onClick={handleDownload}
            className="mt-2 bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2"
          >
            <IconUpload />
            <span>Save on hub</span>
          </button>
          <Link
            href={"/"}
            onClick={() => window.location.reload()}
            className="mt-2 bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2"
          >
            <span>New Image</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default ImageCropper;
