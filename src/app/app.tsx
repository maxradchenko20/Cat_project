import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatModal } from 'components/cat-modal.component';
import { HomePage } from '../pages/home.page';

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <CatModal />
  </BrowserRouter>
);
