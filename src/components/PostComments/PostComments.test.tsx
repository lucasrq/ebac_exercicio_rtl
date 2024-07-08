// Post.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Post from '.';
describe('Teste para o componente Post', () => {
  test('Deve renderizar corretamente', () => {
    render(<Post />);
    

    expect(screen.getByText('Comentar')).toBeInTheDocument();
    
    
    const textarea = screen.getByRole('textbox', { name: '' }); 
    expect(textarea).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Comentar' });
    expect(button).toBeInTheDocument();
  });

  test('Deve adicionar um novo comentário', () => {
    render(<Post />);
    
    const textarea = screen.getByRole('textbox', { name: '' }); 
    const button = screen.getByRole('button', { name: 'Comentar' });
    fireEvent.change(textarea, { target: { value: 'Novo comentário' } });
    fireEvent.click(button);
    const novoComentario = screen.getByText('Novo comentário');
    expect(novoComentario).toBeInTheDocument();
  });
});
