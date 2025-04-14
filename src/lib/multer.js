import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinery' // Cloudinary config file

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Cloudinary folder name
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'], // Allowed file types
        public_id: (req, file) => file.originalname.split('.')[0], // Use original name
    },
});

const upload = multer({ storage });

export default upload;
