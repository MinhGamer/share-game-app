import http from '../api/axiosConfig';

class FileUploadService {
  // This progress event are expensive (change detection for each event), so you should only use when you want to monitor it.
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append('file', file);

    return http.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get('/files');
  }
}

export default new FileUploadService();
