import VIPTable from "../components/tables/VIPTable"
import { keepPreviousData, QueryClientProvider, QueryClient, useQuery, } from '@tanstack/react-query';

const queryClient = new QueryClient();

const LBVIP = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <VIPTable client={queryClient}/>
        </QueryClientProvider>
    );
}

export default LBVIP;