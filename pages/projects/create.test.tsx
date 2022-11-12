import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {useSession} from 'next-auth/react';
import {setupServer} from 'msw/node'
import {rest} from 'msw'
import {useQuery, QueryClient, QueryClientProvider} from 'react-query'

import CreateProject from './create';
jest.mock("next-auth/react");
jest.mock('react-query');

// const mockQuery = useQuery as jest.Mock;
const mockUseSession = useSession as jest.Mock;
const mockUseQuery = useQuery as jest.Mock;

const queryClient = new QueryClient();
const wrapper = ({children}: any) => {
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}
const server = setupServer(
    
)

describe('Header default component', () => {
// Enable request interception.
beforeAll(() => server.listen())

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers())

// Don't forget to clean up afterwards.
afterAll(() => server.close())

    beforeEach(() => {
        jest.resetAllMocks();
    })

    it('should render page', () => {
        mockUseSession.mockReturnValue({
            status: "authenticated",
            data: {
                username: 'joshua-mo-143'
            }
        })

        const {container} = render(
                <CreateProject/>
        );
        expect(screen.getByText("Submit Project")).toBeInTheDocument();
    })

    it('should make API call', () => {
        
    })
})

