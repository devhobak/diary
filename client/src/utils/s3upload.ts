import AWS from "aws-sdk";

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
      ACL: "public-read",
      Bucket: config.bucketName,
      Key: `upload/${imageFile.name}`,
      Body: imageFile,
   };

   const uploadFile = (): AWS.S3.ManagedUpload.SendData | any => {
      let clientS3 = new AWS.S3.ManagedUpload({ params: s3_params });
      return clientS3
         .promise()
         .then(data => {
            return data.Location;
         })
         .catch(err => {
            return err;
         });
   };

   return { uploadFile };
}
