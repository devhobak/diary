import { authApi } from "../instance";
interface GetViewListType {
   totalCount: number;
   page: number;
   limit: number;
   prevPage: string;
   nextPage: string;
   logList: GetRecordType[];
}

interface GetRecordType {
   id: number;
   user_id: number;
   datetime: string;
   content_title: string;
   content_main: string;
   color: string;
   content_image: string;
}
interface LogType {
   log: GetViewListType;
}

interface GetCharDataType {
   monthArray: number[];
}

const GetViewList = async (Page: number, id: number): Promise<LogType> => {
   try {
      const res = await authApi.get<LogType>(`/api/log/${id}/list`, {
         params: {
            page: Page,
         },
      });
      return res.data;
   } catch (err) {
      return Promise.reject(err);
   }
};

const GetChartData = async ({ ...data }: { year: number; user_id: number; totalNumber: number }) => {
   try {
      const res = await authApi.get<GetCharDataType>(`/api/log/${data.user_id}/${data.year}`);
      return res.data;
   } catch (error) {
      return Promise.reject(error);
   }
};
export { GetViewList, GetChartData };
