import { render, screen } from '@testing-library/react'
import type { Meta, StoryObj } from '@storybook/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

import HeroSection from './ui/HeroSection'

describe('HeroSection', () => {
  it('renders CTA button', () => {
    render(<HeroSection />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })
})

const meta: Meta<typeof HeroSection> = {
  title: 'Widgets/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroSection>

export const Default: Story = {
  render: () => <HeroSection />,
}