import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Products from './components/cardProduct';

test('renders product names', async () => {
  render(<Products />);
  
  const productNames = await screen.findAllByText(/name/i);
  productNames.forEach((item) => {
    expect(item).toBeInTheDocument();
  });
});

test('renders product prices', async () => {
  render(<Products />);

  const productPrices = await screen.findAllByText(/\$\d+/); 
  productPrices.forEach((item) => {
    expect(item).toBeInTheDocument();
  });
});

test('renders product images', async () => {
  render(<Products />);

  const productImages = await screen.findAllByRole('img');
  productImages.forEach((image) => {
    expect(image).toHaveAttribute('src');
  });
});

test('renders products component', () => {
  render(<Products />);

  const productsContainer = screen.getByTestId('products-container');
  expect(productsContainer).toBeInTheDocument();
});

test('snapshot test', async () => {
  const { container } = render(<App />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="css-1pztcqb"
  >
    <div
      class="css-nigiex"
    >
      <div
        class="css-1fu9xcu"
      >
        <p
          class="chakra-text css-504jus"
        >
          JGM
        </p>
        <ul
          class="css-trc5qa"
          role="list"
        >
          <li
            class="css-0"
          >
            Sobre
          </li>
          <li
            class="css-0"
          >
            Produtos
          </li>
          <li
            class="css-0"
          >
            Contato
          </li>
          <div
            class="chakra-stack css-fhxiwe"
          >
            <button
              class="chakra-button css-1b2gkzy"
              type="button"
            >
              <span
                class="chakra-button__icon css-1wh2kri"
              >
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  focusable="false"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Star"
                  >
                    <path
                      d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"
                    />
                  </g>
                </svg>
              </span>
              Favoritos
            </button>
            <button
              class="chakra-button css-1b2gkzy"
              type="button"
            >
              Sacola
              <span
                class="chakra-button__icon css-1hzyiq5"
              >
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  focusable="false"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </ul>
      </div>
    </div>
    <div
      class="css-1pz2eex"
    >
      <div
        class="css-9dc277"
      >
        <div
          class="chakra-stack css-zkihp8"
        >
          <p
            class="chakra-text css-htn18f"
          >
            Aqui na JGM presamos pela qualidade dos produtos com foco no cliente.
          </p>
          <p
            class="chakra-text css-blsoa3"
          >
            Adquira nossos melhores produtos em alta!
          </p>
        </div>
        <img
          alt="Dan Abramov"
          class="chakra-image css-59k3h6"
          src="https://cdn.pixabay.com/photo/2021/10/07/20/46/playstation-6689793_1280.jpg"
        />
      </div>
      <div
        class="css-1ir7y40"
        data-testid="products-container"
      />
    </div>
    <div
      class="css-hx66"
    >
      <p
        class="chakra-text css-0"
      >
        Todos os direitos reservados, JGM 2024.
      </p>
    </div>
  </div>
</div>
`)
})