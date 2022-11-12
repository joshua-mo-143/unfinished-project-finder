import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Layout from './Layout'
import {useSession} from 'next-auth/react';
jest.mock("next-auth/react");

const mockUseSession = useSession as jest.Mock

describe('Header default component', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    })

    it('should render layout', () => {
        mockUseSession.mockReturnValue({
            status: "authenticated"
        })

        const {container} = render(
                <Layout>
                <h1>Testing with Jest</h1>
            </Layout>
        );
        expect(screen.getByText("Testing with Jest")).toBeInTheDocument();
    })
    it
})

