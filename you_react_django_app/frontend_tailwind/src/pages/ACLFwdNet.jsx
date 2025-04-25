import ACLFwdNetTable from "../components/tables/ACLFwdNet"
import { keepPreviousData, QueryClientProvider, QueryClient, useQuery, } from '@tanstack/react-query';

const queryClient = new QueryClient();

const ACLFwdNet = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ACLFwdNetTable client={queryClient}/>
        </QueryClientProvider>
    );
}

export default ACLFwdNet;