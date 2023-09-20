import AWS from 'aws-sdk';
import { toast } from 'react-toastify';

export default function s3upload(imageFile: File) {
    const config = {
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
    };

    AWS.config.update({
        region: config.region,
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
    });

    const s3_params = {
        ACL: 'public-read',
        Bucket: config.bucketName,
        Key: `upload/${imageFile.name}`,
        Body: imageFile,
    };

    const uploadFile = (): AWS.S3.ManagedUpload.SendData | any => {
        let clientS3 = new AWS.S3.ManagedUpload({ params: s3_params });
        return clientS3
            .promise()
            .then((data) => {
                toast.success('이미지 업로드 완료!');
                return data.Location;
            })
            .catch((err) => {
                toast.error(
                    '이미지 업로드에 오류가 발생했습니다. 관리자에게 문의부탁드립니다.'
                );
                return err;
            });
    };

    return { uploadFile };
}
