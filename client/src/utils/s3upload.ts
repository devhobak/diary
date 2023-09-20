import AWS from "aws-sdk";
import {
   ListBucketsCommand,
   PutBucketCorsCommand,
   PutObjectCommand,
   PutObjectCommandOutput,
   S3Client,
} from "@aws-sdk/client-s3";
import { fileURLToPath } from "url";

const client = new S3Client({});

export const main = async () => {
   const command = new PutBucketCorsCommand({
      Bucket: process.env.REACT_APP_BUCKET_NAME,
      CORSConfiguration: {
         CORSRules: [
            {
               AllowedHeaders: ["*"],
               AllowedMethods: ["GET", "PUT", "POST", "DELETE"],
               AllowedOrigins: ["*"],
               ExposeHeaders: ["ETag"],
               MaxAgeSeconds: 3600,
            },
         ],
      },
   });

   try {
      const response = await client.send(command);
      console.log(response);
   } catch (err) {
      console.error(err);
   }
};

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

   //    const uploadFile = (): AWS.S3.ManagedUpload.SendData | any => {
   //       let clientS3 = new AWS.S3.ManagedUpload({ params: s3_params });
   //       return clientS3
   //          .promise()
   //          .then(data => {
   //             return data.Location;
   //          })
   //          .catch(err => {
   //             return err;
   //          });
   //    };
   const uploadFile = async (): Promise<any> => {
      const command = new PutObjectCommand({
         Bucket: config.bucketName,
         Key: `upload/${imageFile.name}`,
         Body: imageFile,
      });
      try {
         const response = await client.send(command);
         return response;
      } catch (err) {
         console.error(err);
      }
   };
   if (process.argv[1] === fileURLToPath(import.meta.url)) {
      main();
   }

   return { uploadFile };
}
