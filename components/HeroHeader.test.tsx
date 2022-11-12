import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import HeroHeader from './HeroHeader'

describe('Header default component', () => {
    it('should render brand name', () => {
        const {container} = render(
            <HeroHeader/>
        );
        expect(screen.getByText("Heehee")).toBeInTheDocument();
    })
    it
})

