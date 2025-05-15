import ACLPanOSTable from "../components/tables/fwdvip_table/VIPTable"
import { keepPreviousData, QueryClientProvider, QueryClient, useQuery, } from '@tanstack/react-query';

const queryClient = new QueryClient();

const ACLPanOS = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ACLPanOSTable client={queryClient}/>
        </QueryClientProvider>
    );
}

export default ACLPanOS;