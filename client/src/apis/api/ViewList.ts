import { authApi } from '../instance';

import type {
    GetViewListType,
    ResponseLogType,
} from '../../types/serverDataType';

interface ResponseCharDataType {
    monthArray: number[];
}

const GetViewList = async (
    Page: number,
    id: number
): Promise<ResponseLogType<GetViewListType>> => {
    try {
        const res = await authApi.get<ResponseLogType<GetViewListType>>(
            `/api/log/${id}/list`,
            {
                params: {
                    page: Page,
                },
            }
        );
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

const GetChartData = async ({
    ...data
}: {
    year: number;
    user_id: number;
    totalNumber: number;
}): Promise<ResponseCharDataType> => {
    try {
        const res = await authApi.get<ResponseCharDataType>(
            `/api/log/${data.user_id}/${data.year}`
        );
        return res.data;
    } catch (error) {
        return Promise.reject(error);
    }
};
export { GetViewList, GetChartData };
