import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {useSession} from 'next-auth/react';
import {setupServer} from 'msw/node'
import {rest} from 'msw'
import CreateProject from './create';
jest.mock("next-auth/react");

const mockUseSession = useSession as jest.Mock;
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
            status: "authenticated"
        })

        const {container} = render(
                <CreateProject/>
        );
        expect(screen.getByText("Submit Project")).toBeInTheDocument();
    })
    
})

