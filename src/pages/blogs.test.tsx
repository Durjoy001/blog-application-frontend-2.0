import {Blogs} from './blogs';
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';


describe('home page test', () => {

    let container : HTMLDivElement

    beforeEach( () =>{
        container = document.createElement('div');
        document.body.appendChild(container);
        //ReactDOM.render(<Blogs /> , container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    test('Renders correctly', () => {
        const inputs = container.querySelectorAll('input');
        console.log(inputs)
        expect(inputs).toHaveLength(0)
    })
    test('renders blog title and content', () => {
        const name = 'This is 2nd blog';
        const blogContent = 'blog2';
        render(<Blogs/>);
    
        const titleElement = screen.getByText(name);
        const contentElement = screen.getByText(blogContent);
    
        expect(titleElement).toBeInTheDocument();
        expect(contentElement).toBeInTheDocument();
      });

      test('renders a list of blog titles', () => {
        const blogData = [
          { id: 1, name: 'This is 1st blog', description: 'blog1' , creator : 'user1'},
          { id: 2, name: 'This is 2nd blog', description: 'blog2' , creator : 'user2'},
          { id: 3, name: 'This is 3rd blog', description: 'blog3' , creator : 'user3'},
        ];
        render(<Blogs/>);
        const blogTitleElements = screen.getAllByRole('heading', { level: 2, name: /This .* blog/i });
        expect(blogTitleElements).toHaveLength(blogData.length);
        blogTitleElements.forEach((element, index) => {
          expect(element).toHaveTextContent(blogData[index].name);
        });
      });
    // render(<Blogs />)
})