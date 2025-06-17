
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Todo App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByText(/todo list/i)).toBeInTheDocument()
  })

  it('can add a new todo', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/add todo/i)
    const button = screen.getByText(/add/i)

    await userEvent.type(input, 'New Todo')
    await userEvent.click(button)

    expect(screen.getByText('New Todo')).toBeInTheDocument()
  })


  it('can toggle a todo as completed', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/add todo/i)
    const button = screen.getByText(/add/i)

    await userEvent.type(input, 'Toggle me')
    await userEvent.click(button)

    const todoText = screen.getByText('Toggle me')
    await userEvent.click(todoText)

    const todoItem = todoText.closest('li')
    expect(todoItem).toHaveStyle({ textDecoration: 'line-through' })
  })
  

  it('can delete a todo', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/add todo/i)
    const addButton = screen.getByText(/add/i)

    await userEvent.type(input, 'Delete me')
    await userEvent.click(addButton)

    const deleteButton = screen.getByRole('button', { name: /delete/i })
    await userEvent.click(deleteButton)

    expect(screen.queryByText('Delete me')).not.toBeInTheDocument()
  })
})