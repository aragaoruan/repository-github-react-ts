import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashbord: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore reposotórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="*">
          <img
            src="https://avatars2.githubusercontent.com/u/16023843?s=460&u=9fda30f3a9d504cf35135b8c26f47f5bca750eee&v=4"
            alt="Ruan"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="*">
          <img
            src="https://avatars2.githubusercontent.com/u/16023843?s=460&u=9fda30f3a9d504cf35135b8c26f47f5bca750eee&v=4"
            alt="Ruan"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="*">
          <img
            src="https://avatars2.githubusercontent.com/u/16023843?s=460&u=9fda30f3a9d504cf35135b8c26f47f5bca750eee&v=4"
            alt="Ruan"
          />

          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashbord;
