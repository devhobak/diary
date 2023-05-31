export {};
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_BUCKET_NAME: string;
            REACT_APP_REGION: string;
            REACT_APaP_ACCESS: string;
            REACT_APP_SECRET: string;
            ENV: 'test' | 'dev' | 'prod';
        }
    }
}
