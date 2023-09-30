// 서버로 부터 불러온 일기 데이터 - 홈 모달
export interface GetRecordType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    color: string;
    content_image: string;
}

// 서버로 부터 불러온 일기 데이터들 - 일기기록 페이지
export interface GetViewListType {
    totalCount: number;
    page: number;
    limit: number;
    prevPage: string;
    nextPage: string;
    logList: GetRecordType[];
}

export interface ResponseLogType<T> {
    log: T;
}

// 서버로 보낼 데이터 타입
export interface PostDataType {
    user_id: number;
    datetime: string;
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    color: FormDataEntryValue;
}

//게시글 수정 시 서버로 보낼 데이터 타입
export interface EditType {
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    color: FormDataEntryValue;
}

//회원가입 시 서버로 보낼 데이터 타입
export interface LoginType {
    username?: FormDataEntryValue;
    password: FormDataEntryValue;
    email: FormDataEntryValue;
}

export interface SignupFormType {
    username?: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    repassword?: FormDataEntryValue;
}
