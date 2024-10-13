import React, { useState } from 'react';
import { Upload, Image, Modal } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import './image.css';
import { useCropStore } from '../../store/image'; // Import Zustand store

const Img: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
  ]);

  // Zustand state
  const { recropOpen, setRecropOpen, recropFile, setRecropFile } = useCropStore();

  const [previewImage, setPreviewImage] = useState<string>('');
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    // Set the file to recrop and open the cropping modal using Zustand store
    setRecropFile(file);
    setRecropOpen(true);
  };

  const handleRecrop = () => {
    // Handle recropping logic here
    setRecropOpen(false);
    setRecropFile(null); // Reset the file after recropping
  };

  return (
    <>
      <ImgCrop rotationSlider>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload>
      </ImgCrop>

      {/* Recrop logic triggered through Zustand store */}
      <Modal
        visible={recropOpen}
        footer={null}
        onCancel={() => setRecropOpen(false)}
        onOk={handleRecrop}
      >
        <p>Recropping Image...</p>
      </Modal>

      {/* Preview Image Modal */}
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default Img;
