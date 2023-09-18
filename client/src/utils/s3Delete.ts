import AWS from "aws-sdk";

export default function s3Delete(imageFile: string) {
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
      ACL: "public-read",
      Bucket: config.bucketName,
      Key: `upload/${imageFile}`,
      Body: imageFile,
   };
   const deleteFile = () => {
      let clientS3 = new AWS.S3({ params: s3_params });
      clientS3.deleteObject();
      // clientS3.promise();
   };

   deleteFile();
}
