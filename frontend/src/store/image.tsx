import { create } from 'zustand';
import { UploadFile } from 'antd/es/upload/interface';

interface CropState {
  recropOpen: boolean;
  recropFile: UploadFile | null;
  setRecropOpen: (open: boolean) => void;
  setRecropFile: (file: UploadFile | null) => void;
}

export const useCropStore = create<CropState>((set) => ({
  recropOpen: false,
  recropFile: null,
  setRecropOpen: (open) => set({ recropOpen: open }),
  setRecropFile: (file) => set({ recropFile: file }),
}));
